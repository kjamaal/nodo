import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-brand-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              No Days Off
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray-600 mb-8 max-w-3xl mx-auto">
              Relentless. By Design.  
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/work"
                className="bg-brand-white text-brand-black px-8 py-3 rounded-lg font-semibold hover:bg-brand-gray-100 transition-colors"
              >
                View Our Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand-white text-brand-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-white hover:text-brand-black transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-lg aspect-square bg-brand-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-brand-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold">Project {item}</h3>
                  <p className="text-sm text-brand-gray-200">Brand Identity</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/work"
              className="btn-primary inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-brand-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-black text-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consistency</h3>
              <p className="text-brand-gray-600">
                Success is built on showing up every single day with the same energy and commitment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-black text-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-brand-gray-600">
                Real brands connect with real people. We help you tell your true story.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-black text-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-brand-gray-600">
                Good enough never is. We push boundaries to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
