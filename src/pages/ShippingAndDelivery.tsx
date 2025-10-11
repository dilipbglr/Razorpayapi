const ShippingAndDelivery = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-foreground">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">
          Shipping & Delivery Policy
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">1. Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            NexusVaults facilitates group purchases by coordinating between buyers and sellers. Once a group 
            purchase goal is met, the seller is notified to process and ship the orders. This policy outlines 
            the shipping and delivery process for purchases made through our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">2. Processing Time</h2>
          <p className="text-muted-foreground leading-relaxed">
            After a group purchase successfully reaches its target, sellers typically require 2-3 business days 
            to process and prepare orders for shipment. Processing time may vary depending on the product type 
            and seller. You will receive an email notification when your order is ready for dispatch.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">3. Delivery Timelines</h2>
          <p className="text-muted-foreground leading-relaxed">
            Standard delivery timelines from the date of dispatch are:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li><strong>Metro Cities:</strong> 3-5 business days</li>
            <li><strong>Other Cities/Towns:</strong> 5-7 business days</li>
            <li><strong>Remote Areas:</strong> 7-10 business days</li>
            <li><strong>Express Delivery:</strong> 1-2 business days (if available and selected)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            These are estimated timelines and may vary based on the courier partner, location, and external factors.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">4. Service Areas</h2>
          <p className="text-muted-foreground leading-relaxed">
            We currently deliver to most locations across India. However, certain remote or restricted areas may 
            not be serviceable. During checkout, you will be notified if your location is not covered. We are 
            continuously expanding our delivery network to reach more areas.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">5. Shipping Charges</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shipping charges, if applicable, are calculated based on the product weight, dimensions, and delivery 
            location. Some sellers may offer free shipping for orders above a certain value. All shipping charges 
            will be clearly displayed at checkout before payment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">6. Order Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            Once your order is shipped, you will receive a tracking number via email and SMS. You can track your 
            order status in real-time using the tracking link provided. For any tracking-related queries, you can 
            contact our support team at support@nexusvaults.in.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">7. Delivery Attempts</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our courier partners typically make 2-3 delivery attempts. If you are unavailable during delivery, 
            the courier will leave a notification with instructions for rescheduling or pickup. Please ensure 
            someone is available at the delivery address, or provide accurate delivery instructions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">8. Perishable Items (Food/Groceries)</h2>
          <p className="text-muted-foreground leading-relaxed">
            For perishable items such as food products and groceries, delivery timelines are expedited:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Same-day or next-day delivery within city limits (where available)</li>
            <li>Refrigerated transport for temperature-sensitive items</li>
            <li>Cannot be rescheduled; immediate acceptance required</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Please ensure someone is available to receive perishable items at the specified delivery time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">9. Fashion Items</h2>
          <p className="text-muted-foreground leading-relaxed">
            Fashion items (clothing, footwear, accessories) are shipped in protective packaging to ensure they 
            arrive in perfect condition. Standard delivery timelines apply. Some fashion items may require 
            signature upon delivery.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">10. Delays and Force Majeure</h2>
          <p className="text-muted-foreground leading-relaxed">
            While we strive to meet delivery timelines, unforeseen circumstances may cause delays, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Weather conditions or natural disasters</li>
            <li>Political unrest or strikes</li>
            <li>Courier service disruptions</li>
            <li>Incorrect or incomplete delivery address</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            NexusVaults is not liable for delays caused by such external factors beyond our control. We will 
            keep you informed of any significant delays.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">11. International Shipping</h2>
          <p className="text-muted-foreground leading-relaxed">
            Currently, we only ship within India. International shipping may be introduced in the future based 
            on demand and operational feasibility.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">12. Contact Support</h2>
          <p className="text-muted-foreground leading-relaxed">
            For shipping-related queries, delivery issues, or to update your delivery address, please contact 
            us at support@nexusvaults.in or call +91-8217463518. Our support team is available Monday to 
            Saturday, 10 AM to 6 PM IST.
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

export default ShippingAndDelivery;

