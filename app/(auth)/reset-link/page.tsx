"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface LoginResponse {
  id: string
  token: string
}

const Page: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)
  const [showErrorNotification, setShowErrorNotification] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [showDropdown, setShowDropdown] = useState(false)

  const router = useRouter() // Initialize the router

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Redirect to dashboard after successful login
    router.push("/")
  }

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  //     setLoading(true)
  //     setError(null)

  //     try {
  //       const response = await fetch("https://vet.fyber.site/app_user/sign-in/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ username, password }),
  //       })

  //       if (!response.ok) {
  //         throw new Error("Failed to sign in. Please try again.")
  //       }

  //       // Use 'LoginResponse' type to ensure data contains 'id' and 'token'
  //       const data = (await response.json()) as LoginResponse

  //       // Save ID and token in localStorage
  //       localStorage.setItem("id", data.id)
  //       localStorage.setItem("userToken", data.token)

  //       // Log ID and token in the console
  //       console.log("User ID:", data.id)
  //       console.log("User Token:", data.token)

  //       setShowSuccessNotification(true)
  //       setLoading(false)

  //       // Redirect to dashboard after successful login
  //       router.push("/dashboard")
  //     } catch (error: any) {
  //       setError(error.message)
  //       setShowErrorNotification(true)
  //       setLoading(false)
  //     }
  //   }

  // UseEffect to automatically hide notifications after a timeout
  useEffect(() => {
    if (showSuccessNotification || showErrorNotification) {
      const timer = setTimeout(() => {
        setShowSuccessNotification(false)
        setShowErrorNotification(false)
      }, 5000) // Notifications will disappear after 5 seconds

      return () => clearTimeout(timer) // Clean up the timeout if component unmounts
    }
  }, [showSuccessNotification, showErrorNotification])

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#000000] max-md:bg-[#000000]">
        <motion.div
          className=" flex  justify-center rounded-3xl bg-[#151515] max-sm:w-[95%] max-sm:rounded-lg xl:max-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="flex w-full   flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center py-6 max-md:px-3  md:px-6 ">
              <p className="text-center text-lg text-[#FFFFFF99] max-sm:text-sm">RESET</p>
              <p className="text-center text-4xl text-[#FFFFFF] max-sm:text-[28px] md:my-5">forgot password</p>

              <Image
                src="/Vector1.png"
                width={40.63}
                height={40.63}
                alt="profile"
                className="self-center object-contain"
              />
              <div className="mt-5 flex w-full items-end justify-center rounded-md border border-[#FFFFFF1A] p-2">
                <p className="text-center text-sm text-[#FFFFFF80]">
                  Password reset link sent to your email <span className="text-white">(Shereefadamu001@gmail.com)</span>{" "}
                  , please check to confirm thank you
                </p>
              </div>
            </div>

            <div className="my-4 flex justify-center gap-1 px-6">
              <p className="text-xs text-[#4F4F4F]">Don&apos;t Have an Account Yet?</p>
              <Link href="/signup" className="text-xs text-[#FF3B30]">
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {showSuccessNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">Login Successfully</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {showErrorNotification && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </>
  )
}

export default Page
