import { motion, AnimatePresence } from "framer-motion";
import React from "react";
const info = [
  "Nick Eubank",
  "James Gregory",
  "James Brockbank",
  "Alex Chapman",
  "Suganthanmn",
];
const Role = [
  "Serial Entrepreneur",
  "Business growth specialist",
  "CEO - Digitaloft",
  "Founder & SEO Director",
  "Co-founder of @snippetconsult",
];
const Tagline = [
  "My go to content resource",
  "Level up your content game with MCP",
  "One of the best content agencies we've used...",
  "Craig is at the top of the content Game.",
  " If you’re looking to create content at scale, reach out to them.",
];

const Body = [
  "MCP has become my go to content resource when I need specialized content in competitive niches without paying crazy prices.",
  "I needed terrific content that aligns with my client's brand narrative and tone wand marketplace positioning. No other content provider understood that. But Craig did.",
  "The quality of the content is great, it need minimal edits from our in-house team and the account management is strong, always keeping us updated. ",
  "I’ve been using my content pal for about a year now and for good reason, they deliver. If you’re after quality content, at a good price, give MCP a go.",
  "Ive used @mycontentpal for a recent project, and I was super impressed with the quality of work and overall process. Thanks, @Craigd0412 for building the phenomenal service.",
];
const variants = {
  visible: {
    opacity: 1,
    x: 5,
    transition: {
      // duration: 1
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      // duration: 0
    },
  },
};

export class Example extends React.Component {
  state = { isVisible: true, current: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { current } = this.state;
      this.setState({ current: current === info.length - 1 ? 0 : current + 1 });
    }, 4000);
  }
  s;
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { current } = this.state;

    return (
      <div className="font-inter mb-5">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            className="animated-text w-full"
            initial="hidden"
            animate={this.state.isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
            key={current}
          >
            <div className="w-full h-full p-5 bg-white mb-5  shadow-sm rounded-2xl ">
              <div className="flex flex-col w-full h-full    ">
                <div className="flex w-full h-full mt-2  space-x-2">
                  <div className=" ">
                    <div className="  rounded-full bg-white  font-bold font-inter">
                      {info[current]}
                    </div>
                    <div className="font-interr xsm:block hidden py-1"> </div>
                    <img src="stars-5-1.svg" className=" w-24 h-6 mt-1 " />
                  </div>
                </div>
                <div className="flex flex-grow w-full h-full mt-3  font-inter">
                  <div className="w-full h-full  bg-white rounded-xl ">
                    <div className="flex mt-1 sm:block hidden">
                      <img
                        src="trustpilot-1 (1).svg"
                        className="rounded-full mr-3 w-24 h-6 sm:hidden"
                      />
                      <img
                        src="stars-5-1.svg"
                        className="sm:hidden mr-3 w-24 h-6 mt-1 "
                      />
                    </div>
                    <div className="flex justify-end"></div>
                    <div className="mx-auto px-8 py-2 lg:bg-gray-50 lg:rounded-xl">
                      <div className="lg:text-xl text-xl font-inter ">
                        {Tagline[current]} <br />
                        <br />
                      </div>
                      <div className="md:text-l sm:block hidden text-base font-interr ">
                        {Body[current]}
                      </div>
                      <div className="font-interr italic font-bold mb-1 lg:py-2">
                        {" "}
                        {Role[current]}
                      </div>
                      <div className="flex justify-start py-2 mb-4">
                        <img
                          src="trustpilot-1 (1).svg"
                          className="rounded-full mr-3 w-24 h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
