import React from "react";

function Projects() {
    const projects = [
        {
            title: "My Notes",
            desc:
                "A responsive Airbnb-style UI with search bar, property listings, location-based cards, and product detail pages.",
            tech: "HTML, CSS, Bootstrap",
        },
        {
            title: "Resume Builder",
            desc:
                "A frontend-only game store UI inspired by Steam, featuring categories, product cards, and clean layouts.",
            tech: "HTML, Tailwind CSS",
        },
        {
            title: "Freelancer CRM",
            desc:
                "A React-based CRM dashboard with authentication, project management, payments, and admin panels.",
            tech: "React, Tailwind CSS, REST APIs",
        },
        {
            title: "Real-Time Chat App",
            desc:
                "A private 1-to-1 chat application with real-time messaging using Socket.IO and optimized backend logic.",
            tech: "React, Node.js, Socket.IO",
        },
    ]
    return (
        <section
            id="projects"
            className="py-24 px-6 md:px-20 bg-black text-white"
        >
            {/* Section Header */}
            <h2 className="text-4xl font-bold mb-14 text-center tracking-tight">
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid gap-10 md:grid-cols-2">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className=" group relative overflow-hidden rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(196,115,124,0.35)] ">
                        {/* Glow Overlay */}
                        <div className=" pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#c4737c]/20 via-transparent to-transparent " />

                        <h3 className="text-2xl font-semibold mb-4">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            {project.desc}
                        </p>

                        <p className="mt-4 text-sm text-gray-500">
                            Tech: {project.tech}
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex gap-6">
                            <a
                                href="#"
                                className="
                  relative text-sm font-medium
                  text-[#c4737c]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0
                  after:bg-[#c4737c]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
                            >
                                Live
                            </a>

                            <a
                                href="#"
                                className="
                  relative text-sm font-medium
                  text-[#c4737c]
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:w-0
                  after:bg-[#c4737c]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
