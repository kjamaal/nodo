const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete brand overhaul for a tech startup',
    },
    {
      id: 2,
      title: 'Product Launch',
      category: 'Marketing',
      description: 'Multi-channel campaign for product launch',
    },
    {
      id: 3,
      title: 'Digital Experience',
      category: 'Web Design',
      description: 'Immersive website for luxury brand',
    },
    {
      id: 4,
      title: 'Social Strategy',
      category: 'Social Media',
      description: 'Year-long social media strategy and execution',
    },
    {
      id: 5,
      title: 'Content Series',
      category: 'Content',
      description: 'Documentary-style content series',
    },
    {
      id: 6,
      title: 'Brand Positioning',
      category: 'Strategy',
      description: 'Strategic repositioning for market leader',
    },
  ];

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-brand-gray-300 max-w-3xl">
            Every project is a testament to our commitment to excellence.
            Here's a selection of our recent work.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square bg-brand-gray-200 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-brand-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-sm text-brand-gray-300 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-brand-gray-200">{project.description}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-brand-gray-600">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-brand-gray-600 mb-8">
            Ready to add your project to our portfolio?
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Work;
