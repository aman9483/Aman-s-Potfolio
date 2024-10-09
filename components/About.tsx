import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiCopy } from "react-icons/fi"; // Added icons from React Icons
import profilePic from "public/extraImages/profilePic.jpg";

type Props = {};

export default function About({}: Props) {
  const [copied, setCopied] = useState(false);

  // Copy Gmail function
  const handleCopyGmail = () => {
    navigator.clipboard.writeText("amankumarverma251@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Show copied message for 2 seconds
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row h-screen text-center md:text-left max-w-7xl px-8 lg:px-12 mx-auto items-center justify-center space-y-12 md:space-y-0 md:space-x-8 relative"
    >
      {/* Section Title */}
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[18px] text-gray-400 text-2xl">
        About
      </h3>

      {/* Profile Image */}
      <motion.div
        className="flex-shrink-0 border-4 border-gray-300 dark:border-gray-600 shadow-lg"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={profilePic}
          alt="Aman Verma Profile"
          width={300}
          height={300}
          className="object-cover w-[280px] h-[280px] md:w-[350px] md:h-[350px]"
          placeholder="blur"
          priority
        />
      </motion.div>

      {/* About Content */}
      <div className="flex flex-col items-center md:items-start text-gray-700 dark:text-gray-300 px-4 md:px-6 lg:px-8">
        <h4 className="text-4xl font-bold mt-4 md:mt-0 text-blue-500">
          AMAN VERMA
        </h4>

        {/* Tagline / Status */}
        <div className="flex items-center mt-4 mb-4 bg-blue-100 dark:bg-blue-600/30 text-blue-600 dark:text-blue-300 rounded-full px-4 py-1 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-500 animate-pulse"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-sm font-medium">Open to opportunities</p>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed max-w-2xl font-light text-justify">
          Welcome to my digital abode! I am a{" "}
          <span className="font-semibold text-blue-500">
            full stack developer
          </span>{" "}
          with a passion for building scalable and user-friendly web
          applications. I love to create elegant solutions to complex problems.
          I believe in achieving a perfect blend of UI architecture, where goals
          and needs are elegantly, efficiently, and robustly designed.
          Experienced in ReactJS, React Native, NextJS, and state management
          like Redux, with proficiency in web technologies such as HTML5, CSS3,
          JavaScript, Node.js, Express.js, and MongoDB. Skilled in building
          large-scale web applications, ensuring compatibility across various
          browsers and adhering to design constraints on the web. Also adept at
          creating responsive user interfaces.
        </p>

        {/* Location */}
        <p className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium flex items-center">
          <span role="img" aria-label="India Flag" className="mr-2">
            🇮🇳
          </span>
          Patna, Bihar, India
        </p>

        {/* Social Links and Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6 gap-6">
          {/* Gmail Section */}
          <div
            onClick={handleCopyGmail}
            className="flex items-center bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform"
          >
            <FiMail className="w-5 h-5 mr-2" />
            <span>Copy Gmail</span>
            <FiCopy className="ml-2 w-4 h-4" />
            {copied && (
              <span className="ml-4 text-sm bg-green-400 text-white px-2 py-1 rounded-md">
                Copied!
              </span>
            )}
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aman-verma-3014a9226/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            <FiLinkedin className="w-5 h-5 mr-2" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
