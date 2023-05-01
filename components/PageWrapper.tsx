import React, { ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";

type IProps = { children: any };

const PageWrapper = ({ children }: IProps) => {
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ opacity: 0, y: 0 }} //15
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 0}} //15
          transition={{duration: 0.5, delay: 0.2 }}
          className="page-wrapper"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
