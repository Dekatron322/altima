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

interface ErrorResponse {
  message?: string
}

const Page: React.FC = () => {
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [otpCode, setOtpCode] = useState<string | null>(null) // State for otpCode
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the router

  // Fetch otpCode from localStorage when the component mounts
  useEffect(() => {
    const storedOtpCode = localStorage.getItem("otp_code")
    if (storedOtpCode) {
      setOtpCode(storedOtpCode)
    } else {
      setError("OTP code not found. Please try the reset process again.")
    }
  }, [])

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === "password1") setPassword1(value)
    if (name === "password2") setPassword2(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password1 !== password2) {
      setError("Passwords do not match.")
      return
    }

    if (!otpCode) {
      setError("OTP code is missing.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://altima.fyber.site/custom-user/reset-password/${otpCode}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password1, password2 }),
      })

      if (!response.ok) {
        const data: ErrorResponse = (await response.json()) as ErrorResponse
        throw new Error(data.message || "Failed to reset password.")
      }

      setSuccessMessage("Password reset successfully!")
      setLoading(false)
      localStorage.removeItem("otp_code") // Clean up after successful reset
      router.push("/signin") // Redirect to sign-in after success
    } catch (err: any) {
      setError(err.message || "An error occurred.")
      setLoading(false)
    }
  }

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
        setError(null)
      }, 3000)

      return () => clearTimeout(timer) // Clean up
    }
  }, [successMessage, error])

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#000000] max-md:bg-[#000000]">
        <motion.div
          className=" flex  justify-center rounded-3xl bg-[#151515] max-xl:w-[70%] max-sm:w-[95%] max-sm:rounded-lg xl:min-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="w-full justify-center   ">
            <div className="w-full items-center py-6 max-md:px-3  md:px-6 ">
              <p className="text-center text-lg text-[#FFFFFF99] max-sm:text-sm">Password reset</p>
              <p className="text-center text-4xl text-[#FFFFFF] max-sm:text-[28px] md:my-5">Reset Password</p>
            </div>

            <div className="flex w-full justify-center ">
              <form onSubmit={handleSubmit}>
                <div className="search-bg mb-2 h-[54.37px]  items-center justify-between rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4 hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-xl:mb-3 max-xl:w-[430px] max-sm:w-[320px] xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="password"
                      name="password1"
                      placeholder="New Password"
                      value={password1}
                      onChange={handlePasswordChange}
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>
                <div className="search-bg mb-2 h-[54.37px] items-center justify-between rounded-lg border border-[#FFFFFF1A] bg-[#282828] px-3 py-4 hover:border-[#FF3B30] focus:border-[#FF3B30] focus:bg-[#FBFAFC] max-sm:mb-2 max-sm:w-[320px] xl:w-[536px]">
                  <div className="flex">
                    <input
                      type="password"
                      name="password2"
                      placeholder="Repeat Password"
                      value={password2}
                      onChange={handlePasswordChange}
                      className="h-[24px] w-full bg-transparent text-base text-white outline-none focus:outline-none"
                      style={{ width: "100%", height: "24px" }}
                    />
                  </div>
                </div>

                <div className="mt-5 flex w-full justify-center gap-6 md:px-6">
                  <button
                    type="submit"
                    className="flex w-[60%] items-center justify-center gap-2 rounded-lg  border bg-[#FFFFFF26]  px-4 py-4 font-normal uppercase text-[#FFFFFF] max-sm:w-full "
                  >
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </div>
              </form>
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

      {successMessage && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#000000] bg-[#92E3A9] text-[#000000] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#000000]">{successMessage}</span>
          <Image src="/AuthImages/Star2.svg" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
      {error && (
        <div className="animation-fade-in absolute bottom-16 m-5 flex h-[50px] w-[339px] transform items-center justify-center gap-2 rounded-md border border-[#D14343] bg-[#FEE5E5] text-[#D14343] shadow-[#05420514] md:right-16">
          <span className="clash-font text-sm text-[#D14343]">{error}</span>
          <Image src="/AuthImages/failed.png" width={28.26} height={28.26} alt="dekalo" />
        </div>
      )}
    </>
  )
}

export default Page
