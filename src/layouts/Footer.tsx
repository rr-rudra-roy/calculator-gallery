import Image from "next/image"
import { useTheme } from "@/context/ThemeContext"
import { SOCIAL } from "@/data/social"
import { LATO_400 } from "@/lib/fonts"

export default function Footer() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <footer className="w-full lg:max-w-[1280px] py-8 lg:py-16 mt-36 px-4 lg:px-0 mx-auto flex justify-between items-center gap-2.5">
        <div className="flex justify-center items-center">
          <span
            className={`${LATO_400.className} text-sm lg:text-base text-gray-800 dark:text-gray-200`}
          >
            Copyright
          </span>
          <div className="mx-1 sm:mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-4 w-4 fill-gray-800 dark:fill-gray-200"
            >
              <path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
          <span
            className={`${LATO_400.className} text-sm lg:text-base text-gray-800 dark:text-gray-200`}
          >
            2024 Rudra Roy
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href={`${SOCIAL.githubProfile}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={theme === "light" ? "/logo/github-mark.svg" : "/logo/github-mark-white.svg"}
              alt="Github Icon"
              width={100}
              height={100}
              quality={100}
              className="h-6 w-6"
            />
          </a>
          <a href={`${SOCIAL.facebookProfile}`} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-7 w-7 fill-black dark:fill-white"
            >
              <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" />
            </svg>
          </a>
          <a href={`${SOCIAL.twitterProfile}`} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-7 w-7 fill-black dark:fill-white"
            >
              <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
