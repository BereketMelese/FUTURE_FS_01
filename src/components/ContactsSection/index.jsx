import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactsSection = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-gray-900"
    >
      <h3 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        Get in Touch
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-12 text-center max-w-lg">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="mb-10 text-gray-700 dark:text-gray-300 text-center space-y-2">
        <p className="text-lg">📞 +251 937 881 256</p>
        <p className="text-lg">📧 bereketmelese00@gmail.com</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
          />
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default ContactsSection;
