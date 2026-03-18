import { motion } from "framer-motion";
import { FileText, Stamp, CheckCircle, ArrowRight, MessageCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=919821136815&text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20notary%20services.";
const EMAIL = "panigrahiadvmamta@gmail.com";

const notaryServices = [
  {
    title: "Affidavit Attestation",
    description: "Notarization of affidavits for court submissions, property transactions, name changes, and various legal proceedings.",
  },
  {
    title: "Document Authentication",
    description: "Verification and authentication of legal documents, agreements, contracts, and official papers.",
  },
  {
    title: "Power of Attorney",
    description: "Notarization of General and Special Power of Attorney documents for property, business, and personal matters.",
  },
  {
    title: "Agreement Attestation",
    description: "Attestation of rental agreements, leave & license agreements, partnership deeds, and commercial contracts.",
  },
  {
    title: "Copy Certification",
    description: "Certified true copies of original documents for official and legal use, including educational certificates.",
  },
  {
    title: "Oath Administration",
    description: "Administering oaths and solemn affirmations for statutory declarations and legal documentation.",
  },
];

const transition = { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const };

const Notary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-body text-xs font-medium mb-6 tracking-wide uppercase">
              <Stamp className="w-3.5 h-3.5" />
              Notary Public Services
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] mb-6">
              Licensed <span className="text-accent">Notary Public</span> Services
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Advocate Mamta Panigrahi is a government-appointed Notary Public providing 
              authentication, attestation, and certification services for all types of legal documents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm font-medium text-accent uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Notary Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notaryServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.05 }}
                className="bg-card p-6 rounded-xl shadow-card"
              >
                <CheckCircle className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed text-pretty">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <FileText className="w-10 h-10 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Need Notary Services?</h2>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-8 text-pretty">
              Get your documents notarized quickly and professionally. Reach out via WhatsApp or email 
              to schedule an appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-body text-sm font-semibold shadow-card"
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </motion.a>
              <motion.a
                href={`mailto:${EMAIL}`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary-foreground text-primary font-body text-sm font-semibold shadow-card"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notary;
