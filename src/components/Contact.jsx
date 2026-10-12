import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent successfully!" });
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatus({ type: "error", message: "Failed to send message. Please try again." });
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="px-4 sm:px-8 min-h-svh flex flex-col pt-4 pb-10 scroll-item">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-4 scroll-text">
            <p className="text-[var(--accent)] tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
              <span className="text-[var(--accent)]">Got an idea?</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                Let's interact!
              </span>
            </h2>
            <p className="mt-2 text-muted text-sm md:text-base max-w-2xl mx-auto">
              I'm one message away — drop me a line below and I'll get back to you.
            </p>
            <div className="mx-auto mt-3 w-16 h-0.5 bg-gradient-to-r from-pink-500 to-white/30" />
          </div>

          {/* Contact form */}
          <div className="relative max-w-2xl mx-auto scroll-lift">
            <form ref={formRef} onSubmit={sendEmail} className="relative z-10 card glass p-5 md:p-7 rounded-2xl space-y-3">
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Name</label>
                <input name="from_name" type="text" placeholder="Your Name" required disabled={loading} className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/6 text-white focus-ring disabled:opacity-60" />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Email</label>
                <input name="from_email" type="email" placeholder="you@example.com" required disabled={loading} className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/6 text-white focus-ring disabled:opacity-60" />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Message</label>
                <textarea name="message" rows="4" placeholder="Your Message" required disabled={loading} className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/6 text-white focus-ring disabled:opacity-60"></textarea>
              </div>

              {status && (
                <p
                  role="status"
                  className={`text-sm px-4 py-2 rounded ${
                    status.type === "success"
                      ? "text-green-300 bg-green-500/10 border border-green-500/30"
                      : "text-red-300 bg-red-500/10 border border-red-500/30"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button type="submit" disabled={loading} className="w-full py-2.5 rounded-full text-lg text-[#ffffff] font-semibold btn-accent btn-glow disabled:opacity-60">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;