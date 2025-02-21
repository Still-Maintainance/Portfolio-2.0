import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formState,
          "bot-field": "",
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  return (
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-2 sm:space-y-5 w-full max-w-2xl "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={(e) => setFormState({...formState, name: e.target.value})}
        placeholder="Your Name"
        required
        className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[#151515] rounded-lg border border-[#7A87FB]/20 focus:border-[#7A87FB] outline-none transition-colors text-white/90"
      />

      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={(e) => setFormState({...formState, email: e.target.value})}
        placeholder="Your Email"
        required
        className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[#151515] rounded-lg border border-[#7A87FB]/20 focus:border-[#7A87FB] outline-none transition-colors text-white/90"
      />

      <textarea
        name="message"
        value={formState.message}
        onChange={(e) => setFormState({...formState, message: e.target.value})}
        placeholder="Type your message here..."
        required
        rows="4"
        className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[#151515] rounded-lg border border-[#7A87FB]/20 focus:border-[#7A87FB] outline-none transition-colors text-white/90 resize-y min-h-[100px]"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-lg font-medium text-sm sm:text-base text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm sm:text-base text-green-400 text-center mt-4"
        >
          Message sent successfully!
        </motion.p>
      )}

      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm sm:text-base text-red-400 text-center mt-4"
        >
          Failed to send message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
}