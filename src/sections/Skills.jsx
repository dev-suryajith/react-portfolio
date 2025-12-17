import React from 'react'

function Skills() {
    return (
        <>
            <section id="skills" className="py-20">
                <h2 className="text-3xl font-bold mb-10">Skills</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React.js",
                        "Tailwind CSS",
                        "Redux",
                        "Git & GitHub",
                        "REST APIs",
                        "Bootstrap",
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#c4737c]/90 hover:shadow-[0_0_30px_rgba(196,115,124,0.6)] p-4 rounded-lg text-center transition-all duration-300 ease-out hover:bg-white/10 hover:text-[#c4737c] hover:backdrop-blur-md hover:border hover:border-white/20  hover:-translate-y-1 "
                        >
                            {skill}
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default Skills