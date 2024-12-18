"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import MainFooter from "components/Footer/MainFooter"
import NewNav from "components/Navbar/NewNav"

export default function Web() {

  return (
    <section className="bg-black">
      <NewNav />
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    md:pt-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Important Link
              </p>
              <p className=" my-3 text-center  text-lg font-semibold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                How Pre-orders Work
              </p>

              <p className="font-regular md:text-cente w-full text-ellipsis text-center text-lg text-[#FFFFFF99] max-sm:leading-7 2xl:px-60">
                Preordering with Altima is simple and secure. Follow these steps to reserve your Altima product and be
                among the first to experience the future of smart home security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full  bg-[#151515]  max-sm:px-3 ">
        <div className="  w-full justify-between    pb-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div className="md:w-full ">
              <div className="flex items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-1">
                <div className=" w-full rounded-lg bg-[#080808] p-10  max-sm:p-5 md:h-[551px] ">
                  <p className="text-6xl font-bold text-[#FF3B30]">1</p>
                  <p className="py-4 text-xl font-semibold text-white max-sm:text-sm">Place Your Order</p>
                  <p className=" text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Browse our available Altima models and choose the product that best suits your needs. Click on the
                    “Preorder Now” button and complete the checkout process to secure your reservation.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-10  max-sm:p-5 md:h-[551px] ">
                  <p className="text-6xl font-bold text-[#FF3B30]">2</p>
                  <p className="py-4 text-xl font-semibold text-white max-sm:text-sm">Pay a 30% Deposit</p>
                  <p className=" text-lg text-[#FFFFFF99] max-sm:text-xs">
                    To confirm your preorder, we require a 30% deposit. This deposit locks in your order and secures
                    your place in our production queue. Please note that this deposit is non-refundable, but it will be
                    applied toward your final payment.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-10 max-sm:p-5 md:h-[551px] ">
                  <p className="text-6xl font-bold text-[#FF3B30]">3</p>
                  <p className="py-4 text-xl font-semibold text-white max-sm:text-sm">Confirmation and Updates</p>
                  <p className="text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Once your preorder is confirmed, you will receive an email with your order details and estimated
                    delivery timeframe. We will keep you updated throughout the production and fulfillment process to
                    ensure transparency and peace of mind.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-10 max-sm:p-5 md:h-[551px] ">
                  <p className="text-6xl font-bold text-[#FF3B30]">4</p>
                  <p className="py-4 text-xl font-semibold text-white max-sm:text-sm">Final Payment and Delivery</p>
                  <p className="text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Approximately four to five months after the preorder window closes, we will notify you when your
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
              <p className=" my-3 text-center  text-lg font-bold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Important Note on Preorders
              </p>

              <p className="font-regular mb-3  mt-3 w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center 2xl:text-lg">
                <span className="text-white">Non-refundable Deposit: </span>
                The 30% deposit is non-refundable but will be applied to your total purchase amount.
              </p>

              <p className="font-regular  w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center 2xl:text-lg">
                <span className="text-white">Estimated Delivery: </span> Altima products are estimated to ship within
                4-5 months after the preorder window closes.
              </p>

              <p className="mt-6 text-center text-[#FFFFFF66] xl:w-[700px] ">
                If you have any questions or need assistance, please contact our support team at
                customercare@smarthavensystems.com or call us at 02269718365.
              </p>

              <p className="mt-3 text-center text-[#FFFFFF66] xl:w-[448px] ">
                Thank you for choosing Altima! We are excited to bring our innovative solutions to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="specifications" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-regular  mb-6 flex  text-5xl  text-[#FFFFFF] max-md:text-lg">Modern, Stylish, Unique</p>
            <motion.a
              href="/preorder"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-regular flex  gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-xs "
            >
              Pre-Order now
            </motion.a>
          </div>
        </div>
      </section> */}

      {/* <section id="other-products" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-20 max-sm:gap-5 sm:flex">
            <div className="w-[403]">
              <p className="font-regular flex text-2xl  text-[#FFFFFF99] max-sm:text-lg lg:text-2xl">our Models</p>
              <p className=" font-regular my-6 text-xl leading-none tracking-tight text-white max-sm:my-3 md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex items-center justify-between bg-[#000000] px-4 py-2 text-black md:max-w-[522px]">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus:</li>
                  </ul>

                  <p className="text-2xl text-[#FF4F45] max-sm:text-lg">₹80,000</p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc md:mb-10">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15" 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Facial recognition and NFC access</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Solar-powered backup battery</li>
              </ul>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                href="/preorder"
              >
                Pre-Order now
              </motion.a>
            </div>
            <div>
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                width={633}
                height={583}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 " id="contact">
        <div className="  w-full     py-10">
          <div className="flex flex-col  items-center justify-center">
            <p className=" text-center text-[#FFFFFF99]">Contact us</p>
            <p className="my-6 flex text-center  text-[32px]  font-bold  text-[#FFFFFF] max-md:text-2xl">
              Have Questions?
            </p>
            <div className="input-field ">
              <input
                type="text"
                id="placement"
                placeholder="Full Name"
                className="bg-transparent  text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="input-field my-7">
              <input
                type="text"
                id="placement"
                placeholder="Email"
                className="bg-transparent text-xs  text-white outline-none focus:outline-none"
                style={{ width: "100%" }}
              />
            </div>

            <div className="text-area ">
              <textarea
                id="username"
                placeholder="Enter Message"
                className="min-h-[200px] bg-transparent text-xs text-white outline-none focus:outline-none"
                style={{ width: "100%", height: "24px" }}
              ></textarea>
            </div>

            <button className="font-regular mt-7 flex w-[60%] items-center justify-center gap-2  rounded-lg border border-[#FF3B30] bg-[#FF3B30] px-4 py-4 uppercase text-[#FFFFFF] max-sm:w-full ">
              Submit
            </button>
          </div>
        </div>
      </section>

      <MainFooter />

      <Footer />
    </section>
  )
}
