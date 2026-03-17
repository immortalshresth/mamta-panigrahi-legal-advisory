import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    matter: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-consultation", {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Consultation request sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", phone: "", matter: "", description: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong.", description: "Please try again or contact us via WhatsApp.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm font-medium text-accent uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Schedule Your Consultation
            </h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-8 max-w-lg text-pretty">
              Whether you need courtroom representation or strategic legal advice, the first step 
              is a confidential consultation. Reach out today to discuss your matter.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide">Phone</p>
                  <p className="font-body text-sm font-medium tabular-nums">+91 9821136815</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide">Email</p>
                  <p className="font-body text-sm font-medium">panigrahiadvmamta@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide">Office</p>
                  <p className="font-body text-sm font-medium">Nerul, Navi Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=919821136815&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-body text-sm font-semibold shadow-card"
            >
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide block mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide block mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 00000 00000"
                  required
                />
              </div>
              <div>
                <label className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide block mb-2">Legal Matter</label>
                <select
                  name="matter"
                  value={form.matter}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground font-body text-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="" className="text-foreground">Select a category</option>
                  <option value="criminal" className="text-foreground">Criminal Defense</option>
                  <option value="civil" className="text-foreground">Civil Litigation</option>
                  <option value="family" className="text-foreground">Family Law</option>
                  <option value="property" className="text-foreground">Property Dispute</option>
                  <option value="corporate" className="text-foreground">Corporate Advisory</option>
                  <option value="constitutional" className="text-foreground">Constitutional Matter</option>
                  <option value="other" className="text-foreground">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs text-primary-foreground/50 uppercase tracking-wide block mb-2">Brief Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Briefly describe your legal matter..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-7 py-3.5 rounded-lg bg-primary-foreground text-primary font-body text-sm font-semibold shadow-card disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </motion.button>
              <p className="font-body text-xs text-primary-foreground/40 text-center">
                All consultations are confidential. We typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
