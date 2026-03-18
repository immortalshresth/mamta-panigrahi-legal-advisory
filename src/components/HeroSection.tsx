import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import advocatePortrait from "@/assets/advocate-portrait.jpg";

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 lg:pt-0 min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-body text-xs font-medium mb-6 tracking-wide uppercase">
              <Scale className="w-3.5 h-3.5" />
              Mumbai High Court & Session Court Advocate
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Strategic Counsel.{" "}
              <span className="text-accent">Rigorous Defense.</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 text-pretty">
              Providing decisive legal representation in the Mumbai High Court and Session Courts, 
              paired with proactive consultancy for complex legal landscapes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold shadow-card hover:shadow-elevated transition-shadow"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#practice"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold transition-colors"
              >
                View Practice Areas
              </motion.a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
              <div>
                <p className="font-display text-2xl font-semibold text-foreground tabular-nums">26+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-foreground tabular-nums">2000+</p>
                <p className="font-body text-sm text-muted-foreground">Cases Handled</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-foreground tabular-nums">Mumbai HC</p>
                <p className="font-body text-sm text-muted-foreground">Enrolled Advocate</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={advocatePortrait}
                  alt="Advocate Mamta Panigrahi - Mumbai High Court Lawyer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card px-5 py-3">
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Practicing Since</p>
                <p className="font-display text-lg font-semibold text-foreground tabular-nums">2000</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
