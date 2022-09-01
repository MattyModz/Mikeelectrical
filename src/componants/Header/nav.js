import Image from "next/image";

export default function Nav() {
  return (
    <>
      <header class="relative py-4 md:py-6">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="flex-shrink-0">
              <a
                href="#"
                title=""
                class="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <Image width={200} height={100} src="/logo.svg" alt="" />
              </a>
            </div>

            <div class="flex lg:hidden">
              <button type="button" class="text-gray-900">
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <a
                href="#"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Experts{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Community Groups{" "}
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Support{" "}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
