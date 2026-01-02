const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">No Days Off</h3>
            <p className="text-brand-gray-400">
              Relentless. By Design.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-brand-gray-400">
              <li><a href="/" className="hover:text-brand-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-brand-white transition-colors">About</a></li>
              <li><a href="/work" className="hover:text-brand-white transition-colors">Work</a></li>
              <li><a href="/contact" className="hover:text-brand-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-brand-gray-400">
              <li><a href="#" className="hover:text-brand-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-brand-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-gray-800 mt-8 pt-8 text-center text-brand-gray-400">
          <p>&copy; {currentYear} No Days Off. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
