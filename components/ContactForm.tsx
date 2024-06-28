"use client"
import { FC, useState } from 'react';

const ContactForm: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-8">Do not Hesitate to <span className="text-red-500">Contact Us</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/3 p-2 rounded border"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/3 p-2 rounded border"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-1/3 p-2 rounded border"
            />
          </div>
          <textarea
            name="message"
            placeholder="Type message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <div className="text-center">
            <button type="submit" className="bg-red-500 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
