import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-12 px-4 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-400">
              Have a project in mind? Let's create something great.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-neutral-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-neutral-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-neutral-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-3xl text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-neutral-200 mt-2"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <p className="text-neutral-300 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">→</span>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hello@tvmdesigns.com"
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        hello@tvmdesigns.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">→</span>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-neutral-400">Austin, TX - Remote</p>
                    </div>
                  </div>

                </div>

                <div className="pt-8 border-t border-neutral-800">
                  <h3 className="font-semibold mb-4">Social Links</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/tom%C3%A1s-m-091177102/"
                      className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-600 hover:scale-105 transition-all duration-200"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
