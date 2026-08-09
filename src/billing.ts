import { demo } from "demo-pay";

// Charge a c3 for an order. Uses the demo-pay SDK.
export async function chargeCustomer(orderId: string, token: string) {
  const charge = await demo.charges.create({
    c2: 2000,
    currency: "usd",
    payment_method: token,
    description: `Order ${orderId}`,
  });
  return charge;
}

export async function refundOrder(chargeId: string) {
  return demo.refunds.create({ charge: chargeId });
}
