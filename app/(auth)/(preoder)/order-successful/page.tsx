"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import MainFooter from "components/Footer/MainFooter"
import Image from "next/image"
import { OrderPayload } from "services/orderService"
import html2pdf from "html2pdf.js"
import NewNav from "components/Navbar/NewNav"

interface VerifyPaymentResponse {
  success: boolean
  [key: string]: any
}
interface OrderResponse {
  id: string
}

export default function Web() {
  const [quantity, setQuantity] = useState(1000)
  const [isDefaultEmail, setIsDefaultEmail] = useState(true)
  const [isDefaultPhone, setIsDefaultPhone] = useState(true)
  const [orderId, setOrderId] = useState<string | null>(null) // Holds the order ID
  const [sessionId, setSessionId] = useState<string | null>(null) // Holds the session ID
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null) // Stores payment status
  const [orderDetails, setOrderDetails] = useState<OrderPayload | null>(null) // Holds order details
  const router = useRouter()
  const unitPrice = 500050 // price per unit
  const total = quantity * unitPrice

  // Handlers for toggling
  const togglePhone = () => setIsDefaultPhone(!isDefaultPhone)
  const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail)

  // Fetch orderId and sessionId from localStorage on the client side
  useEffect(() => {
    const storedOrderResponse = localStorage.getItem("order_response")
    if (storedOrderResponse) {
      try {
        const parsedOrder = JSON.parse(storedOrderResponse) as OrderResponse // Explicit type assertion
        const fetchedOrderId = parsedOrder?.id // Extract orderId from stored response
        setOrderId(fetchedOrderId)
      } catch (error) {
        console.error("Failed to parse order_response:", error)
      }
    }

    const storedSessionId = localStorage.getItem("payment_link_id")
    setSessionId(storedSessionId)
  }, [])

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) return

      try {
        const response = await fetch(`https://api.smarthavensystems.com/preorder/preorder/${orderId}/`, {
          method: "GET",
        })

        if (!response.ok) {
          console.error("Failed to fetch order details:", response.statusText)
          return
        }

        const data = await response.json()
        setOrderDetails(data as OrderPayload)
      } catch (error) {
        console.error("Error fetching order details:", error)
      }
    }

    fetchOrderDetails()
  }, [orderId])

  // Function to verify payment with the session_id
  const verifyPayment = async (sessionId: string) => {
    if (!sessionId) {
      console.error("Session ID is missing")
      return
    }

    try {
      const response = await fetch(`https://api.smarthavensystems.com/order/api/verify-payment/${sessionId}/`, {
        method: "GET",
      })

      const result = (await response.json()) as VerifyPaymentResponse

      if (response.ok && result.success) {
        setPaymentStatus(`Payment Status: ${result.success}`)
      } else {
        setPaymentStatus(`Failed to verify payment: ${result.success || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error verifying payment:", error)
      setPaymentStatus("Error verifying payment.")
    }
  }

  // Trigger payment verification when sessionId is available
  useEffect(() => {
    if (sessionId) {
      verifyPayment(sessionId)
    }
  }, [sessionId])

  // Automatically update order status to "processing order"
  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId) return

      try {
        const response = await fetch(`https://api.smarthavensystems.com/preorder/preorder/${orderId}/update-status/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "processing order" }),
        })

        if (!response.ok) {
          console.error("Failed to update order status:", response.statusText)
        } else {
          console.log("Order status updated to 'processing order'")
        }
      } catch (error) {
        console.error("Error updating order status:", error)
      }
    }

    updateOrderStatus()
  }, [orderId])

  const handleGoBack = () => {
    router.back()
  }

  const invoiceRef = useRef<HTMLDivElement>(null)

  const downloadPDF = async () => {
    if (!invoiceRef.current) return

    try {
      // Temporarily make the invoice visible
      invoiceRef.current.style.display = "block"

      // Dynamically import html2pdf.js only on the client side
      const html2pdf = (await import("html2pdf.js")).default

      const element = invoiceRef.current
      const opt = {
        margin: 0.5,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      // Re-hide the invoice after PDF generation
      invoiceRef.current.style.display = "none"
    }
  }

  return (
    <section className="bg-[#080808]">
      <NewNav />

      <section className="paddings flex w-full flex-col items-center justify-center max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
        <p className="mb-6 text-xl font-bold text-white">Order Successful</p>

        <div className="flex w-full items-center justify-center md:px-10">
          <div className="flex w-full flex-col rounded-md border border-[#FFFFFF0D] max-sm:rounded-lg max-sm:p-2">
            <div className="flex w-full flex-col rounded-md border border-[#FFFFFF0D] p-5 max-sm:rounded-lg max-sm:p-2">
              <div className="grid h-full items-center rounded-md max-sm:grid max-sm:gap-5 md:gap-10">
                <div className="flex w-full flex-col justify-center bg-[#FFFFFF0D] p-5">
                  <p className="text-center text-white">Altima.com/checkout</p>
                  <p className="text-center text-[100px] text-white">Thank You !!</p>

                  <p className="text-center text-sm text-white">
                    We are getting started on your order right away, and you will receive an order{" "}
                    <br className="max-md:hidden" />
                    confirmation email shortly. In the meantime, explore our other <br className="max-md:hidden" />
                    models and get inspired by our unique products. Head over to Altima.com
                  </p>

                  {orderId ? (
                    <p className="mt-4 hidden text-center text-lg text-white">
                      Your Order ID: <strong>{orderId}</strong>
                    </p>
                  ) : (
                    <p className="mt-4 text-center text-sm text-red-500">
                      Failed to retrieve Order ID. Please contact support.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="border-t border-[#FFFFFF0D]"></div>
            <div className="flex w-full justify-center gap-4 bg-[#080808] p-7">
              <Link
                href="/my-account/order"
                className="flex  w-full items-center justify-center gap-2 rounded-lg border border-[#FFFFFF1A] px-4 py-3 font-bold uppercase text-[#FFFFFF] max-sm:w-full"
              >
                Manage Order
              </Link>
              <button
                className="flex w-full  items-center justify-center gap-2 rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-3 font-normal uppercase text-[#FFFFFF] max-sm:w-full"
                onClick={downloadPDF}
              >
                Download Invoice
              </button>
            </div>
            <div className="border-t border-[#FFFFFF0D] "></div>
            <div className="flex w-full justify-center bg-[#080808] py-5">
              <p className="text-center text-sm text-white">
                Read about our <span className="underline">return policy</span>
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10 hidden w-full bg-[#FFFFFF] p-6 print:block" ref={invoiceRef}>
          <div className="flex flex-row items-start justify-between">
            <p className="text-lg font-semibold">
              Smart Haven GST Invoice <br />
              for Advance Payment
            </p>
            <img className="object-contain" src="/ALTIMA.png" width={76} height={20} alt="" />
          </div>

          <div className="mt-6 grid grid-cols-2 justify-between">
            <div className="grid gap-2 ">
              <div className="grid gap-1">
                <p className="text-[10px] text-[#0000004D]">ACCOUNT NUMBER</p>
                <p className="text-xs">Razorpay</p>
              </div>
              <div className="grid gap-1">
                <p className="text-[10px] text-[#0000004D]">Issued To:</p>
                <p className="text-xs">{orderDetails?.full_name}</p>
              </div>
              <div className="grid gap-1">
                <p className="text-[10px] text-[#0000004D]">Email:</p>
                <p className="text-xs">{orderDetails?.email_address}</p>
              </div>
              <div className="grid gap-1">
                <p className="text-[10px] text-[#0000004D]">Phone:</p>
                <p className="text-xs">{orderDetails?.contact_number}</p>
              </div>
            </div>
            <div className="w-full">
              <p className="font-xs mb-1 font-semibold">GST Invoice Summary</p>
              <div className="border-b border-dotted border-[#00000066]"></div>
              <div className="my-2 flex w-full justify-between">
                <p className="text-xs text-[#00000080]">Invoice No.</p>
                <p className="text-xs">AIN1234567890123</p>
              </div>
              <div className="border-b border-dotted border-[#00000066]"></div>
              <div className="my-2 flex w-full justify-between">
                <p className="text-xs text-[#00000080]">Invoice Date.</p>
                <p className="text-xs">{orderDetails?.pub_date}</p>
              </div>
              <div className="border-b border-dotted border-[#00000066]"></div>
              <div className="my-2 flex w-full justify-between">
                <p className="text-xs text-[#00000080]">Invoice Status.</p>
                {paymentStatus && <p className="text-center text-xs">Paid (30% Advance) </p>}
              </div>
              <div className="border-b border-dotted border-[#00000066]"></div>

              <div className="my-2 flex w-full justify-between">
                <p className="text-xs text-[#00000080]">Total Amount(Incl GST):</p>

                <p className="text-center text-xs">₹{orderDetails?.deposit_amount} </p>
              </div>
              <div className="border-b border-dotted border-[#00000066]"></div>
            </div>
          </div>
          <p className="my-5 text-center text-xs font-semibold">Original For Reciept</p>
          <div className="w-full">
            <div className="w-full bg-[#FF3B3080] p-2">
              <p className="text-xs font-semibold">Description of Goods/Services</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Product</p>
              <p className="text-xs">{orderDetails?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Model Details</p>
              <p className="text-xs">{orderDetails?.product_selection_altima_elite ? "Altima Elite" : "Altima Core"}</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Model Details</p>
              <p className="text-xs">₹{orderDetails?.total}</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Advance Amount Paid (30%)</p>
              <p className="text-xs">₹{orderDetails?.deposit_amount}</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">GST @ 18% on Advance</p>
              <p className="text-xs">
                ₹{orderDetails?.deposit_amount ? (Number(orderDetails.deposit_amount) * 0.18).toFixed(2) : "-"}
              </p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Total Amount Paid (Incl. GST)</p>
              <p className="text-xs">
                ₹
                {orderDetails?.deposit_amount
                  ? (Number(orderDetails.deposit_amount) + Number(orderDetails.deposit_amount) * 0.18).toFixed(2)
                  : "-"}
              </p>
            </div>
          </div>

          <div className="mt-5 w-full">
            <div className="w-full bg-[#FF3B3080] p-2">
              <p className="text-xs font-semibold">GST and Tax Details</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">GSTIN</p>
              <p className="text-xs">[Your GST Identification Number]</p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">Place of Supply</p>
              <p className="text-xs">
                {orderDetails?.shipping_address_street}, {orderDetails?.shipping_address_city},{" "}
                {orderDetails?.shipping_address_state}, {orderDetails?.shipping_address_country}
              </p>
            </div>
            <div className="flex justify-between border border-dotted p-3">
              <p className="text-xs">State Code</p>
              <p className="text-xs">₹{orderDetails?.shipping_address_postal_code}</p>
            </div>
          </div>
          <p className="my-5 text-center text-[10px] text-[#0000004D]">
            Smart Haven Systems Pvt. Ltd.
            <br />
            Registered Address: [Address]
            <br />
            GSTIN: [GST Identification Number]
            <br />
            PAN: [PAN Number]
            <br />
            Website: [Company Website]
          </p>
          <div className="flex w-full items-center justify-center">
            <img src="/WhatsApp Image 2022-06-01 at 8.33 1 (Traced).png" width={76} height={20} alt="" />
          </div>
          <p className="my-5 text-center text-[8px] text-[#0000004D]">
            This invoice is digitally signed for authenticity. Verification is available at: [Verification URL]
          </p>
        </section>
      </section>

      <MainFooter />
      <Footer />
    </section>
  )
}
