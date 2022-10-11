import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Container } from "../Container";

import screenshotExpenses from "../../../public/screenshots/expenses.png";

import screenshotReporting from "../../../public/screenshots/reporting.png";
import screenshotVatReturns from "../../../public/screenshots/vat-returns.png";

import D1 from "../../../public/1.jpeg";
import D2 from "../../../public/2.jpeg";
import D3 from "../../../public/3.jpeg";
import D4 from "../../../public/4.jpeg";

const features = [
  {
    title: "Domestic",
    description: "Description about Domestic electrical services we offer",
    image1: D1,
    image2: D2,
    image3: D3,

    image4: D4,
    items: "Full rewires",
    items: "Partial rewires",
    items: "Additional sockets",
    items: "Extra lights",
    items: "USB Sockets",
    items: "Landlord certificates (ECIR)",
    items: "Decorative lights",
    items: "Outside sockets ",
    test: ["test21", "test22"],
  },
  {
    title: "Commercial",
    description: "Description about Commercial electrical services we offer",
    image: screenshotExpenses,
    items: "New Sockets",
    items: "New lighting",
    items: "Maintenance",
    items: "3 Phase power",
    items: "Full tests for insurance purposes",
    items: "Maintenance",
    items: "Outside lighting",
    test: ["test241", "test224"],
  },
  {
    title: "Industrial",
    description: "Description about Industrial electrical services we offer",
    image: screenshotVatReturns,
    items: "full rewires",
    items: "full rewires",
    items: "full rewires",
    items: "full rewires",
    items: "full rewires",
    items: "full rewires",
    test: ["test241", "test224"],
  },
  {
    title: "Project planning",
    description: "Description about electrical planning services we offer",
    image: screenshotReporting,
    items: "Full rewires",
  },
];

[];

export function PrimaryFeatures() {
  const [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-10 pb-28 sm:py-32 lg:h-screen"
    >
      <div></div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            View the Electrical services we offer.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Our team of fully qualified NIC and EIC electrical engineers work in
            all electrical engineering capacitys, contact us, we&apos;d love to
            discuss how we can help you.
          </p>
          <div className="flex justify-center p-6 mt-4  bg-gray-50/20 rounded-xl">
            <Image src={"/IPAF.png"} width={150} height={75} />
            <Image src={"/Nic cert.svg"} width={150} height={75} />
          </div>
        </div>

        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-blue-600 lg:text-white"
                              : "text-blue-100 hover:text-white lg:text-white"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-white"
                            : "text-blue-100 group-hover:text-white"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <motion.div
                      className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{
                        opacity: 1,
                        x: 5,
                      }}
                    >
                      <div className="grid lg:grid-cols-2 ">
                        <div className=" p-6 mt-4  bg-gray-50/50 rounded-xl font-bold">
                          <li> {feature.test}</li>
                        </div>
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
