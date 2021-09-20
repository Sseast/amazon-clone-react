import moment from "moment";
import { getSession, useSession } from "next-auth/client";
import db from "../../firebase";
import Header from "../components/Header";

import Order from "../components/Order";

function Orders({ orders }) {
  const [session] = useSession();
  return (
    <div>
      <Header></Header>
      <main className="max-w-screen-lg p-10 mx-auto">
        <h1 className="pb-1 mb-2 text-3xl font-bold border-b border-yellow-400 border-solid">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amount_shipping, images, currency, timestamp }) => (
              <Order
                id={id}
                amount={amount}
                amount_shipping={amount_shipping}
                images={images}
                currency={currency}
                timestamp={timestamp}
              ></Order>
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in creds
  const session = await getSession(context);

  if (!session) {
    return { props: {} };
  }
  // Firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.amount,
      amount_shipping: order.amount_shipping,
      images: order.data().images,
      currency: order.currency,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
