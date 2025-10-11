const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-foreground">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">
          Privacy Policy
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          Last Updated: January 2025
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information that you provide directly to us when you create an account, participate in 
            group purchases, or contact our support team. This includes your name, email address, phone number, 
            payment information, and transaction history. We also automatically collect certain information about 
            your device and usage patterns when you access our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the collected information to provide, maintain, and improve our services. This includes 
            processing transactions, managing group purchases, sending notifications about your transactions, 
            preventing fraud, and complying with legal obligations. We may also use your information to 
            communicate important updates about our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies and similar tracking technologies to track activity on our platform and store certain 
            information. Cookies help us recognize you, remember your preferences, and provide a personalized 
            experience. You can instruct your browser to refuse cookies, but some features may not function 
            properly as a result.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Information Sharing and Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your 
            information with trusted service providers who assist in operating our platform (such as payment 
            processors like Razorpay), subject to confidentiality agreements. We may also disclose information 
            when required by law or to protect our rights and safety.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our platform integrates with third-party payment services (Razorpay, UPI). When you make a payment, 
            you will be subject to the privacy policies of these payment providers. We encourage you to review 
            their privacy policies. We are not responsible for the privacy practices of these third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute 
            security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
            Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data 
            is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">8. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or delete your personal information. You can update your account 
            information through your profile settings or contact us for assistance. You may also opt-out of 
            marketing communications. For data deletion requests, please contact us at support@nexusvaults.in.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">9. Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
            information from children. If you believe we have collected information from a child, please contact 
            us immediately, and we will take steps to delete such information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">10. Changes to Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
            new policy on this page and updating the "Last Updated" date. Significant changes will be communicated 
            via email or prominent notice on our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">11. Contact Us / Grievance Officer</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions, concerns, or complaints about this Privacy Policy or our data practices, 
            please contact our Grievance Officer at support@nexusvaults.in. We will respond to your inquiry 
            within 30 days.
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

export default PrivacyPolicy;

