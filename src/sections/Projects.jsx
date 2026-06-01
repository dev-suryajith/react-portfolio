import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
    // const [tag, setTag] = useState('')
    const projects = [
        {
            title: "My Notes",
            tag: "fullstack",
            desc:
                "A responsive notes application with clean UI and full CRUD functionality using REST APIs.",
            tech: "React, JSON Server, CSS",
            liveLink: "https://my-notes-frontend-sand.vercel.app",
            frontendLink: "https://github.com/dev-suryajith/MyNotes-Frontend",
            backendLink: "https://github.com/dev-suryajith/MyNotes-Backend",
        },
        {
            title: "AI Interviw Coach",
            tag: "fullstack",
            desc:
                "A full-stack AI-powered mock interview platform.",
            tech: "MongoDB, Express.js, React, Node.js, Gemini AI",
            liveLink: "https://ai-interviewer-kohl-sigma.vercel.app",
            frontendLink: "https://github.com/dev-suryajith/ai-interview-coach-frontend",
            backendLink: "https://github.com/dev-suryajith/ai-interview-coach-backend",
        },
        {
            title: "Freelancer CRM",
            tag: "fullstack",
            desc:
                "A role-based CRM dashboard with authentication, project management, payments, and admin panels.",
            tech: "MongoDB, Express.js, React, Node.js",
            liveLink: "https://freelancer-crm-frontend.vercel.app",
            frontendLink: "https://github.com/dev-suryajith/freelancerCRM-frontend",
            backendLink: "https://github.com/dev-suryajith/freelancerCRM-backend",
        },
        {
            title: "Interview Scheduler",
            tag: "fullstack",
            desc:
                "A role-based CRM dashboard with authentication, project management, payments, and admin panels.",
            tech: "MongoDB, Express.js, React, Node.js",
            liveLink: "https://interviewly-gamma.vercel.app",
            frontendLink: "https://github.com/dev-suryajith/Interviewly_Frontend",
            backendLink: "https://github.com/dev-suryajith/Interviewly_Backend",
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 px-6 md:px-20 bg-black text-white"
        >
            <h2 className="text-4xl font-bold mb-14 text-center tracking-tight">
                Projects
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(196,115,124,0.35)]"
                    >
                        {/* Glow Overlay */}
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#c4737c]/20 via-transparent to-transparent" />

                        <h3 className="text-2xl font-semibold mb-4">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            {project.desc}
                        </p>

                        <p className="mt-4 text-sm text-gray-500">
                            Tech: {project.tech}
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex justify-between">
                            <div className="mt-6 flex flex-wrap gap-6">
                                {project.frontendLink && (
                                    <a
                                        href={project.frontendLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative text-sm font-medium text-[#c4737c] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#c4737c] after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Frontend Code
                                    </a>
                                )}

                                {project.backendLink && (
                                    <a
                                        href={project.backendLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative text-sm font-medium text-[#c4737c] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#c4737c] after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Backend Code
                                    </a>
                                )}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-6">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex justify-center items-center gap-3 text-sm font-medium text-[#c4737c] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#c4737c] after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Live <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    );
}

export default Projects;