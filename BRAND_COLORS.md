# Brand Colors - No Days Off

This document outlines the brand color system for the No Days Off portfolio site.

## Color Palette

### Primary Colors

- **Brand Black**: `#000000` - `brand-black`
- **Brand White**: `#FFFFFF` - `brand-white`

### Gray Scale

A complete grayscale palette for subtle variations:

- `brand-gray-50`: `#FAFAFA` - Lightest gray
- `brand-gray-100`: `#F5F5F5`
- `brand-gray-200`: `#E5E5E5`
- `brand-gray-300`: `#D4D4D4`
- `brand-gray-400`: `#A3A3A3`
- `brand-gray-500`: `#737373` - Medium gray
- `brand-gray-600`: `#525252`
- `brand-gray-700`: `#404040`
- `brand-gray-800`: `#262626`
- `brand-gray-900`: `#171717` - Darkest gray

## Usage Examples

### Text Colors
```tsx
<h1 className="text-brand-black">Heading</h1>
<p className="text-brand-gray-600">Body text</p>
<span className="text-brand-white">Light text</span>
```

### Backgrounds
```tsx
<div className="bg-brand-black">Dark section</div>
<div className="bg-brand-white">Light section</div>
<div className="bg-brand-gray-50">Subtle background</div>
```

### Borders
```tsx
<div className="border border-brand-gray-200">Subtle border</div>
<div className="border-2 border-brand-black">Bold border</div>
```

### Hover States
```tsx
<button className="bg-brand-black hover:bg-brand-gray-900">
  Button
</button>
<a className="text-brand-gray-600 hover:text-brand-black">
  Link
</a>
```

## Utility Classes

Two pre-built button classes are available in `globals.css`:

### Primary Button
```tsx
<button className="btn-primary">
  Call to Action
</button>
```
- Black background with white text
- Hover: Slightly lighter black (gray-900)

### Secondary Button
```tsx
<button className="btn-secondary">
  Secondary Action
</button>
```
- White background with black border
- Hover: Inverts to black background with white text

## Design Philosophy

The black and white color scheme embodies the "No Days Off" brand ethos:
- **Bold**: High contrast creates impact
- **Clean**: Minimal palette maintains focus
- **Professional**: Timeless aesthetic
- **Flexible**: Works across all media

## Customization

To modify the brand colors, edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          // Add or modify gray shades
        }
      }
    }
  }
}
```
