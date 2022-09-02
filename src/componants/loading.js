import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Loading.module.scss";
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "0px",
  zIndex: 1000,
};

export default function Loading(props) {
  return (
    <motion.div
      className={props.loading ? styles.body_loading : styles.none}
      key={"my_unique_key"}
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
    >
      <div className="w-full h-full bg-logo-pink grid items-center">
        <div className="flex justify-center grid items-center ">
          <a href="/">
            <div className="pulse">
              <img src="/logo.svg" height={300} width={300} />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
