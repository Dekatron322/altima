import React, { useState } from "react"
import axios from "axios"
import { LiaTimesSolid } from "react-icons/lia"

interface CancelModalProps {
  isCancelModalOpen: boolean
  closeCancelModal: () => void
  orderId: string // Add a prop for the order ID
}

const CancelModal: React.FC<CancelModalProps> = ({ isCancelModalOpen, closeCancelModal, orderId }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleCancelOrder = async () => {
    setIsLoading(true)
    try {
      const response = await axios.patch(
        `https://api.smarthavensystems.com/preorder/preorder/${orderId}/update-status/`,
        { status: "cancelled" }
      )
      console.log("Order cancelled successfully:", response.data)
      alert("Order has been cancelled successfully.")
      closeCancelModal() // Close the modal on success
    } catch (error) {
      console.error("Error cancelling the order:", error)
      alert("Failed to cancel the order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isCancelModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] bg-opacity-95">
      <div className="w-full max-w-sm rounded-lg bg-[#151515] p-4 text-white">
        <div className="mb-4 flex w-full items-center">
          <h2 className="w-full text-center text-[#FFFFFF99]">Cancel Order</h2>
          <LiaTimesSolid onClick={closeCancelModal} className="cursor-pointer" />
        </div>
        <p className="w-full text-center text-2xl text-white">Are you sure you want to Cancel this order?</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleCancelOrder}
            disabled={isLoading}
            className={`w-full rounded-lg border border-[#FFFFFF99] bg-[#FF3B3B] px-4 py-2 text-[#000000] hover:bg-[#FF3B3B] ${
              isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {isLoading ? "Cancelling..." : "Yes, Cancel"}
          </button>
          <button
            onClick={closeCancelModal}
            className="w-full rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-2 text-[#ffffff] hover:bg-[#FF3B3B]"
          >
            No, Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelModal
