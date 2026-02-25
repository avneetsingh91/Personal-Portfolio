import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="mx-auto my-10 w-24 h-0.5 bg-white/6 rounded" />

      <section id="contact" className="px-4 py-2 scroll-item">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-white/90 scroll-text">Contact Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <aside className="card glass p-6 rounded-lg scroll-lift">
              <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
              <p className="text-muted mb-6">I'm open to freelance projects, collaborations, or a friendly chat. Let’s connect!</p>

              <div className="space-y-3 text-white/90">
                <div>
                  <span className="block font-medium">Email</span>
                  <span className="text-muted">developeravneet05@gmail.com</span>
                </div>
                <div>
                  <span className="block font-medium">Phone</span>
                  <span className="text-muted">62806-22901</span>
                </div>
                <div>
                  <span className="block font-medium">Location</span>
                  <span className="text-muted"> Punjab , India</span>
                </div>
              </div>
            </aside>

            <form ref={formRef} onSubmit={sendEmail} className="card glass p-6 rounded-lg space-y-4 scroll-lift">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input name="from_name" type="text" placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-transparent border border-white/6 text-white focus-ring" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input name="from_email" type="email" placeholder="you@example.com" required className="w-full px-4 py-2 rounded bg-transparent border border-white/6 text-white focus-ring" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea name="message" rows="4" placeholder="Your Message" required className="w-full px-4 py-2 rounded bg-transparent border border-white/6 text-white focus-ring"></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full py-3 rounded text-white font-semibold btn-accent btn-glow disabled:opacity-60">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
