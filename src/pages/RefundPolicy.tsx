const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-foreground">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">
          Refund Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            At NexusVaults, we are committed to ensuring customer satisfaction. This Refund Policy outlines the 
            conditions under which refunds are processed for group purchases made through our platform. Since we 
            operate as an escrow service, our refund mechanisms are automated and transparent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. Automatic Refunds for Unmet Group Goals</h2>
          <p className="text-muted-foreground leading-relaxed">
            If a group purchase does not meet its target quantity by the specified deadline, all participant 
            payments will be automatically refunded. These refunds are processed within 5-7 business days back 
            to the original payment method. No action is required from buyers in this scenario.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. Refund Eligibility for Completed Purchases</h2>
          <p className="text-muted-foreground leading-relaxed">
            For successfully completed group purchases, refund eligibility depends on the specific seller's policy. 
            Generally, refunds may be requested within 7 days of delivery if:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>The product received is defective or damaged</li>
            <li>The wrong item was delivered</li>
            <li>The product does not match the description</li>
            <li>The product has quality issues</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Non-Refundable Items</h2>
          <p className="text-muted-foreground leading-relaxed">
            Certain items may not be eligible for refunds, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Perishable goods (food items, flowers, etc.)</li>
            <li>Personal care items that have been opened or used</li>
            <li>Custom or personalized products</li>
            <li>Items marked as "Final Sale" or "Non-Returnable"</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Refund Request Process</h2>
          <p className="text-muted-foreground leading-relaxed">
            To request a refund for a completed purchase, please follow these steps:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
            <li>Contact our support team at support@nexusvaults.in within the eligible period</li>
            <li>Provide your order number and reason for the refund request</li>
            <li>Include photos or videos if the item is defective or damaged</li>
            <li>Our team will review your request within 48 hours</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Refund Processing Time</h2>
          <p className="text-muted-foreground leading-relaxed">
            Once a refund is approved, it will be processed within 5-7 business days. The refund will be credited 
            to your original payment method (credit/debit card, UPI, bank account). Please note that it may take 
            an additional 3-5 business days for the refund to reflect in your account, depending on your bank or 
            payment provider.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. Partial Refunds</h2>
          <p className="text-muted-foreground leading-relaxed">
            In some cases, partial refunds may be issued if:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>The product shows signs of use beyond inspection</li>
            <li>The product is returned without original packaging or accessories</li>
            <li>The product is damaged due to customer mishandling</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">8. Cancellation Before Delivery</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you wish to cancel your order before it has been shipped or the group goal is finalized, you may 
            request cancellation by contacting our support team. Cancellations made before processing will receive 
            a full refund within 5-7 business days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">9. Payment Gateway Charges</h2>
          <p className="text-muted-foreground leading-relaxed">
            Please note that payment gateway charges (if any) are non-refundable. Only the product amount will 
            be refunded. In case of payment failures, amounts will be automatically refunded by the payment 
            gateway within 5-7 business days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">10. Contact Support</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any questions regarding refunds or to initiate a refund request, please contact us at 
            support@nexusvaults.in or call +91-8217463518. Our support team is available Monday to Saturday, 
            10 AM to 6 PM IST.
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

export default RefundPolicy;

