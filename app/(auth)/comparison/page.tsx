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
        <div className="  w-full justify-between    md:py-32">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Altima vs Competitors: Feature Comparison
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Altima_vs_Competitors_2024Nov6.pdf"
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-4 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  DOWNLOAD
                </motion.a>

                <motion.button
                  className="font-regular whitespace-nowrap rounded-lg   bg-[#FFFFFF0D] px-8 py-3 uppercase text-[#FFFFFF] max-sm:mb-3  max-sm:w-full max-sm:py-3 max-sm:text-xs "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const fileUrl = "/Altima_vs_Competitors_2024Nov6.pdf" // Replace with the actual path
                    const fullUrl = `${window.location.origin}${fileUrl}`

                    if (navigator.share) {
                      navigator
                        .share({
                          title: "Altima Feature Comparison",
                          text: "Check out the Altima vs Competitors: Feature Comparison PDF.",
                          url: fullUrl,
                        })
                        .catch((error) => console.error("Error sharing:", error))
                    } else {
                      alert("Sharing is not supported in this browser.")
                    }
                  }}
                >
                  SHARE
                </motion.button>
              </div>

              <div className="my-6 flex w-full justify-center text-[#FFFFFF99]">
                <p className="text-lg">&quot; Smarter Entries, Smartest Spaces &quot;</p>
              </div>

              <p className="font-regular mb-6 w-full text-ellipsis text-sm text-[#FFFFFF99] max-sm:leading-7 md:text-center">
                Discover the Altima range - from Altima Core, a robust smart door ensuring top-tier security, to Altima
                Elite, which transforms your entryway into the heart of your smart home. Altima products are uniquely
                crafted to integrate smart lock mechanisms directly into metal, glass, or wood doors, providing a
                complete solution that stands out from competitors offering only standalone smart locks.
              </p>
            </div>
          </div>
          <div className="w-full overflow-x-auto border">
            <table className="min-w-[1200px] table-fixed border-separate border-spacing-0 text-left text-white 2xl:w-full">
              <thead>
                <tr>
                  <th className="border-b bg-[#FFFFFF1A] px-4 py-4 text-sm">Features</th>
                  <th className="border-b border-l bg-[#151515] px-4 py-4 text-sm">Godrej</th>
                  <th className="border-b border-l bg-[#FFFFFF1A] px-4 py-4 text-sm">Ozone Overseas</th>
                  <th className="border-b border-l bg-[#151515]  px-4 py-4 text-sm">Yale</th>
                  <th className="border-b border-l bg-[#FFFFFF1A] px-4 py-4 text-sm">Dormakaba</th>
                </tr>
              </thead>
              <tbody className="border-b">
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">1. Cost Cost</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">36,199 - 61,199 INR</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">35,000 - 55,000 INR</td>
                  <td className="border-l  bg-[#151515] px-4 py-2 text-sm">40,000 - 60,000 INR</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">50,000 - 75,000 INR</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">2. Security Level</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">High</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">High</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">High</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Very High</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">3. Smart Lock Type</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Digital (Fingerprint, PIN)</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Digital (Touchpad, PIN)</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Digital (Voice Guidance)</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Advanced (Custom Access)</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">4. Home Integration</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Limited</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Limited</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Moderate</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Moderate</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">5. User Profilest</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Multiple</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Multiple</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Multiple</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Customizable</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">6. Remote Access</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Yes</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Yes</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">7. Design Options</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Basic</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Moderate</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Elegant</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Premium</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">8. Special Features</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Emergency Key Override</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Auto-Locking</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">
                    Tamper Alarm, Smartphone Remote Management
                  </td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Auto-Locking</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">9. Target Audience</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Residential/Commercial</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Residential/Commercial</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Homeowners</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Commercial Buildings</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">10. Limitations</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No advanced automation</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Limited integration</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Basic home automation</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">High cost for residential</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">11. External Power Option</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">9V Battery</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">9V Battery</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">9V Battery</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">External Power Source</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">12. Voice Assistant Controlt</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">13. Smart Home Automation</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Limited</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Limited</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">14. Energy Management</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">15. Security Alerts</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Basic Alarm</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Basic Alarm</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">Tamper Alarm</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">Advanced Alerts</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">16. Intercom Functionality</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                </tr>
                <tr>
                  <td className=" bg-[#FFFFFF1A] px-4 py-2 text-sm">17. Embedded in Door Types</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#151515] px-4 py-2 text-sm">No</td>
                  <td className="border-l bg-[#FFFFFF1A] px-4 py-2 text-sm">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <motion.div
          className="  w-full justify-between py-10"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full justify-between  sm:flex">
            <div className="w-full items-center justify-center max-sm:w-full">
              <p className="font-regular  text-center  text-2xl  text-[#FFFFFF99]  lg:text-2xl">Benefits</p>
              <p className=" font-regular mb-4  mt-2  text-center   text-xl leading-none tracking-tight text-white max-sm:my-4 md:text-xl xl:text-3xl">
                Why Pre-Order?
              </p>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1 ">
                <div className="flex w-full gap-3 rounded-lg border border-[#FFFFFF1A] max-sm:p-5 sm:p-10">
                  <div className="w-12">
                    <Image src="/SketchLogo.png" width={48} height={48} alt="" className="max-sm:hidden" />
                    <Image src="/SketchLogo.png" width={35} height={35} alt="" className="sm:hidden" />
                  </div>
                  <div className="pl-5">
                    <p className="pb-2 text-lg text-white max-md:text-sm">Altima Elite</p>
                    <p className=" text-base text-[#FFFFFF99] max-sm:text-xs">
                      Full smart home hub capabilities, managing your lighting, heating, <br /> and security cameras
                      seamlessly
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-5 rounded-lg border border-[#FFFFFF1A] max-sm:p-5 sm:p-10">
                  <div className="w-12">
                    <Image src="/SketchLogo.png" width={48} height={48} alt="" className="max-sm:hidden" />
                    <Image src="/SketchLogo.png" width={35} height={35} alt="" className="sm:hidden" />
                  </div>
                  <div className="pl-5">
                    <p className="pb-2 text-lg text-white max-md:text-sm">Real-Time Security Alerts</p>
                    <p className=" text-base text-[#FFFFFF99] max-sm:text-xs">
                      Get instant notifications on your smartphone for any <br /> suspicious activity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                <div className="flex w-full gap-3 rounded-lg border border-[#FFFFFF1A] max-sm:p-5 sm:p-10">
                  <div className="w-12">
                    <Image src="/SketchLogo.png" width={48} height={48} alt="" className="max-sm:hidden" />
                    <Image src="/SketchLogo.png" width={35} height={35} alt="" className="sm:hidden" />
                  </div>
                  <div className="pl-5">
                    <p className="pb-2 text-lg text-white max-md:text-sm">Altima Core</p>
                    <p className=" text-base text-[#FFFFFF99] max-sm:text-xs">
                      Essential smart security with a sleek, modern design. Ideal <br />
                      for those who need robust protection and convenience.
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-3 rounded-lg border border-[#FFFFFF1A] max-sm:p-5 sm:p-10">
                  <div className="w-12">
                    <Image
                      src="/SketchLogo.png"
                      width={48}
                      height={48}
                      alt=""
                      className="h-12 w-12 overflow-visible object-cover max-sm:hidden"
                    />
                    <Image src="/SketchLogo.png" width={35} height={35} alt="" className="sm:hidden" />
                  </div>
                  <div className="pl-5">
                    <p className="pb-2 text-lg text-white max-md:text-sm">
                      {" "}
                      Voice Assistant Integration (Altima Elitee)
                    </p>
                    <p className=" text-base text-[#FFFFFF99] max-sm:text-xs">
                      Control your home with your voice using Alexa or Google Assistant.
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-5 rounded-lg border border-[#FFFFFF1A] max-sm:p-5 sm:p-10">
                  <div className="w-12">
                    {/* Fixed size for large screens */}
                    <Image
                      src="/SketchLogo.png"
                      width={48}
                      height={48}
                      alt=""
                      className="h-12 w-12 overflow-visible object-cover max-sm:hidden"
                    />
                    {/* Fixed size for small screens */}
                    <Image
                      src="/SketchLogo.png"
                      width={35}
                      height={35}
                      alt=""
                      className="h-8 w-8 object-cover sm:hidden"
                    />
                  </div>
                  <div className="pl-5">
                    <p className="pb-2 text-lg text-white max-md:text-sm">Smart Lock Embedded in Multiple Door Types</p>
                    <p className="text-base text-[#FFFFFF99] max-sm:text-xs">
                      Altima products integrate directly into metal,
                      <br /> glass, or wood doors, providing a complete and unified security solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how-to-buy" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between gap-10  sm:flex">
            <div className="md:w-full ">
              <div className="flex flex-col items-center">
                <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-lg lg:text-2xl">
                  Testimonials & Reviews
                </p>
                <p className=" mb-2 mt-2 text-xl  font-bold tracking-tight  text-white max-sm:my-2   md:text-xl md:leading-10 2xl:text-3xl">
                  What People are Saying
                </p>
              </div>

              <div className="mt-4 grid w-full grid-cols-3 gap-5 max-sm:grid-cols-1">
                <div className="flex gap-4 rounded-md bg-[#080808] max-sm:p-5 sm:p-10">
                  <Image
                    src="/avatar1.png"
                    width={63}
                    height={63}
                    alt=""
                    className="h-14 w-14 overflow-visible object-cover max-sm:hidden"
                  />
                  <Image src="/avatar1.png" width={40} height={40} alt="" className="h-8 w-8 object-cover sm:hidden" />
                  <div>
                    <p className="pb-2 text-lg text-white max-md:text-sm">Preorder Customer</p>
                    <p className="text-base text-[#FFFFFF99] max-sm:text-xs">
                      Altima Core is exactly what we needed for home security. Looking forward to upgrading to Altima
                      Elite for full home integration.
                    </p>
                  </div>
                </div>
                <div className="rounded-md bg-[#080808] ">
                  <div className="flex gap-4 rounded-md bg-[#080808] max-sm:p-5 sm:p-10">
                    <Image
                      src="/avatar2.png"
                      width={63}
                      height={63}
                      alt=""
                      className="h-14 w-14 overflow-visible object-cover max-sm:hidden"
                    />
                    <Image
                      src="/avatar2.png"
                      width={40}
                      height={40}
                      alt=""
                      className="h-8 w-8 object-cover sm:hidden"
                    />

                    <div>
                      <p className="pb-2 text-lg text-white max-md:text-sm">Smart Home Enthusiast</p>
                      <p className="text-base text-[#FFFFFF99] max-sm:text-xs">
                        Altima Elite is the perfect solution, seamlessly connecting our smart devices and making our
                        home smarter and more secure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-[#080808] ">
                  <div className="flex gap-4 rounded-md bg-[#080808] max-sm:p-5 sm:p-10">
                    <Image
                      src="/avatar3.png"
                      width={63}
                      height={63}
                      alt=""
                      className="h-14 w-14 overflow-visible object-cover max-sm:hidden"
                    />
                    <Image
                      src="/avatar3.png"
                      width={40}
                      height={40}
                      alt=""
                      className="h-8 w-8 object-cover sm:hidden"
                    />
                    <div>
                      <p className="pb-2 text-lg text-white max-md:text-sm">Industry Expert</p>
                      <p className="text-base text-[#FFFFFF99] max-sm:text-xs">
                      &lsquo;Altima has taken smart doors to a new level, offering unparalleled security and home automation
                        features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="specifications" className="paddings   w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="flex w-full justify-between gap-10  sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Specifications
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Comprehensive Product Specification
              </p>

              <p className="font-regular mb-3 w-full text-[#FFFFFF99] max-sm:leading-7 md:text-center">
                Altima Door is a state-of-the-art smart door system that integrates advanced
                <br className="max-sm:hidden" />
                technology with home entry. It functions as both a secure entry point and a smart home{" "}
                <br className="max-sm:hidden" />
                hub, offering unmatched control, security, and energy management capabilities.
              </p>
              <div className="grid w-full rounded-2xl bg-[#080808] p-3 max-sm:p-1">
                <Image src="/video.png" width={1312} height={60} alt="" className="p-2 max-sm:hidden" />
                <Image src="/doorVid.png" width={1312} height={60} alt="" className="p-1 md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

      <section id="other-products" className="paddings  w-full bg-[#080808] max-sm:px-3 ">
        <div className="  w-full justify-between md:py-10">
          <div className="flex w-full flex-col items-center justify-center sm:hidden">
            <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:text-sm lg:text-2xl">Our Models</p>
            <p className=" font-regular mb-6 mt-3    text-xl leading-none tracking-tight text-white md:text-xl xl:text-5xl">
              ALTIMA Core
            </p>
          </div>
          <div className="flex w-full justify-between max-sm:grid max-sm:gap-5  md:gap-20">
            <div>
              <motion.img
                src="/new.png"
                width={645}
                height={555}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="">
              <p className="font-regular  flex  text-2xl  text-[#FFFFFF99]  max-sm:hidden max-sm:text-lg lg:text-2xl">
                Our Models
              </p>
              <p className=" font-regular my-6    text-xl leading-none tracking-tight text-white max-sm:hidden md:text-xl xl:text-5xl">
                ALTIMA Core
              </p>
              <div>
                <div className="max-w-[522px] items-center justify-between bg-[#151515] px-4 py-2 text-black max-sm:w-full max-sm:justify-center md:flex">
                  <ul className="list-inside list-disc">
                    <li className="py-2 text-[#FFFFFF] max-sm:text-center max-sm:text-xs">Advanced Home Control </li>
                    <li className=" text-[#FFFFFF] max-sm:text-center max-sm:text-xs">All Core features, plus:</li>
                  </ul>

                  <p className="text-2xl font-bold text-[#FF4F45] max-sm:mt-3 max-sm:text-center max-sm:text-lg">
                    ₹49,500 + Taxes
                  </p>
                </div>
              </div>
              <ul className="mt-6 list-inside list-disc pl-2 md:mb-4">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration:</span> Limited
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Multiple
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Emergency Key Override, Auto-Locking
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Backup Battery
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Basic Alerts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> No
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level:</span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Metal Only
                </li>
              </ul>

              <div className="flex items-center justify-between bg-[#FFFFFF0D] px-7 py-3">
                <ul className=" list-inside list-disc pl-2">
                  <li className=" text-[#FFFFFF] max-sm:text-xs">Feature Comparison</li>
                </ul>
                <div>
                  <ul className=" flex list-inside list-disc items-center gap-2 pl-2">
                    <li className=" text-[#FFFFFF] underline max-sm:text-xs">Download</li>
                    <motion.img
                      src="/FileArrowDown.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>
              <div className="mt-8 max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.a
                  href="/preorder"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="other-products" className="paddings  w-full bg-[#151515] max-sm:px-3 ">
        <div className="  w-full justify-between    md:py-10">
          <div className="grid-col-2 grid w-full justify-between max-sm:gap-5 sm:flex  md:gap-20">
            <div className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center md:w-[403] ">
              <p className="font-regular  flex    text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">Our Models</p>
              <p className=" font-regular my-6  text-xl leading-none tracking-tight text-white max-sm:my-3 md:text-xl xl:text-5xl">
                ALTIMA Elite
              </p>
              <div>
                <div className="flex max-w-[522px] items-center justify-between gap-6 bg-[#000000] px-4 py-2 text-black max-sm:hidden">
                  <ul className="list-inside list-disc">
                    <li className=" text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="text-2xl font-bold text-[#FF4F45] max-sm:text-lg">₹99,000 + Taxes</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2 max-sm:hidden">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Level: </span> Very High
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Lock Type: </span> Biometric Lock, Smart Hub
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Home Integration: </span> Extensive
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">User Profiles: </span> Extensive Customization
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Remote Access: </span> Yes
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Design: </span> Sleek and Modern
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Special Features: </span> Smart Home Hub, Analytics
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Target Audience: </span> Smart Home Enthusiasts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">External Power Option: </span> Smart Home Backup Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Voice Assistant Control: </span> Yes, Alexa & Google Assistant
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Smart Home Automation: </span> Full Integration
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Energy Management: </span> Yes, Smart Energy Monitoring
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Security Alerts: </span> Real-Time Mobile Alerts
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Intercom Functionality: </span> Built-in Intercom System
                </li>
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  <span className="text-[#FFFFFF80]">Embedded in Door Types: </span> Metal, Glass, Wood
                </li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="flex items-center justify-between bg-[#FFFFFF0D] px-7 py-3">
                <ul className=" list-inside list-disc pl-2">
                  <li className=" text-[#FFFFFF] max-sm:text-xs">Feature Comparison</li>
                </ul>
                <div>
                  <ul className=" flex list-inside list-disc items-center gap-2 pl-2">
                    <li className=" text-[#FFFFFF] underline max-sm:text-xs">Download</li>
                    <motion.img
                      src="/FileArrowDown.png"
                      width={32}
                      height={32}
                      alt=""
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, ease: "easeIn" }}
                    />
                  </ul>
                </div>
              </div>
              <div className="mt-8 max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular gap-2  rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:hidden max-sm:py-2 max-sm:text-sm "
                  href="/preorder"
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
            <div className=" max-sm:hidden">
              <motion.img
                src="/new.png"
                width={645}
                height={555}
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              />
            </div>
            <div className="md:hidden">
              <motion.img
                src="https://github.com/Dekatron322/altima/blob/main/public/altimaCore.png?raw=true"
                alt=""
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="md:hidden md:w-[403]">
              <div>
                <div className=" w-full items-center justify-center bg-[#000000] px-4 py-4 text-black">
                  <ul className="list-inside list-disc">
                    <li className=" text-center text-[#FFFFFF] max-sm:text-xs">Ultimate Smart Home Hub </li>
                    <li className=" mt-2 text-center text-[#FFFFFF] max-sm:text-xs">All Pro features, plus</li>
                  </ul>

                  <p className="mt-3 text-center text-2xl text-[#FF4F45] max-sm:text-lg">₹80,000</p>
                </div>
              </div>
              <ul className="mb-6 mt-6 list-inside list-disc pl-2">
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">15&quot; 4K touchscreen with haptic feedback</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Comprehensive smart home ecosystem control</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Facial recognition and NFC access</li>
                <li className="pb-2  text-[#FFFFFF99] max-sm:text-xs">4K camera with AI-powered motion detection</li>
                <li className="pb-2 text-[#FFFFFF99] max-sm:text-xs">Solar-powered backup battery</li>
              </ul>

              {/* <ul className="my-6 list-inside list-disc">
                <li className="pb-2 text-[#FFFFFF] max-sm:text-xs">
                  Perfect for smart home beginners and tech-savvy home or office owners.
                </li>
              </ul> */}

              <div className="max-sm:flex  max-sm:w-full max-sm:justify-center">
                <motion.a
                  href="/preorder"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="font-regular   gap-2 rounded-lg border border-[#FFFFFF99] bg-[#FFFFFF26] px-4 py-4 uppercase text-[#FFFFFF] max-sm:py-2 max-sm:text-sm "
                >
                  Pre-Order now
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section id="other-products" className="paddings  w-full bg-[#282828] max-sm:px-3 ">
        <div className="w-full     py-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF99] max-sm:text-sm">Preorder Deposit: 30% of the total cost..</p>
            <p className="custom-text first-word-color my-6 flex text-center text-5xl font-bold text-[#FFFFFF] max-md:text-2xl max-sm:text-2xl md:w-[924px] ">
              Preorder Now and Experience the Future of Smart Home Security!
            </p>

            <p className="text-[#FFFFFF99] max-sm:text-sm">
              How to Order: <span className="underline">Visit our website or contact our sales team.</span>
            </p>
            <p className="mt-3 text-[#FFFFFF99] max-sm:text-sm">
              {" "}
              Limited-Time Offer: <span className="underline">Exclusive benefits for early preorders!</span>
            </p>
          </div>
        </div>
      </section>

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
