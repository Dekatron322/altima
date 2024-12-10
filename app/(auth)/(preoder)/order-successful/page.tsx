"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import MainFooter from "components/Footer/MainFooter"
import Link from "next/link"


  export default function Web() {
    const [quantity, setQuantity] = useState(1000);
    const [isDefaultEmail, setIsDefaultEmail] = useState(true);
    const [isDefaultPhone, setIsDefaultPhone] = useState(true);
    const [orderId, setOrderId] = useState<string | null>(null);
  
    const router = useRouter();
  
    const unitPrice = 500050; // price per unit
    const total = quantity * unitPrice;
  
    // Handlers for toggling
    const togglePhone = () => setIsDefaultPhone(!isDefaultPhone);
    const toggleEmail = () => setIsDefaultEmail(!isDefaultEmail);
  
    // Fetch orderId from localStorage on the client side
    useEffect(() => {
      const storedOrderId = localStorage.getItem("orderId");
      setOrderId(storedOrderId);
    }, []);
  
    const handleGoBack = () => {
      router.back();
    };

  return (
    <section className="bg-[#080808]">
      <Navbar />

      <section className="paddings flex w-full flex-col items-center  justify-center  max-sm:px-3 max-sm:py-20 lg:h-auto lg:py-32">
        <p className="mb-6 text-xl font-bold text-white">Order Successful</p>

        <div className="flex w-full   items-center justify-center md:px-10">
          <div className="flex  w-full  flex-col   rounded-md border border-[#FFFFFF0D]   max-sm:rounded-lg  max-sm:p-2">
            <div className="flex  w-full  flex-col   rounded-md border border-[#FFFFFF0D]  p-5 max-sm:rounded-lg  max-sm:p-2">
              <div className="grid h-full items-center  rounded-md     max-sm:grid max-sm:gap-5  md:gap-10 ">
                <div className=" flex w-full flex-col justify-center bg-[#FFFFFF0D] p-5">
                  <p className="text-center text-white">Altima.com/checkout</p>
                  <p className="text-center text-[100px] text-white">Thank You !!</p>

                  <p className="text-center text-sm text-white">
                    We are Getting Started on your order right Away, and you will receive an order{" "}
                    <br className=" max-md:hidden" />
                    <br className=" max-md:hidden" />
                    confirmation email shortly to Johndoe@gmail.com. In the Mean time Explore Our Other{" "}
                    <br className=" max-md:hidden" />
                    <br className=" max-md:hidden" />
                    models and get inspired by our unique product, head over to Altima.com
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#FFFFFF0D]"></div>
            <div className="flex w-full justify-center  bg-[#080808] py-7">
              <Link href="/my-account/order" className="flex w-[60%] items-center justify-center gap-2 rounded-lg  border border-[#FFFFFF1A]  px-4 py-3 font-bold uppercase text-[#FFFFFF] max-sm:w-full ">
                Manage Order
              </Link>
            </div>
            <div className="border-t border-[#FFFFFF0D] "></div>
            <div className="flex w-full justify-center  bg-[#080808] py-5">
              <p className="text-center text-sm text-white">
                Read about our <span className="underline">return policy</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
