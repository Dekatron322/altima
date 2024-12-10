"use client"
import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {
  const faqData = [
    {
      title: "1. When will Altima Disappearing Handle Smart Doors be available?",
      content:
        "We’re targeting initial shipments to pre-order customers in Q1 2025. Please note that this date may be subject to change due to manufacturing and logistics. We’ll keep you updated every step of the way.",
    },
    {
      title: "2. How can I cancel my pre-order?",
      content:
        "To cancel your pre-order, please reach out to our support team at [ *support email* ] or call us at [ *support phone number* ]. Alternatively, you can log in to your account and follow the instructions under the My Orders section to cancel.",
    },
    {
      title: "3. What is the pre-order process?",
      content:
        "The pre-order process is simple. Select your preferred Altima model (Core or Elite), customize your door with the options you need, review the details, and place a 30% deposit to secure your order. We’ll keep you informed as your order progresses toward delivery.",
    },
    {
      title: "4. What happens if there are production delays?",
      content:
        "If there are any production delays, we will notify you promptly and provide an updated timeline. You can choose to wait for your order or request a full refund of your deposit if the delay is inconvenient.",
    },
    {
      title: "5. What is the warranty on Altima Disappearing Handle Smart Doors?",
      content:
        "Our smart doors come with a 1-year standard warranty covering any manufacturing defects. We also offer an optional extended warranty for an additional 2 years, providing a total of 3 years of coverage for extra peace of mind.",
    },
    {
      title: "6. What support do you offer for installation?",
      content:
        "We provide professional installation support in select areas to ensure your Altima smart door is installed seamlessly. Contact our support team to *discuss installation options in your location and any associated costs.",
    },
    {
      title: "7. Do you offer financing or payment plans?",
      content:
        "Yes, we offer flexible financing and payment plans to make your purchase more manageable. Reach out to our finance department at [ *finance contact email/phone* ] for more details and to find a plan that suits your needs.",
    },
  ]

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="bg-black">
      <Navbar />
      <section id="specifications" className="paddings w-full   bg-[#151515] pt-32 max-sm:px-3 ">
        <div className="  w-full justify-between    md:pt-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" my-3 text-center  text-lg font-semibold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                About Us
              </p>

              {/* <div className="my-6 flex w-full justify-center text-[#FFFFFF99]">
                <p className="text-lg">&quot; Smarter Entries, Smartest Spaces &quot;</p>
              </div> */}

              <p className="font-regular mb-6 w-full text-ellipsis text-lg text-[#FFFFFF99] max-sm:leading-7 md:text-center">
                Welcome to Altima, where innovation meets security in a smarter, more connected way. We are passionate
                about crafting intelligent solutions for modern living, blending advanced technology with elegant design
                to transform how you experience safety and convenience. Altima is more than just a product—it's a step
                forward in redefining how homes and businesses safeguard their spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid grid-cols-2  justify-between gap-20 max-sm:grid-cols-1 max-sm:gap-5 ">
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99] max-sm:text-lg  lg:text-2xl">Our Vision</p>
              <p className=" my-6 text-xl   font-bold leading-none tracking-tight text-white md:text-xl 2xl:text-3xl">
                What we are seeing
              </p>

              <p className="text-base leading-9 text-[#FFFFFF99]   max-sm:text-xs 2xl:text-[18px]">
                At Altima, our vision is to empower people to feel safe, secure, and in control of their environments.
                We envision a world where homes and commercial spaces operate seamlessly, with security that’s as
                intuitive as it is sophisticated. Through our smart doors and home systems, we bring this vision to
                life, ensuring that you have the confidence to focus on what truly matters.
              </p>
            </div>
            <div>
              <motion.img
                src="/about.png"
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
      </section>

      <section className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid grid-cols-2  justify-between gap-20 max-sm:grid-cols-1 max-sm:gap-5 ">
            <div>
              <motion.img
                src="/about.png"
                width={633}
                height={583}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99] max-sm:text-lg  lg:text-2xl">Our Journey</p>
              <p className=" my-6 text-xl   font-bold leading-none tracking-tight text-white md:text-xl 2xl:text-3xl">
                where we are heading to.
              </p>

              <p className="text-base leading-9 text-[#FFFFFF99]   max-sm:text-xs 2xl:text-[18px]">
                Founded as a csPILLAI® startup, Altima grew from a desire to revolutionize the way we interact with our
                surroundings. Built on a foundation of innovation and user-centered design, Altima is proud to be at the
                forefront of security technology. Our journey has been defined by our commitment to creating products
                that enhance lifestyles, offering solutions that are not only reliable but also accessible and
                forward-thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid grid-cols-2  justify-between gap-20 max-sm:grid-cols-1 max-sm:gap-5 ">
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99] max-sm:text-lg  lg:text-2xl">Benefits</p>
              <p className=" my-6 text-xl   font-bold leading-none tracking-tight text-white md:text-xl 2xl:text-3xl">
                Why Choose Altima?
              </p>

              <p className="text-base leading-9 text-[#FFFFFF99]   max-sm:text-xs 2xl:text-[18px]">
                Our commitment to quality, security, and customer satisfaction is unwavering. Each Altima product is
                crafted with meticulous attention to detail, incorporating cutting-edge features that bring a new level
                of convenience and peace of mind to our customers. With Altima, you’re not just getting a security
                product—you’re gaining a trusted partner dedicated to protecting your world.
              </p>
            </div>
            <div>
              <motion.img
                src="/about.png"
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
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div className="md:w-full ">
              <div className="flex flex-col items-center">
                <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-lg lg:text-2xl">Altima</p>
                <p className=" mb-4 mt-2 text-xl  font-bold tracking-tight  text-white max-sm:my-2   md:text-xl md:leading-10 xl:text-3xl">
                  The Altima Difference
                </p>

                {/* <motion.button
                  className="font-regular rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-3 max-sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Pre-Order now
                </motion.button> */}
              </div>
              <div className="flex items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-1">
                <div className=" w-full rounded-lg bg-[#080808] p-10  max-sm:p-5 md:h-[379px] md:w-[347px]">
                  <Image
                    src="/hugeicons_ai-innovation-01.png"
                    width={50}
                    height={50}
                    alt=""
                    className="max-sm:hidden"
                  />
                  <Image src="/hugeicons_ai-innovation-01.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">1. Innovation Driven</p>
                  <p className=" text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Altima products integrate the latest in smart home technology, offering seamless control and a
                    personalized user experience.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-10 max-sm:p-5 md:h-[379px] md:w-[347px]">
                  <Image src="/SketchLogo.png" width={50} height={50} alt="" className="max-sm:hidden" />
                  <Image src="/SketchLogo.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">2. Relaibility</p>
                  <p className="text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Built to the highest standards, Altima systems are robust, durable, and dependable, ensuring your
                    security day in and day out.
                  </p>
                </div>
                <div className=" w-full rounded-lg bg-[#080808] p-10 max-sm:p-5 md:h-[379px] md:w-[347px]">
                  <Image
                    src="/icon-park-outline_customer.png"
                    width={50}
                    height={50}
                    alt=""
                    className="max-sm:hidden"
                  />
                  <Image src="/icon-park-outline_customer.png" width={40} height={40} alt="" className="sm:hidden" />
                  <p className="py-4 text-lg text-white max-sm:text-sm">3. Customer Centric</p>
                  <p className="text-lg text-[#FFFFFF99] max-sm:text-xs">
                    Our customers are at the heart of everything we do. From intuitive designs to responsive support, we
                    prioritize your needs.
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
            <div>
              <p className=" my-3 text-center  text-lg font-bold text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Our Promise
              </p>

              <p className="font-regular mb-3 w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center 2xl:text-lg">
                At Altima, we are committed to pushing the boundaries of security while maintaining the trust of our
                customers. We promise you transparency, quality, and constant innovation, so that you can feel confident
                in every Altima solution.
              </p>

              <p className="font-regular mt-3 w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center 2xl:text-lg">
                Thank you for choosing Altima—where your peace of mind is our top priority.
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
                placeholder="Case Title"
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
