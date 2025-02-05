"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"
import ContactUs from "components/ContactUs/Contact"

export default function Web() {
  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] max-xl:px-3 xl:pt-32 ">
        <div className="  w-full justify-between   ">
          <div className="flex w-full justify-between gap-10  xl:flex">
            <div>
              <p className=" my-3 text-center  text-lg font-semibold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                How Pre-orders Work
              </p>

              <p className="md:text-cente w-full text-ellipsis text-center text-lg font-normal text-[#FFFFFF99] max-xl:text-sm max-xl:leading-7 2xl:px-60">
                Pre-ordering with Altima is simple and secure. Follow these steps to reserve your Altima product and be
                among the first to experience the future of smart home security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full  bg-[#151515]  max-sm:px-3 ">
        <div className="  w-full justify-between    pb-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  xl:flex">
            <div className="xl:w-full ">
              <div className="flex  justify-center gap-4 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1">
                <div className=" w-full rounded-lg bg-[#080808] p-6   ">
                  <p className="text-6xl font-bold text-[#FF3B30]">1</p>
                  <p className="max-xl:text-baxe py-4 text-xl font-semibold text-[#ffffffcc]">Place Your Order</p>
                  <p className=" text-base text-[#FFFFFF99] max-sm:text-sm">
                    Browse our available Altima models and choose the product that best suits your needs. Click on the
                    “Pre-order Now” button and complete the checkout process to secure your reservation.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-6  max-sm:p-5  ">
                  <p className="text-6xl font-bold text-[#FF3B30]">2</p>
                  <p className="max-xl:text-baxe py-4 text-xl font-semibold text-[#ffffffcc]">Pay a 30% Deposit</p>
                  <p className=" text-base text-[#FFFFFF99] max-xl:text-sm">
                    To confirm your pre-order, we require a 30% deposit. This deposit locks in your order and secures
                    your place in our production queue. Please note that this deposit is non-refundable, but it will be
                    applied toward your final payment.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-6 max-sm:p-5 ">
                  <p className="text-6xl font-bold text-[#FF3B30]">3</p>
                  <p className="max-xl:text-baxe py-4 text-xl font-semibold text-[#ffffffcc]">
                    Confirmation and Updates
                  </p>
                  <p className="text-base text-[#FFFFFF99] max-xl:text-sm">
                    Once your pre-order is confirmed, you will receive an email with your order details and estimated
                    delivery timeframe. We will keep you updated throughout the production and fulfillment process to
                    ensure transparency and peace of mind.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-6 max-sm:p-5  ">
                  <p className="text-6xl font-bold text-[#FF3B30]">4</p>
                  <p className="max-xl:text-baxe py-4 text-xl font-semibold text-[#ffffffcc]">
                    Final Payment and Delivery
                  </p>
                  <p className="text-base text-[#FFFFFF99] max-xl:text-sm">
                    Approximately four to five months after the pre-order window closes, we will notify you when your
                    product is ready for final payment. Upon receipt of the remaining balance, we will arrange for
                    shipment to your address. A final payment notice will be sent before delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="paddings   w-full bg-[#272626] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div className="flex w-full flex-col items-center">
              <Image src="/icon-park-solid_caution.png" width={50} height={50} alt="" className="max-sm:hidden" />
              <Image src="/icon-park-solid_caution.png" width={40} height={40} alt="" className="sm:hidden" />
              <p className=" my-3 text-center  text-lg font-bold text-[#ffffffcc]  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Important Note on Pre-orders
              </p>

              <p className="mb-3 mt-3  w-full font-normal text-[#FFFFFF99] max-xl:text-center max-xl:text-sm max-xl:leading-7 md:text-center 2xl:text-lg">
                <span className="text-white">Non-refundable Deposit: </span>
                The 30% deposit is non-refundable but will be applied to your total purchase amount.
              </p>

              <p className="max-cl:leading-7  w-full font-normal text-[#FFFFFF99] max-xl:text-center max-xl:text-sm md:text-center 2xl:text-lg">
                <span className="text-white">Estimated Delivery: </span> Altima products are estimated to ship within
                4-5 months after the pre-order window closes.
              </p>

              <p className="mt-6 text-center text-[#FFFFFF66] max-xl:text-center max-xl:text-sm xl:w-[700px]">
                If you have any questions or need assistance, please contact our support team at
                customercare@smarthavensystems.com or call us at 08047360770.
              </p>

              <p className="mt-3 text-center text-[#FFFFFF66] max-xl:text-center max-xl:text-sm xl:w-[448px]">
                Thank you for choosing Altima! We are excited to bring our innovative solutions to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />

      <MainFooter />

      <Footer />
    </section>
  )
}
