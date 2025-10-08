import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle, 
  Code2, 
  FileCheck, 
  BarChart3,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", useCase: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-accent" />
              <span className="font-heading text-xl font-bold text-primary">NexusVaults</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection("features")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Why Us
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-border">
              <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                About
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                How It Works
              </button>
              <button onClick={() => scrollToSection("features")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Features
              </button>
              <button onClick={() => scrollToSection("why-us")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Why Us
              </button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 md:py-32 gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Powering the Future of Trusted Group Buying
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                NexusVaults provides the escrow infrastructure that ensures payments are protected until group goals are met — programmable, verifiable, and secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto"
                >
                  Join Waitlist
                </Button>
                <Button 
                  variant="outline-hero" 
                  size="xl"
                  onClick={() => scrollToSection("features")}
                  className="w-full sm:w-auto"
                >
                  Explore Platform
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <ShieldCheck className="h-64 w-64 md:h-80 md:w-80 text-accent pulse-slow drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              The Trust Layer for Digital Commerce
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              NexusVaults provides the backend infrastructure that makes group buying transparent, trustworthy, and verifiable. Using mandate-based escrow systems, we ensure funds are held safely until group targets are met. Built for compliance, scalability, and real-world use.
            </p>
            <p className="text-xl md:text-2xl font-heading font-semibold text-accent">
              Building trust in every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
            How Trusted Group Buy Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover-lift">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-card-foreground">
                Create a Group Deal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Sellers define target quantity, price, and deadline.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-card-foreground">
                Join with a Mandate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Buyers authorize payment via Razorpay/UPI (funds held in escrow).
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift">
              <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-card-foreground">
                Auto-Execute or Refund
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                System captures payments on success, or refunds all on failure.
              </p>
            </div>
          </div>
          <p className="text-center mt-12 text-lg md:text-xl font-heading font-semibold text-accent">
            Your money stays safe — until promises are fulfilled.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
            Technology That Powers Trust
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <Code2 className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Escrow API
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Programmable group payment logic with developer-friendly APIs.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <FileCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Mandate Engine
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AP2-inspired digital mandates with Razorpay integration.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <Lock className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Secure Vault
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Bank-grade security for payment storage.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <ShieldCheck className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Seller Verification
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Immutable logs for disputes and compliance.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <BarChart3 className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Real-time Dashboard
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor group progress live.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-md hover-lift border border-border">
              <CheckCircle className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3 text-card-foreground">
                Compliance-Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Built to meet fintech audit standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Why Choose NexusVaults
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Designed for platforms, fintechs, and marketplaces",
              "Regulation-ready and built for compliance",
              "Modular APIs — plug trust into your app in minutes",
              "End-to-end transparency for group deals",
              "Enterprise-grade security and scalability"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-primary">
            Let's Build Trusted Group Commerce Together
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Join our developer network or become an early partner.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                Work Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-card-foreground">
                Company
              </label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="useCase" className="block text-sm font-medium mb-2 text-card-foreground">
                Use Case
              </label>
              <Select 
                value={formData.useCase} 
                onValueChange={(value) => setFormData({ ...formData, useCase: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your use case" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="marketplace">Marketplace</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="d2c">D2C</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-32"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
            >
              Get in Touch
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-8 w-8 text-accent" />
                <span className="font-heading text-xl font-bold">NexusVaults</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                NexusVaults Technologies Pvt. Ltd.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-2">
                Powering the Future of Trusted Group Commerce.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("about")} className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors text-left">
                  About
                </button>
                <button onClick={() => scrollToSection("how-it-works")} className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors text-left">
                  How It Works
                </button>
                <button onClick={() => scrollToSection("features")} className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors text-left">
                  Features
                </button>
                <Link to="/contact" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <Link to="/terms" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/privacy-policy" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Refund Policy
                </Link>
                <Link to="/shipping-and-delivery" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Shipping & Delivery
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  GitHub
                </a>
                <a href="#" className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-center text-primary-foreground/60">
              © 2025 NexusVaults. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
