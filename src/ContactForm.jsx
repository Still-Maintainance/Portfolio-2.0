
const ContactForm = () => {
  return (
    <div className="relative rounded-lg bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
      <form className="rounded-lg bg-[#151515] p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md bg-[#1C1C1C] p-2 border border-[#292929] focus:border-[#7A87FB] focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email" 
            className="w-full rounded-md bg-[#1C1C1C] p-2 border border-[#292929] focus:border-[#7A87FB] focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md bg-[#1C1C1C] p-2 border border-[#292929] focus:border-[#7A87FB] focus:outline-none"
            placeholder="Your message..."
          />
        </div>

        <div className="flex justify-end">
          <div className="group relative rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-[#7A87FB]/50">
            <button 
              type="submit"
              className="cursor-pointer rounded-full bg-[#101111] from-[#7A87FB] to-[#FFD49C] p-3 px-6 font-semibold text-white group-hover:bg-gradient-to-r"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;