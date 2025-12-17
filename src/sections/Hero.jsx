import React from "react";
import profileIMG from "../assets/Images/editedIMG.png";

function Hero() {
    return (
        <div
            id="home"
            className="min-h-screen px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16 bg-black text-white relative overflow-hidden">
            {/* Text Content */}
            <div className="z-10 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I’m{" "}
                    <span className="text-[#c4737c]">
                        Suryajith&nbsp;S
                    </span>
                </h1>

                <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400">
                    Frontend Developer · React · Tailwind CSS
                </h2>

                <p className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
                    I build modern, responsive, and user-friendly web applications
                    with a strong focus on clean UI, performance, and real-world usability.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-[#c4737c] rounded-xl text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(196,115,124,0.6)]">
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className=" px-6 py-3 rounded-xl border border-[#c4737c] text-sm sm:text-base font-medium transition-all duration-300 hover:bg-[#c4737c]/10 hover:shadow-[0_0_20px_rgba(196,115,124,0.4)] ">
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center z-10">
                <img
                    src={profileIMG}
                    alt="Suryajith profile"
                    className="w-60 sm:w-[300px] lg:w-[380px]object-containrounded-2xldrop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" />

                {/* Image Glow */}
                <div
                    className="absolute inset-0 blur-3xl rounded-full -z-10 " />
            </div>
        </div>
    );
}

export default Hero;
