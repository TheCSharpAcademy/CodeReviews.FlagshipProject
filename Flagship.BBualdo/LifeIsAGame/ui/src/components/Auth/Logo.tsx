"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Logo = ({ arbitaryClasses }: { arbitaryClasses: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex ${arbitaryClasses} text-2xl text-white`}
    >
      <div>
        <span aria-hidden className="text-cp-red">
          L
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1000, "ife"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-red">
          I
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[1500, "s"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
      <div>
        <span aria-hidden className="text-cp-red">
          A
        </span>
      </div>
      <div>
        <span aria-hidden className="text-cp-red">
          G
        </span>
        <TypeAnimation
          aria-hidden
          sequence={[2000, "ame"]}
          style={{
            whiteSpace: "pre-line",
          }}
          cursor={false}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
