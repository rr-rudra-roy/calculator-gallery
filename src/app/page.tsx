import Image from "next/image"
import Link from "next/link"
import { LATO_400, spaceGrotesk } from "@/lib/fonts"
import { SOCIAL } from "@/data/social"

export default function Home() {
  return (
    <main
      className={` ${spaceGrotesk.className} relative h-full w-full bg-darkJungleGreen`}
    >
      <header className="w-full py-4 md:py-8 lg:py-12 px-8 sm:px-12 md:px-24 lg:px-32">
        <a href="/">
          <Image
            src={"/favicons/logo.svg"}
            alt="Calculator Gallery Logo"
            width={100}
            height={100}
            quality={100}
            priority
            className="w-8 h-8 md:w-12 md:h-12"
          />
        </a>
      </header>
      <section className="w-full py-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-nowrap whitespace-nowrap text-white">
          Calculator Gallery
        </h1>
        <div className="my-4 md:my-6 lg:my-8 px-4">
          <h2 className="my-2 max-w-[40rem] w-full text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center text-gray-200">
            Navigate through a gallery of interactive React calculators.
            Find tools designed to simplify your mathematical tasks.
          </h2>
        </div>
        <div className="my-4 md:my-8 lg:my-12 flex gap-4">
          <a
            href={`${SOCIAL.githubProject}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 lg:px-10 py-2 rounded transition-all bg-oceanBlue hover:bg-cosmicCobalt"
          >
            <span className="font-medium text-sm md:text-base lg:text-lg text-gray-200">
              Project
            </span>
          </a>
          <a
            href={`${SOCIAL.githubSponsor}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-2 md:px-4 lg:px-6 py-2 flex justify-center items-center gap-2 rounded transition-all duration-300 border border-gray-50 bg-transparent hover:bg-gray-50"
          >
            <div className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                className="w-4 h-4 lg:w-6 lg:h-6 fill-gray-100 group-hover:hidden"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                className="hidden w-4 h-4 lg:w-6 lg:h-6 fill-oceanBlue group-hover:block"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
              </svg>
            </div>
            <span className="font-medium text-sm md:text-base lg:text-lg text-gray-200 group-hover:text-oceanBlue">
              Sponsor
            </span>
          </a>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-24">
        <div className="w-full text-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-gray-200">
            CALCULATORS
          </h1>
        </div>
        <div className="w-full mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          <div className="w-full lg:max-w-[1280px] mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
            <Link
              href={"/calculators/basic"}
              className="flex-grow w-full py-8 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 bg-gray-800 hover:scale-105 hover:bg-gray-700"
            >
              <Image
                src={"/calculator/basic-calculator.svg"}
                alt="Basic Calculator"
                height={100}
                width={100}
                quality={100}
                priority
                className="aspect-auto scale-75 md:scale-90 lg:scale-100"
              />
              <h2 className="mt-4 text-base lg:text-lg font-bold text-slate-300 cursor-default">
                BASIC CALCULATOR
              </h2>
            </Link>
            <Link
              href={"/calculators/scientific"}
              className="flex-grow w-full py-8 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 bg-gray-800 hover:scale-105 hover:bg-gray-700"
            >
              <Image
                src={"/calculator/scientific-calculator.svg"}
                alt="Scientific Calculator"
                height={100}
                width={100}
                quality={100}
                priority
                className="aspect-auto scale-75 md:scale-90 lg:scale-100"
              />
              <h2 className="mt-4 text-base lg:text-lg font-bold text-slate-300 cursor-default">
                SCIENTIFIC CALCULATOR
              </h2>
            </Link>
            <Link
              href={"/calculators/matrix"}
              className="flex-grow w-full py-8 flex flex-col justify-center items-center gap-2.5 transition-all duration-300 bg-gray-800 hover:scale-105 hover:bg-gray-700"
            >
              <Image
                src={"/calculator/matrix-calculator.svg"}
                alt="Matrix Calculator"
                height={100}
                width={100}
                quality={100}
                priority
                className="aspect-auto scale-75 md:scale-90 lg:scale-100"
              />
              <h2 className="mt-4 text-base lg:text-lg font-bold text-slate-300 cursor-default">
                MATRIX CALCULATOR
              </h2>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row">
        <a
          href={`${SOCIAL.buyMeACoffee}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full py-12 md:py-20 lg:py-28 flex justify-center items-center gap-2.5 bg-gray-700"
        >
          <span className="text-sm sm:text-base md:text-lg font-bold text-gray-400">
            Want to Support?
          </span>
          <div className=" px-6 tablet-sm:px-12 py-4 rounded-xl bg-goldenYellow hover:bg-safetyYellow group-hover:bg-safetyYellow transition-all duration-300">
            <Image
              src={"/logo/bmc-full-logo.svg"}
              alt="Buy Me Coffee Button Svg Icon"
              width={100}
              height={100}
              quality={100}
              priority
              className="w-36 md:w-40 lg:w-44 aspect-auto"
            />
          </div>
        </a>
        <a
          href={`${SOCIAL.githubProfile}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full py-20 md:py-28 lg:py-36 flex justify-center items-center gap-2.5 bg-gray-800"
        >
          <div className="flex justify-center items-center">
            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-400 group-hover:text-gray-300 transition-all duration-300">
              Made with
            </span>
            <Image
              src={"/icons/favorite.svg"}
              alt="Favorite Icon"
              width={100}
              height={100}
              quality={100}
              priority
              className="h-4 w-4 mx-2"
            />
            <span className="text-sm sm:text-base md:text-lg font-bold text-gray-400 group-hover:text-gray-300 transition-all duration-300">
              by Rudra Roy
            </span>
          </div>
          <Image
            src={"/logo/github-mark-white.svg"}
            alt="Github Svg Icon"
            width={100}
            height={100}
            quality={100}
            priority
            className="h-6 w-6 aspect-auto"
          />
        </a>
      </section>
      <footer className="w-full lg:max-w-[1280px] py-8 lg:py-16 px-4 lg:px-0 mx-auto flex justify-between items-center gap-2.5">
        <div className="flex justify-center items-center">
          <span
            className={`${LATO_400.className} text-sm lg:text-base text-gray-300`}
          >
            Copyright
          </span>
          <div className="mx-1 sm:mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-4 w-4 fill-gray-300"
            >
              <path d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
          <span
            className={`${LATO_400.className} text-sm lg:text-base text-gray-300`}
          >
            2024 Rudra Roy
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href={`${SOCIAL.githubProfile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/logo/github-mark-white.svg"}
              alt="Github Icon"
              width={100}
              height={100}
              quality={100}
              className="h-6 w-6"
            />
          </a>
          <a
            href={`${SOCIAL.facebookProfile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-7 w-7 fill-white"
            >
              <path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" />
            </svg>
          </a>
          <a
            href={`${SOCIAL.twitterProfile}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-7 w-7 fill-white"
            >
              <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  )
}
