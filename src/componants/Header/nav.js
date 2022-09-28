import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <header className="relative py-4 md:py-6 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0 mt-5">
              <Link
                href="/"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image width={200} height={100} src="/logo.svg" alt="" />
              </Link>
            </div>

            {/* <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div> */}

            <div className=" hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <a
                href="#"
                title=""
                className="text-sxl font-bold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Contact{" "}
              </a>
            </div>
            <div>
              {" "}
              <div className="flex justify-center p-6 mt-4  bg-gray-50/20 rounded-xl">
                <Image src={"/IPAF.png"} width={150} height={75} />
                <Image src={"/Nic cert.svg"} width={150} height={75} />
                <Image src={"/logoicon.svg"} width={80} height={75} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
