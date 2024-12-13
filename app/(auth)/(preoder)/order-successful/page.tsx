"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import MainFooter from "components/Footer/MainFooter";

interface VerifyPaymentResponse {
  success: boolean; 
  [key: string]: any; 
}

interface OrderResponse {
  id: string;
  
}


export default function Web() {
  const [quantity, setQuantity] = useState(1000);
  const [isDefaultEmail, setIsDefaultEmail] = useState(true);
  const [isDefaultPhone, setIsDefaultPhone] = useState(true);
  const [orderId, setOrderId] = useState<string | null>(null); // Holds the order ID
  const [sessionId, setSessionId] = useState<string | null>(null); // Holds the session ID
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null); // Stores payment status

  const router = useRouter();
  const unitPrice = 500050; // price per unit
  const total = quantity * unitPrice;

  // Handlers for toggling
  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone);
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail);

  

  // Fetch orderId and sessionId from localStorage on the client side
  useEffect(() => {
    const storedOrderResponse = localStorage.getItem("order_response");
    if (storedOrderResponse) {
      try {
        const parsedOrder = JSON.parse(storedOrderResponse) as OrderResponse; // Explicit type assertion
        const fetchedOrderId = parsedOrder?.id; // Extract orderId from stored response
        setOrderId(fetchedOrderId);
      } catch (error) {
        console.error("Failed to parse order_response:", error);
      }
    }
  
    const storedSessionId = localStorage.getItem("session_id");
    setSessionId(storedSessionId);
  }, []);
  

  // Function to verify payment with the session_id
  const verifyPayment = async (sessionId: string) => {
    if (!sessionId) {
      console.error("Session ID is missing");
      return;
    }
  
    try {
      const response = await fetch(`https://altima.fyber.site/order/api/verify-payment/${sessionId}/`, {
        method: "GET",
      });
  
      const result = (await response.json()) as VerifyPaymentResponse;

  
      if (response.ok && result.success) {
        setPaymentStatus(`Payment Status: ${result.success}`);
      } else {
        setPaymentStatus(`Failed to verify payment: ${result.success || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      setPaymentStatus("Error verifying payment.");
    }
  };
  

  // Trigger payment verification when sessionId is available
  useEffect(() => {
    if (sessionId) {
      verifyPayment(sessionId);
    }
  }, [sessionId]);

  // Automatically update order status to "processing order"
  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId) return;

      try {
        const response = await fetch(`https://altima.fyber.site/preorder/preorder/${orderId}/update-status/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "processing order" }),
        });

        if (!response.ok) {
          console.error("Failed to update order status:", response.statusText);
        } else {
          console.log("Order status updated to 'processing order'");
        }
      } catch (error) {
        console.error("Error updating order status:", error);
      }
    };

    updateOrderStatus();
  }, [orderId]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <section className="bg-[#080808]">
      <Navbar />

      <section className="paddings flex w-full flex-col items-center justify-center max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
        <p className="mb-6 text-xl font-bold text-white">Order Successful</p>

        <div className="flex w-full items-center justify-center md:px-10">
          {paymentStatus === "Payment Status: true" && (
            <div className="flex w-full flex-col rounded-md border border-[#FFFFFF0D] max-sm:rounded-lg max-sm:p-2">
              <div className="flex w-full flex-col rounded-md border border-[#FFFFFF0D] p-5 max-sm:rounded-lg max-sm:p-2">
                <div className="grid h-full items-center rounded-md max-sm:grid max-sm:gap-5 md:gap-10">
                  <div className="flex w-full flex-col justify-center bg-[#FFFFFF0D] p-5">
                    <p className="text-center text-white">Altima.com/checkout</p>
                    <p className="text-center text-[100px] text-white">Thank You !!</p>

                    <p className="text-center text-sm text-white">
                      We are getting started on your order right away, and you will receive an order{" "}
                      <br className="max-md:hidden" />
                      confirmation email shortly. In the meantime, explore our other{" "}
                      <br className="max-md:hidden" />
                      models and get inspired by our unique products. Head over to Altima.com
                    </p>
                    {paymentStatus && (
                      <p className="text-center text-sm text-white mt-4">{paymentStatus}</p>
                    )}
                    {orderId ? (
                      <p className="text-center text-lg text-white mt-4">
                        Your Order ID: <strong>{orderId}</strong>
                      </p>
                    ) : (
                      <p className="text-center text-sm text-red-500 mt-4">
                        Failed to retrieve Order ID. Please contact support.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="border-t border-[#FFFFFF0D]"></div>
              <div className="flex w-full justify-center bg-[#080808] py-7">
                <Link
                  href="/my-account/order"
                  className="flex w-[60%] items-center justify-center gap-2 rounded-lg border border-[#FFFFFF1A] px-4 py-3 font-bold uppercase text-[#FFFFFF] max-sm:w-full"
                >
                  Manage Order
                </Link>
              </div>
              <div className="border-t border-[#FFFFFF0D] "></div>
              <div className="flex w-full justify-center bg-[#080808] py-5">
                <p className="text-center text-sm text-white">
                  Read about our <span className="underline">return policy</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <MainFooter />
      <Footer />
    </section>
  );
}
