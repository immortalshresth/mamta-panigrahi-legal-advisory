import { motion } from "framer-motion";

const services = [
  {
    title: "Criminal Law & Defense",
    description: "Comprehensive defense in criminal matters including FIR quashing, bail applications, and trial representation in Session Courts.",
  },
  {
    title: "Civil Litigation",
    description: "Handling complex civil disputes including property matters, recovery suits, injunctions, and declaratory suits.",
  },
  {
    title: "Family & Matrimonial Law",
    description: "Sensitive handling of divorce proceedings, child custody, maintenance claims, and domestic violence matters.",
  },
  {
    title: "Constitutional & Writ Petitions",
    description: "Filing and arguing writ petitions under Articles 226 and 32 for fundamental rights enforcement.",
  },
  {
    title: "Property & Real Estate",
    description: "Title verification, sale deed drafting, partition suits, and resolution of encroachment and tenancy disputes.",
  },
  {
    title: "Corporate & Commercial",
    description: "Contract drafting, partnership disputes, business formation, and regulatory compliance advisory.",
  },
  {
    title: "Consumer Protection",
    description: "Representing consumers and businesses in consumer forums for deficiency of service and unfair trade practices.",
  },
  {
    title: "Labour & Employment",
    description: "Advising on employment contracts, wrongful termination, workplace disputes, and industrial tribunal matters.",
  },
  {
    title: "Debt Recovery & Negotiation",
    description: "Recovery proceedings under various statutes, loan settlement negotiations, and cheque bounce cases under NI Act.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-medium text-accent uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Comprehensive Legal Services
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            From courtroom litigation to strategic advisory, covering the full spectrum of legal needs 
            for individuals and businesses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="relative pl-5"
            >
              <div className="absolute left-0 top-1 w-0.5 h-8 bg-accent rounded-full" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed text-pretty">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
