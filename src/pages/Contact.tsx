import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-brand-gray-300 max-w-3xl">
            Ready to take your brand to the next level? Let's talk about your project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-2 focus:ring-brand-black focus:border-transparent outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-brand-gray-600">
                    <a href="mailto:hello@nodaysoff.com" className="hover:text-brand-black">
                      hello@nodaysoff.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-brand-gray-600">
                    <a href="tel:+1234567890" className="hover:text-brand-black">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office</h3>
                  <p className="text-brand-gray-600">
                    123 Brand Street<br />
                    Creative District<br />
                    Los Angeles, CA 90001
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-brand-gray-600 hover:text-brand-black">Instagram</a>
                    <a href="#" className="text-brand-gray-600 hover:text-brand-black">Twitter</a>
                    <a href="#" className="text-brand-gray-600 hover:text-brand-black">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
