import { motion } from "framer-motion";
import { Shield, Briefcase, ArrowRight } from "lucide-react";

const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

const PracticeSplit = () => {
  return (
    <section id="practice" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-widest mb-3">Practice Areas</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Two Pillars of Legal Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Litigation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={transition}
            className="bg-card p-8 lg:p-10 rounded-2xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Courtroom Litigation</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-pretty">
              Zealous representation before the Mumbai High Court and Session Courts. Specializing in appellate advocacy, 
              original jurisdiction matters, criminal defense, and civil disputes requiring courtroom precision.
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                High Court Appeals & Writs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Session Court Criminal Defense
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Civil & Constitutional Litigation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Bail & Anticipatory Bail Matters
              </li>
            </ul>
            <a href="#services" className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium group">
              View Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Advisory Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ ...transition, delay: 0.1 }}
            className="bg-card p-8 lg:p-10 rounded-2xl shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3">Strategic Advisory</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-pretty">
              Proactive legal consultancy designed to prevent disputes before they arise. From contract review to 
              regulatory compliance, ensuring your decisions stand on solid legal ground.
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Corporate & Contract Advisory
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Property & Real Estate Consultation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Family Law & Succession Planning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Dispute Prevention & Risk Assessment
              </li>
            </ul>
            <a href="#services" className="inline-flex items-center gap-2 text-accent font-body text-sm font-medium group">
              View Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSplit;
