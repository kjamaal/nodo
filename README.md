# No Days Off - Brand Portfolio

A modern, responsive brand portfolio site built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 18.2** - UI library
- **TypeScript 5.2** - Type safety
- **Vite 5.0** - Build tool
- **React Router 6.20** - Client-side routing
- **Tailwind CSS 3.4** - Styling
- **Axios 1.6** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` folder.

### Linting

```bash
npm run lint
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` to set the correct `base` if deploying to a subdirectory:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to GitHub Pages using GitHub Actions or manually.

4. **GitHub Actions (Recommended)**:
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### AWS S3

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your S3 bucket:
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. Configure S3 bucket for static website hosting:
   - Enable "Static website hosting" in bucket properties
   - Set Index document: `index.html`
   - Set Error document: `index.html` (for client-side routing)

4. Set bucket policy for public access:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```

5. Optional: Set up CloudFront for HTTPS and better performance.

## Project Structure

```
src/
├── components/
│   └── layout/
│       ├── Layout.tsx
│       ├── Navigation.tsx
│       └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   └── Contact.tsx
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace favicon in `public/`
- Update meta tags in `index.html`

### Content
- Edit page content in `src/pages/`
- Update navigation links in `src/components/layout/Navigation.tsx`
- Modify footer in `src/components/layout/Footer.tsx`

## License

Private - All rights reserved
