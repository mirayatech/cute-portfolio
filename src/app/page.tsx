"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {
  const ahoyRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Jelly effect for AHOY
    if (ahoyRef.current) {
      gsap.fromTo(
        ahoyRef.current.children,
        { scale: 0 },
        { scale: 1, duration: 1, ease: "elastic.out(1, 0.3)", stagger: 0.2 }
      );
    }

    // Fade in upwards for name
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, delay: 1.05 }
      );
    }

    // Fade in for about text
    if (aboutTextRef.current) {
      gsap.fromTo(
        aboutTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.3, delay: 1.5 }
      );
    }

    // Pop in for button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "back.out(1.9)", delay: 1.8 }
      );
    }

    // Fade in for links
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.2, delay: 2.2 }
      );
    }
  }, []);

  return (
    <div className="flex lg:flex-row flex-col justify-center items-startlg:items-center p-8 gap-8">
      <img
        src="/img.jpg"
        alt="background"
        className="lg:max-w-[450px] max-w-[300px] rounded-xl"
      />
      <div>
        {/* AHOY letters */}
        <div className="flex gap-1 mb-7 lg:mb-10" ref={ahoyRef}>
          <span className="flex items-center max-lg:text-sm text-base justify-center w-8 h-8 rounded font-extrabold bg-[#FFE76D] text-[#FF9226]">
            A
          </span>
          <span className="flex items-center max-lg:text-sm text-base justify-center w-8 h-8 rounded font-extrabold bg-[#CCE0FF] text-[#1E7AFC]">
            H
          </span>
          <span className="flex items-center max-lg:text-sm text-base justify-center w-8 h-8 rounded font-extrabold bg-[#BBF4DB] text-[#20A06B]">
            O
          </span>
          <span className="flex items-center max-lg:text-sm text-base justify-center w-8 h-8 rounded font-extrabold bg-[#FFD5D2] text-[#ff5245]">
            Y
          </span>
        </div>

        {/* Name introduction */}
        <p className="flex mb-5 text-indigo-800 max-lg:text-sm" ref={nameRef}>
          My name is &nbsp;
          <span className="whitespace-nowrap">
            <span className="text-[#FF57BE] font-semibold relative block text-start">
              <span className="relative z-50">Miraya Tech.</span>
              <svg
                width="110"
                height="22"
                aria-hidden="true"
                className="text-[#ffdef3] absolute top-[2px] left-[-5px]"
              >
                <path
                  d="M7 13C24 8 95 10 105 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="100"
                  strokeDashoffset="0"
                  pathLength="99"
                />
              </svg>
            </span>
          </span>
        </p>

        {/* About text */}
        <p
          className="max-w-[500px] max-lg:text-sm text-justify text-indigo-800 leading-relaxed mb-5 lg:mb-8"
          ref={aboutTextRef}
        >
          I'm a creative frontend developer and designer based in Germany
          &#x28;🇩🇪 DE&#x29;. My focus is on crafting engaging, accessible, and
          user-centric experiences. As a software engineer, I blend technical
          expertise with a strong design sense to create scalable, efficient,
          and visually appealing applications. My aim is to deliver
          pixel-perfect user experiences.
        </p>

        {/* Button */}
        <button
          className="transition-all duration-300 bg-[rgb(230,226,255)] hover:bg-[rgb(219,214,255)] text-[#4315fa] text-sm p-2  px-4 flex items-center gap-2 rounded mb-6 lg:mb-8 button"
          ref={buttonRef}
        >
          <span className="text-base">👋</span>
          Available for freelance work{" "}
        </button>

        {/* Links */}
        <div
          className="flex gap-4 text-indigo-800 max-md:text-sm"
          ref={linksRef}
        >
          <a href="/" className="transition-all hover:underline">
            Email
          </a>
          <a href="/" className="transition-all hover:underline">
            Instagram
          </a>
          <a href="/" className="transition-all hover:underline">
            Github
          </a>
          <a href="/" className="transition-all hover:underline">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
