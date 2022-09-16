import { motion, AnimatePresence } from "framer-motion";
import React from "react";
const info = [
  "John Millington",
  "Catherine Marie",
  "Julie Hughes",
  "Lucy Callaghan",
  "Kyle Tuck",
];

const Body = [
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
];
const variants = {
  visible: {
    opacity: 1,
    x: 2,
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

export class Review extends React.Component {
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
      <div className="font-inter mb-5 max-w-2xl">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            className="animated-text w-full"
            initial="hidden"
            animate={this.state.isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
            key={current}
          >
            <div className="flex flex-col w-full h-full    ">
              <div className="md:text-l  text-base font-interr bg-blue-50 p-2 rounded-xl ">
                {Body[current]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
