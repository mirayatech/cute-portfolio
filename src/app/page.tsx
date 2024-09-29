import React from "react";

export default function Page() {
  return (
    <div className="p-8">
      <div className="flex gap-1 mb-6">
        <span className="flex items-center text-base justify-center w-9 h-9 rounded font-extrabold bg-[#FFE76D] text-[#FF9226]">
          A
        </span>
        <span className="flex items-center text-base justify-center w-9 h-9 rounded font-extrabold bg-[#CCE0FF] text-[#1E7AFC]">
          H
        </span>
        <span className="flex items-center text-base justify-center w-9 h-9 rounded font-extrabold  bg-[#BBF4DB] text-[#20A06B]">
          O
        </span>
        <span className="flex items-center text-base justify-center w-9 h-9 rounded font-extrabold bg-[#FFD5D2] text-[#ff5245]">
          Y
        </span>
      </div>

      <br />
      {/* Name introduction */}
      <p className="flex mb-6 text-indigo-800">
        My name is &nbsp;
        <span className="whitespace-nowrap">
          <span className=" text-[#FF57BE] font-semibold relative block text-start">
            <span className="relative z-50">Miraya Tech.</span>
            <svg
              width="110"
              height="22"
              aria-hidden="true"
              className="text-[#FDE7F5] absolute top-[2px] left-[-5px]"
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

      <p className="max-w-[500px] text-justify text-indigo-800 leading-relaxed mb-7">
        I'm a creative frontend developer and designer based in Germany &#x28;🇩🇪
        DE&#x29;. My focus is on crafting engaging, accessible, and user-centric
        experiences. As a software engineer, I blend technical expertise with a
        strong design sense to create scalable, efficient, and visually
        appealing applications. My aim is to deliver pixel-perfect user
        experiences.
      </p>

      <button className="bg-[rgb(230,226,255)] text-[#4315fa] text-sm p-2 px-6 flex gap-2 rounded-md mb-10">
        <span>👋</span> Say hello
      </button>

      <div className="flex gap-4 text-indigo-800">
        <a href="">Email</a>
        <a href="">Instagram</a>
        <a href="">Github</a>
        <a href="">YouTube</a>
        <a href="">Linkedin</a>
      </div>
    </div>
  );
}
