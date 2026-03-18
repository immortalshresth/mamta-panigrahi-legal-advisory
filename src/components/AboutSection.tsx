import { motion } from "framer-motion";
import { Award, BookOpen, Users, MapPin } from "lucide-react";

const credentials = [
  { icon: Award, label: "Bar Council Enrolled", detail: "Licensed High Court Advocate" },
  { icon: BookOpen, label: "LL.B., LL.M.", detail: "Comprehensive Legal Education" },
  { icon: Users, label: "2000+ Cases", detail: "Across Multiple Jurisdictions" },
  { icon: MapPin, label: "Mumbai High Court", detail: "Primary Jurisdiction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm font-medium text-accent uppercase tracking-widest mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Career Built on Precision & Advocacy
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Advocate Mamta Panigrahi is a seasoned legal professional with over 15 years of experience 
                practicing before the High Court of Odisha and various Session and District Courts. Her practice 
                spans criminal defense, civil litigation, constitutional law, and corporate advisory.
              </p>
              <p className="text-pretty">
                With a reputation for meticulous case preparation and persuasive courtroom advocacy, she has 
                successfully represented clients in complex High Court writ petitions, criminal appeals, and 
                multi-party civil disputes. Her advisory practice focuses on proactive risk mitigation for 
                businesses and individuals navigating India's regulatory landscape.
              </p>
              <p className="text-pretty">
                She is committed to accessible, transparent, and results-oriented legal counsel — ensuring 
                every client receives the attention and strategic rigor their matter demands.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {credentials.map((cred) => (
              <div key={cred.label} className="bg-card p-6 rounded-xl shadow-card">
                <cred.icon className="w-6 h-6 text-accent mb-3" />
                <p className="font-body text-sm font-semibold text-foreground mb-1">{cred.label}</p>
                <p className="font-body text-xs text-muted-foreground">{cred.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
