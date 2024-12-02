"use client"
import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Page: React.FC = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <Suspense>
      <div className="flex h-screen w-full items-center justify-center bg-[#000000] max-md:bg-[#000000]">
        <motion.div
          className="flex justify-center rounded-3xl bg-[#151515] max-sm:w-[95%] max-sm:rounded-lg xl:max-w-[600px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center py-6 max-md:px-3 md:px-6">
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
                  Password reset link sent to your email <span className="text-white">({email})</span>, please check to
                  confirm thank you
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
    </Suspense>
  )
}

export default Page
