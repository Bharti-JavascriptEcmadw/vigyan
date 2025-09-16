import React from "react";

function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          Shipping Policy
        </h1>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed">
           Processing Time
All orders are delivered within 2-3 business days. Orders are not shipped or delivered
on weekends or holidays. If we are experiencing a high volume of orders, shipments
may be delayed by a few days. Please allow additional days in transit for delivery. If
there will be a significant delay in the shipment of your order, we will contact you via
email or phone.

          </p>
        </section>
      </div>
    </div>
  );
}

export default ShippingPolicy;
