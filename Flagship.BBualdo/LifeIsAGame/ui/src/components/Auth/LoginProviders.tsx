"use client";

import { motion } from "framer-motion";

const LoginProviders = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="relative my-8 flex w-3/4 items-center justify-between border border-cp-cyan px-8 py-6"
    >
      <div className="absolute -top-[10px] left-0 z-10 flex w-full items-center justify-center text-sm uppercase text-cp-cyan">
        <span aria-hidden className="backdrop-blur-sm">
          Log in using
        </span>
      </div>
      {/* Google */}
      <motion.button
        aria-label="Login with Google"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1 }}
        className="flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="fill-cp-cyan hover:fill-cp-red"
        >
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
      </motion.button>

      {/* GitHub */}
      <motion.button
        aria-label="Login with GitHub"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1.5 }}
        className="flex items-center justify-center"
      >
        {" "}
        <svg
          height="24px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="24px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="fill-cp-cyan hover:fill-cp-red"
        >
          <g>
            <path
              clipRule="evenodd"
              d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </motion.button>

      {/* Facebook */}
      <motion.button
        aria-label="Login with Facebook"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 2 }}
        className="flex items-center justify-center"
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 40 40"
          xmlSpace="preserve"
          width="24px"
          className="fill-cp-cyan hover:fill-cp-red"
        >
          <path
            className="st0"
            d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
          />
          <path
            className="st1"
            d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20
	h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"
            fill="black"
          />
        </svg>
      </motion.button>
      <div className="absolute -bottom-[10px] left-0 z-10 flex w-full items-center justify-center text-sm uppercase text-cp-cyan">
        <span aria-hidden className="backdrop-blur-sm">
          or
        </span>
      </div>
    </motion.div>
  );
};

export default LoginProviders;
