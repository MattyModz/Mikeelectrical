import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [formStatus, setFormStatus] = useState(false);
  async function onSubmitForm(values) {
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

      if (response.status == 200) {
        setFormStatus(true);
      }
    } catch (err) {}
  }

  return (
    <div className="bg-body-dark h-full">
      <div className="text-6xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
        <h1 className="pb-5 text-white z-1  font-inter sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center">
          Contact Us
        </h1>
      </div>

      <section className=" place-items-center">
        <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
          <div className="">
            <div className="px-10 mx-auto max-w-7xl md:px-16">
              <div className="max-w-3xl mx-auto mb-10 md:mb-16"></div>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2"
                style={formStatus ? { display: "none" } : { display: "" }}
              >
                <div>
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

                <div className="flex items-center justify-between sm:col-span-2 mb-8">
                  <input
                    type="submit"
                    className=" inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none bg-orange-500 md:text-base"
                  />
                </div>
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
                <div className="text-red-500">Thankyou</div>
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
