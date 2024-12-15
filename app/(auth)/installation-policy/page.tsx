"use client"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"
import Accordion from "components/Accordion/Accordion"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"

export default function Web() {


  const faqData = [
    {
      title: "1. Overview",
      content: (
        <div>
          <p>
          The proper installation of Altima Core and Altima Elite products (&quot;Product&quot;) is crucial to ensure optimal performance and functionality. This Installation Guide & Policy outlines the installation options, recommendations, and terms to assist buyers (&quot;Customers&quot;) with setting up their Altima product.
          </p>
        </div>
      ),
    },
    {
      title: "2. Installation Options",
      content: (
        <div>
          
          <ul className="grid gap-3">
            <p className="font-bold my-3">2.1 Professional Installation (Recommended)
            </p>
            <li><strong>◾ Certified Installers:</strong>  We highly recommend using one of our certified installers to ensure your Altima product is set up correctly and integrated seamlessly with your existing home systems.</li>
            <li><strong>◾ Benefits:</strong></li>
            <li className="px-2"><strong>▪️ Expert Setup:</strong> Proper installation of the smart lock mechanism and any integration with smart home systems.</li>
            <li className="px-2"><strong>▪️ Warranty Protection:</strong> Ensures your Warranty remains valid and reduces the risk of damage or malfunctions.</li>
            <li><strong>◾ Cost:</strong>  Installation fees vary by location and will be communicated at the time of booking.
            </li>
          </ul>
          
          <ul className="mt-4 grid gap-3">
            <p className="font-bold">2.2 Self-Installation</p>
            <p>For tech-savvy customers, we provide a detailed self-installation guide and support.</p>
            <li><strong>Requirements:</strong> Basic tools, a stable Wi-Fi connection (for Altima Elite), and adherence to safety precautions outlined in the guide.</li>
            <li><strong>Warranty Note:</strong> Incorrect self-installation may void certain Warranty provisions.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Installation Process",
      content: (
        <div>
          
          <ul className="grid gap-3">
            <p className="font-bold my-3">3.1 Preparation Steps
            </p>
            <li><strong>1. Unpack the Product:</strong> Carefully unpack all components and ensure you have all items listed in the included inventory sheet.
            </li>
            <li className="px-2"><strong>2. Read the Manual:</strong> Review the user manual thoroughly to familiarize yourself with the components and installation steps.
            </li>
            <li className="px-2"><strong>3. Check Requirements:</strong> Ensure the door frame and surrounding structure are compatible with the Product's specifications.
            </li>
          </ul>
          
          
          <ul className="mt-4 grid gap-3">
            <p className="font-bold">3.2 Installation Steps for Altima Core</p>
            
            <li><strong>1. Mounting the Metal Door:</strong> Follow the instructions for securely mounting the door to the frame.
            </li>
            <li><strong>2. Smart Lock Installation:</strong>  Align the lock mechanism and attach it to the door as per the guide.</li>
            <li><strong>3. Testing:</strong>   Test the lock to ensure it operates smoothly, and check for proper alignment.</li>
          </ul>
          <ul className="mt-4 grid gap-3">
            <p className="font-bold">3.3 Installation Steps for Altima Elite</p>
            
            <li><strong>1. Follow Core Steps:</strong> Complete the steps listed for Altima Core.
            </li>
            <li><strong>2. Smart Home Integration:</strong> Connect the Altima Elite to your home Wi-Fi network and integrate it with your smart home system (e.g., Alexa or Google Assistant).
            </li>
            <li><strong>3. Software Setup:</strong> Use the Altima mobile app to customize settings and enable features such as voice control and energy management.
            </li>
            <li><strong>4. Final Testing:</strong> Conduct a full functionality test, including biometric lock access, remote control, and smart home features.
            </li>
          </ul>
        </div>
      ),    
    },
    {
      title: "4. Installation Policy",
      content: (
        <div>
          
          <ul className="grid gap-3">
            <p className="font-bold my-3">4.1 Booking a Professional Installer
            </p>
            <li>◾ To schedule a professional installation, contact our support team or book through our website. A certified technician will be assigned to you based on your location.
            </li>
            <li className="px-2"><strong>◾ Rescheduling & Cancellation:</strong>  Notify us at least 24 hours in advance to reschedule or cancel your installation appointment.
            </li>
            
          </ul>
          
          
          <ul className="mt-4 grid gap-3">
            <p className="font-bold">4.2 Self-Installation Support</p>
            
            <li><strong>◾ Support Channels:</strong>  Access our support team via email at [support@smarthavensystems.com] or call +91-XXXX-XXXXXX for guidance.
            </li>
            <li><strong>◾ Video Tutorials:</strong> Visit our website for step-by-step video tutorials that simplify the installation process.
            </li>
            
          </ul>
          
        </div>
      ), 
     },
    {
      title: "5. Important Notes",
      content: (
        <div>
          
          <ul className="grid gap-3">
            <p className="font-bold my-3">4.1 Booking a Professional Installer
            </p>
            <li><strong>◾ Warranty Impact:</strong> Improper installation, particularly for self-installed products, may void specific Warranty coverage. We strongly advise using professional installation services to maintain Warranty protection.
            </li>
            <li className="px-2"><strong>◾ Safety Precautions:</strong> Always use appropriate tools and follow safety measures when installing the Product. Avoid modifying or altering the components.
            </li> 
            <li className="px-2"><strong>◾Compatibility Check:</strong>  Ensure your door frame and home automation system (for Altima Elite) are compatible before starting the installation.
            </li>
          </ul>
        </div>
      ), 
    },
    {
      title: "6. Customer Support",
      content: (
        <div>
          
          <ul className="">
            
            <p className="mb-3">Our team is here to assist you with any installation-related questions or issues. For assistance, please contact:
            </p>
            <li><strong>Email:</strong> warranty@smarthavensystems.com</li>
            <li className="my-3"><strong>Phone:</strong> 022-6971-8365</li>
            <li><strong>Hours of Operation:</strong> Monday to Friday, 9:00 AM to 6:00 PM (Local Time)</li>
          </ul>
           
        </div>
      ),
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
          <div className="flex w-full items-center justify-center  gap-10 sm:flex">
            <div>
              <p className="font-regular   text-center  text-2xl  text-[#FFFFFF99] max-sm:text-sm lg:text-2xl">
                Resources & Policies
              </p>
              <p className=" font-regular my-3  text-center text-lg text-white  max-sm:my-3 md:text-xl md:leading-10 xl:text-3xl">
                Installation Policy
              </p>

              <div className="mt-4 flex w-full items-center justify-center gap-5 max-sm:gap-2 ">
                <motion.a
                  href="/Altima Installation Guide & Policy.pdf"
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
                    const fileUrl = "/Altima Installation Guide & Policy.pdf" // Replace with the actual path
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

              <p className="font-regular my-6 w-full text-ellipsis text-sm text-[#FFFFFF99] max-sm:leading-7  md:text-center">
                Smart Haven Systems Private Limited <br />
                Effective Date: [Date]
              </p>
            </div>
          </div>
          <div className="  w-full pt-3">
            <div className="flex flex-col"></div>

            <div className=" w-full rounded-md border border-[#FFFFFF1A] ">
              {faqData.map((faq, index) => (
                <Accordion key={index} title={faq.title} content={faq.content} defaultOpen={index === 0} />
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-[#FFFFFF99]">
              Smart Haven Systems is committed to providing you with the best experience and ensuring your Altima
              <br className="max-sm:hidden" />
              product is installed safely and efficiently.
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
