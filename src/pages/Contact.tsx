import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
          Contact Us
        </h1>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          Have questions or need assistance? We're here to help. Send us a message or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h2>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:support@nexusvaults.in" className="text-muted-foreground hover:text-accent">
                  support@nexusvaults.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+918217463518" className="text-muted-foreground hover:text-accent">
                  +91-8217463518
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Monday to Saturday, 10 AM to 6 PM IST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  NexusVaults Technologies Pvt. Ltd.<br />
                  B-406, Vistara Classic Apartments<br />
                  Begur, Bengaluru – 560068<br />
                  Karnataka, India
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-2">Business Registration</h3>
              <p className="text-muted-foreground">UDYAM: KR-03-0549112</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32"
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-muted rounded-xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Need Immediate Help?</h3>
          <p className="text-muted-foreground mb-4">
            For urgent queries related to ongoing transactions, payment issues, or refunds, please call us 
            directly at +91-8217463518 during business hours. For general inquiries, use the contact form 
            above, and we'll respond within 24-48 hours.
          </p>
          <p className="text-muted-foreground">
            You can also check our <a href="/refund-policy" className="text-accent hover:underline">Refund Policy</a>, 
            {" "}<a href="/shipping-and-delivery" className="text-accent hover:underline">Shipping & Delivery</a>, or 
            {" "}<a href="/terms" className="text-accent hover:underline">Terms & Conditions</a> for detailed information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

