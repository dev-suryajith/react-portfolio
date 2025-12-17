import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaGit, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";

function Contact() {
    return (
        <section id="contact" className="relative py-28 px-6 md:px-20 bg-black/0 text-white overflow-hidden">

            {/* Background Glow */}
            <div className="pointer-events-none absolute scale-80 inset-0 flex justify-center">
                <div className="w-[500px] h-[500px] bg-[#c4737c]/25 rounded-full blur-[140px] top-40 relative"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Let’s <span className="text-[#c4737c]">Connect</span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-14 text-lg leading-relaxed">
                    I’m currently open to frontend developer roles, internships, and freelance opportunities.
                    Feel free to reach out — I’d love to connect.
                </p>

                {/* Contact Cards */}
                <div className="w-full max-w-md flex flex-col gap-6">
                    <a href="mailto:suryajithss2608@gmail.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(196,115,124,0.45)]">
                        <span className="text-2xl"><AiTwotoneMail /></span>
                        <span className="text-gray-300 text-base group-hover:text-white transition-colors">
                            suryajithss2608@gmail.com
                        </span>
                    </a>

                    <a href="www.linkedin.com/in/suryajith-ss" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(196,115,124,0.45)]">
                        <span className="text-2xl"><FaLinkedin /></span>
                        <span className="text-gray-300 text-base group-hover:text-white transition-colors">
                            linkedin.com/in/suryajith-ss
                        </span>
                    </a>

                    <a href="https://github.com/dev-suryajith" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(196,115,124,0.45)]">
                        <span className="text-2xl"><FaGithub /></span>
                        <span className="text-gray-300 text-base group-hover:text-white transition-colors">
                            github.com/dev-suryajith
                        </span>
                    </a>
                </div>

                {/* Footer Line */}
                <p className="mt-16 text-sm text-gray-500">
                    Designed & built with focus, consistency, and intent.
                </p>
            </div>
        </section>
    );
}

export default Contact;
