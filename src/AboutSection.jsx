import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import PaulImg from "./Img/Paul.JPG";

import { FaRobot, FaBrain, FaUserGraduate, FaMobileAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSecurity, MdShowChart } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";

export default function AboutSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false });

  return (
    <section id="about" className="relative w-full py-22 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        {/* Grid for About The Robot */}
        <div className="grid md:grid-cols gap-10 mb-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent
                 before:from-blue-600 before:to-green-600">
              About The Smart Earner Bot
            </h2>
            <p className="text-lg text-[rgb(2,0,47)]">The Smart Earner Robot is an AI powered trading solution designed to simplify Forex and commodity trading. Built on a tested zone-based strategy and optimized for cent accounts, it helps traders grow steadily with less stress and proper risk management. Whether you're a beginner with no trading knowledge or a busy professional, the robot takes care of trade execution while you focus on simple account management. No hype just smart, steady growth powered by AI.</p>
          </motion.div>

        
         
        </div>

 <motion.div
            initial={{ x: 150, opacity: 0  }}
            whileInView={{ x: 0, opacity: 1  }}
            transition={{ duration: 1.2 }}>
           <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            🔑 Advantages of the Smart Earner Robot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaRobot className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                AI-Powered Trading
              </h3>
              <p className="text-gray-700 mt-2">
                Uses artificial intelligence to analyze market zones and execute trades with precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <MdOutlineSecurity className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Stress-Free Trading
              </h3>
              <p className="text-gray-700 mt-2">
                No need for long hours on charts or complex strategies — the robot does the heavy lifting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <MdShowChart className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Steady Growth, Not Hype
              </h3>
              <p className="text-gray-700 mt-2">
                Focused on risk management and consistent account growth, avoiding reckless trading.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaUserGraduate className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Beginner-Friendly
              </h3>
              <p className="text-gray-700 mt-2">
                Perfect for people with little or no trading knowledge — just plug in and manage basics like SL/TP.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <GiTakeMyMoney className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Optimized for Cent Accounts
              </h3>
              <p className="text-gray-700 mt-2">
                Allows traders to start small, grow steadily, and scale up over time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaMobileAlt className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Works on Any Device
              </h3>
              <p className="text-gray-700 mt-2">
                Easy to monitor and manage from phones (iPhone/Android) or laptops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaClock className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Saves Time
              </h3>
              <p className="text-gray-700 mt-2">
                You don’t have to watch the market all day — the robot trades automatically while you focus on other things.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <RiEmotionHappyLine className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Emotion-Free Trading
              </h3>
              <p className="text-gray-700 mt-2">
                Eliminates fear, greed, and overthinking — trades are executed purely on data and rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaCheckCircle className="text-4xl mb-3 text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Proven Results
              </h3>
              <p className="text-gray-700 mt-2">
                Built on a tested zone-based strategy with performance records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <FaBrain className="text-4xl mb-3  text-blue-600" />
              <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Scalable & Flexible
              </h3>
              <p className="text-gray-700 mt-2">
                Whether youre a beginner or an advanced trader, you can adjust settings and grow your account at your own pace.
              </p>
            </div>
          </div>
        </div>
        </motion.div>

        
        {/* Grid for Paul Martins */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.img
  src={PaulImg}
  alt="Paul Martins"
  className="w-80 h-auto rounded-2xl shadow-xl object-cover"
  animate={{ y: [0, -15, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>


          {/* Text */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2
              ref={headingRef}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text  text-transparent
                 before:from-blue-600 before:to-green-600"
            >
              {isInView ? (
                <Typewriter
                  options={{
                    strings: ["Meet Paul Martins"],
                    autoStart: true,
                    loop: false, // don’t repeat endlessly
                    delay: 50, // faster typing
                    deleteSpeed: 9999, // keep text after typing
                  }}
                />
              ) : (
                "" // clear when out of view so it replays when back
              )}
            </h2>
            <p className="text-lg text-[rgb(11,9,56)]  leading-relaxed">
              Paul is an experienced <span>Portfolio Manager</span> with
              over <span>7 years of expertise</span> in CFD trading and
              financial markets. He has managed diverse portfolios and delivered
              consistent growth for clients worldwide.
            </p>
            <div className="list-disc pl-5 text-gray-700 space-y-3">
              <p className="text-[rgb(11,9,56)] border-b-2">
                <span className="text-lg">AI + Trading Expertise</span> - Pioneer in merging AI
                with portfolio management.
              </p>
              <p className="text-[rgb(11,9,56)] border-b-2">
                <span  className="text-lg">Certified Professional</span> - ISO 9001:2002, Peer
                Educator Trainer, and INT member.
              </p>
              <p className="text-[rgb(11,9,56)] border-b-2">
                <span  className="text-lg">Future-Focused</span> - Advancing toward PMP
                certification.
              </p>
              <p className="text-[rgb(11,9,56)] border-b-2">
                <span  className="text-lg">Leadership</span> - Simplifies complex concepts and
                builds lasting client trust.
              </p>
            </div >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
