import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_mfrqoqn',       // ✅ your service ID
      'template_uffda7i',      // ✅ your template ID
      formState,               // ✅ object with keys matching template variables
      'bfwHuQ0NaHJoF01kK'      // ✅ your public key
    ).then(
      () => {
        setSubmitStatus('success');
        setFormState({ from_name: '', reply_to: '', message: '' });
        setIsSubmitting(false);
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    );
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-2 sm:space-y-5 w-full max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        name="from_name"
        value={formState.from_name}
        onChange={(e) => setFormState({ ...formState, from_name: e.target.value })}
        placeholder="Your Name"
        required
        className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[#151515] rounded-lg border border-[#7A87FB]/20 focus:border-[#7A87FB] outline-none transition-colors text-white/90"
      />

      <input
        type="email"
        name="reply_to"
        value={formState.reply_to}
        onChange={(e) => setFormState({ ...formState, reply_to: e.target.value })}
        placeholder="Your Email"
        required
        className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[#151515] rounded-lg border border-[#7A87FB]/20 focus:border-[#7A87FB] outline-none transition-colors text-white/90"
      />

      <textarea
        name="message"
        value={formState.message}
        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
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
