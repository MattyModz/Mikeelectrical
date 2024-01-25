import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import Submit from "./submit";
// import { Button } from "../ui/Button,js";
import { toast } from "react-hot-toast";
// import Image from "next/image";
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (values, event) => {
    event.preventDefault();
    setLoading(true);

    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);

      if (response.status === 200) {
        setFormStatus(true);
        toast.success("Message Sent Successfully");
      } else {
        // Handle other status codes if needed
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      // Handle request error
      console.error("Error during API request:", error.message);
      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8">
      {/* <button onClick={notify}>onclick</button> */}
      <motion.section
        className="w-full  bg-white "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <div className="relative px-4 container ">
          <div className="relative  items-center   p-6 overflow-hidden shadow-2xl   bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl  ">
            <div className="absolute top-0 right-0">
              <svg
                viewBox="0 0 487 487"
                className="object-cover w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  fill="#FFF"
                  fillRule="nonzero"
                  fillOpacity=".1"
                ></path>
              </svg>
            </div>
            <h1 className="text-white font-bold  text-center lg:text-6xl text-5xl">
              Get in touch
            </h1>

            <section className=" py-8">
              <div className="">
                <form
                  onSubmit={handleSubmit(onSubmitForm)}
                  className="grid max-w-3xl gap-4 mx-auto "
                  style={formStatus ? { display: "none" } : { display: "" }}
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                    ></label>
                    <input
                      {...register("fullName", { required: true })}
                      placeholder="Name"
                      className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="Email"
                      className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                    ></label>
                    <input
                      placeholder="Email"
                      {...register("SenderEmail", { required: true })}
                      className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                    ></label>
                    <textarea
                      placeholder="How can we help you"
                      {...register("Message", { required: true })}
                      className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                    ></textarea>
                  </div>

                  {/* <Button
                    type="submit"
                    className="sm:col-span-2 inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none bg-blue-400 md:text-base"
                  >
                    Submit
                  </Button> */}
                  <button
                    type="submit"
                    className={`relative flex items-center justify-center sm:col-span-2 inline-flex px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none bg-blue-400 md:text-base ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading && (
                      <span className="mr-2">
                        <div className="spinner"></div>
                      </span>
                    )}
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
              <div style={formStatus ? { display: "" } : { display: "none" }}>
                <motion.h2
                  className="text-white text-5xl font-bold flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55 },
                  }}
                  viewport={{ once: true }}
                >
                  <Submit />
                </motion.h2>
              </div>
            </section>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
