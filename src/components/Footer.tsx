const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Advocate Mamta Panigrahi. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#home" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Home</a>
          <a href="#practice" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Practice Areas</a>
          <a href="#services" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Services</a>
          <a href="#contact" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
