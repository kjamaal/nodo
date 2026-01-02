const About = () => {
  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-brand-gray-300 max-w-3xl">
            We're a team of creatives, strategists, and doers who believe in the power
            of relentless dedication.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg text-brand-gray-600 space-y-4">
            <p>
              No Days Off was born from a simple belief: success doesn't take vacations.
              In a world where everyone is looking for shortcuts, we doubled down on consistency,
              hard work, and authentic storytelling.
            </p>
            <p>
              We've worked with brands big and small, helping them find their voice,
              build their presence, and connect with their audience in meaningful ways.
              Our approach is simple: show up every day, do the work, and never compromise
              on quality.
            </p>
            <p>
              Whether you're a startup finding your footing or an established brand looking
              to reinvent yourself, we bring the same energy, creativity, and commitment to
              every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { role: 'Creative Director' },
              { role: 'Brand Strategist' },
              { role: 'Lead Designer' },
              { role: 'Content Creator' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-brand-gray-200 aspect-square rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-1">Team Member</h3>
                <p className="text-brand-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-brand-gray-600 mb-8">
            Let's build something amazing. No days off.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
