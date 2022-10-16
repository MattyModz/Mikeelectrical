import { useRouter } from "next/router";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import {
  BookmarkAltIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
  QuestionMarkCircleIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  // {
  //   name: "Packages",
  //   description: "Let us curate the perfect backlink profile for your Niche",
  //   href: "/link-building-packages",
  //   icon: CubeIcon,
  // },
  {
    name: "Services",
    description:
      "Quality guest postings, included 600+ word content and 1 Follow link.",
    href: "/guest-posts",
    icon: ChartBarIcon,
  },
  {
    name: "Contact Us",
    description: "Links posted directly into .",
    href: "/niche-edits",
    icon: CursorClickIcon,
  },
];

const resources = [
  {
    name: "About",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/about",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Contact",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/contact",
    icon: ChatIcon,
  },
  {
    name: "Blog",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/blog",
    icon: BookmarkAltIcon,
  },
];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Z_INDEX = {
  zIndex: 1000,
};

export default function Example() {
  const { asPath } = useRouter();

  return (
    <Popover className=" bg-gray-50  z-90" style={Z_INDEX}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image width={150} height={75} src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="  md:hidden">
            <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500  mt-2 mr-4">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group
            as="nav"
            className="hidden md:flex space-x-10 items-center "
          >
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white " : "text-white",
                      "group  inline-flex items-center hover:bg-black hover:bg-opacity-30 p-2 rounded-md px-4 font-medium  "
                    )}
                  >
                    <span>Packages</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div
                          className={`relative grid gap-6  bg-gray-100 border  px-5 py-6 sm:gap-8 sm:p-8 ${
                            asPath === "/guest-posts"
                              ? "border-blue-300"
                              : asPath === "/niche-edits"
                              ? "border-orange-500"
                              : "border-blue-600"
                          }`}
                        >
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className={` flex-shrink-0 h-6 w-6  ${
                                  asPath === "/guest-posts"
                                    ? "text-[#0468C8]"
                                    : asPath === "/niche-edits"
                                    ? "text-[#f6ad5a]"
                                    : " text-blue-600"
                                }`}
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="https://topsecret.link-city.co/"
              className={`p-8 text-white   test  text-center s:text-2xl lg:text-l  font-bold p-2 cursor-pointer   rounded-xl ${
                asPath === "/guest-posts"
                  ? "test2"
                  : asPath === "/niche-edits"
                  ? "test1"
                  : "border-2 border-pink-300"
              }`}
            >
              The Link Blueprint
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "group p-2 rounded-md inline-flex items-center text-base font-medium px-4 hover:bg-black hover:bg-opacity-30 rounded-md"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div
                          className={`relative grid gap-6 bg-white px-5 py-6 sm:gap-8 border sm:p-8 ${
                            asPath === "/guest-posts"
                              ? "border-blue-300"
                              : asPath === "/niche-edits"
                              ? "border-orange-500"
                              : "border-purple-300"
                          }`}
                        >
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className={`flex-shrink-0 h-6 w-6 ${
                                  asPath === "/guest-posts"
                                    ? "text-[#0468C8]"
                                    : asPath === "/niche-edits"
                                    ? "text-[#f6ad5a]"
                                    : " text-blue-600"
                                }`}
                                aria-hidden="true"
                              />

                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 sm:hidden">
            <a
              href="https://calendly.com/mcp-link-city-b2r/link-city-30-min-meeting?month=2022-05"
              className=" m:hidden whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white  hover:bg-black hover:bg-opacity-30 mr-2"
            >
              Strategy call
            </a>
            <a
              href="https://clients.link-city.co/"
              className={` text-white     text-center s:text-2xl lg:text-l  font-bold p-4 cursor-pointer test  rounded-xl ${
                asPath === "/guest-posts"
                  ? "test2"
                  : asPath === "/niche-edits"
                  ? "test1"
                  : "border-2 border-pink-300"
              }`}
            >
              Sign in
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute   top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
        >
          <div className="h-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 z-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <Image width={150} height={75} src="/logo.svg" alt="" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="align-center">
                  {solutions.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <a
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className={` flex-shrink-0 h-6 w-6 ${
                              asPath === "/guest-posts"
                                ? "text-[#0468C8]"
                                : asPath === "/niche-edits"
                                ? "text-[#f6ad5a]"
                                : " text-blue-600"
                            }`}
                            aria-hidden="true"
                          />
                          <Popover.Button>
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Popover.Button>
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 ">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base  font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="https://clients.link-city.co/signup/"
                  className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white   ${
                    asPath === "/guest-posts"
                      ? "bg-[#0468C8]"
                      : asPath === "/niche-edits"
                      ? "bg-[#f6ad5a] hover:bg-orange-300"
                      : " bg-blue-600"
                  }`}
                >
                  Contact on whatsapp
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Happy with our service?{" "}
                  <a
                    href="https://clients.link-city.co/login"
                    className={`  ${
                      asPath === "/guest-posts"
                        ? "text-[#0468C8]"
                        : asPath === "/niche-edits"
                        ? "text-[#f6ad5a]"
                        : " text-blue-600"
                    }`}
                  >
                    Leave a reviews
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
