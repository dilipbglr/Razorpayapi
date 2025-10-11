const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-foreground">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">
          Terms & Conditions
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using the NexusVaults platform, you agree to be bound by these Terms & Conditions. 
            If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. Service Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            NexusVaults provides escrow infrastructure for trusted group buying. We facilitate secure payment 
            handling where funds are held until group goals are met. Our service acts as a trust layer between 
            buyers and sellers in group purchase scenarios.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. User Obligations</h2>
          <p className="text-muted-foreground leading-relaxed">
            Users must provide accurate information during registration and maintain the confidentiality of 
            their account credentials. You are responsible for all activities that occur under your account. 
            Users must comply with all applicable laws and regulations when using our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Ordering Process</h2>
          <p className="text-muted-foreground leading-relaxed">
            When participating in a group purchase, you authorize payment via our integrated payment partners 
            (Razorpay/UPI). Funds are held in escrow until the group target is met. If the target is not achieved 
            by the deadline, all funds will be automatically refunded to participants.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Payment and Refunds</h2>
          <p className="text-muted-foreground leading-relaxed">
            All payments are processed securely through our payment partners. Refunds are issued automatically 
            when group goals are not met. For successful transactions, the refund policy of the specific seller 
            applies. Please refer to our Refund Policy page for detailed information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            NexusVaults acts as an infrastructure provider and escrow service. We are not responsible for the 
            quality, safety, or legality of items listed by sellers. Our liability is limited to the extent 
            permitted by law. We do not guarantee uninterrupted or error-free service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content, trademarks, and intellectual property on the NexusVaults platform are owned by 
            NexusVaults Technologies Pvt. Ltd. or its licensors. Users may not copy, reproduce, or distribute 
            any content without explicit permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">8. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate these terms or engage in 
            fraudulent activities. Users may close their accounts at any time, subject to completion of 
            pending transactions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">9. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            NexusVaults reserves the right to modify these terms at any time. Users will be notified of 
            significant changes via email or platform notifications. Continued use of the service after 
            changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">10. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms are governed by the laws of India. Any disputes arising from the use of our services 
            shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold text-primary mb-4">Business Details</h3>
          <div className="text-muted-foreground space-y-2">
            <p className="font-semibold">NexusVaults Technologies Pvt. Ltd.</p>
            <p>B-406, Vistara Classic Apartments, Begur, Bengaluru – 560068</p>
            <p>Email: support@nexusvaults.in | Phone: +91-8217463518</p>
            <p>UDYAM: KR-03-0549112</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

