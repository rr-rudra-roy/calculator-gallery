"use client"
import Image from "next/image"
import { useTheme } from "@/context/ThemeContext"
import { SOCIAL } from "@/data/social"

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="w-full py-4 md:py-8 lg:py-12 px-8 sm:px-10 md:px-24 lg:px-32 flex justify-between items-center">
        <div className="h-max w-max">
          <a
            href="/"
            className="group inline-block p-1.5 md:p-2.5 rounded-full bg-transparent border-2 border-gray-800 hover:bg-gray-800 dark:border-gray-200 dark:hover:bg-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#e8eaed"
              className="w-6 h-6 md:w-8 md:h-8 aspect-auto fill-gray-800 dark:fill-gray-200 group-hover:fill-gray-200 dark:group-hover:fill-gray-800 transition-all duration-300"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </a>
        </div>
        <div className="h-max w-max flex gap-4 lg:gap-8">
          <button type="button" onClick={toggleTheme}>
            <span className="sr-only">Toogle theme</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 aspect-auto ${
                theme === "light" ? "block" : "hidden"
              } fill-gray-900`}
            >
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              className={`h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 aspect-auto ${
                theme === "light" ? "hidden" : "block"
              } fill-gray-100`}
            >
              <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
            </svg>
          </button>
          <a
            href={`${SOCIAL.buyMeACoffee}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-4 rounded-full dark:bg-white"
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
