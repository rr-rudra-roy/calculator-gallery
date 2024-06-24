"use client"
import Image from "next/image"
import { SOCIAL } from "@/data/social"

export default function Header() {
  return (
    <>
      <header className="w-full py-4 md:py-8 lg:py-12 px-8 sm:px-10 md:px-24 lg:px-32 flex justify-between items-center">
        <div className="h-max w-max">
          <a
            href="/"
            className="group inline-block p-1.5 md:p-2.5 rounded-full bg-transparent border-2 border-gray-800 hover:bg-gray-800 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#e8eaed"
              className="w-6 h-6 md:w-8 md:h-8 aspect-auto fill-gray-800 group-hover:fill-gray-200 transition-all duration-300"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </a>
        </div>
        <div className="h-max w-max">
          <a
            href={`${SOCIAL.buyMeACoffee}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/logo/bmc-logo.svg"}
              alt="Buy Me coffee Logo"
              height={100}
              width={100}
              quality={100}
              className="h-7 w-7 md:w-8 md:h-8 lg:w-9 lg:h-9 aspect-auto"
            />
          </a>
        </div>
      </header>
    </>
  )
}
