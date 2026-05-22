const experiences = [
    { year: "2017", role: "Flight Attendance", company: "AirAsia" },
    { year: "2020", role: "Graphic Designer", company: "Shopee" },
    { year: "2021", role: "Brand & Visual Designer", company: "Taste Table" },
    { year: "2025", role: "UX/UI Designer", company: "Pepa" },
];

export default function Experience() {
    return (
        <section
            className='section'
            id='experience'>
            <div className='experience-layout'>
                <p className='section-title experience-title'>Experiences</p>
                <div className='experience-grid'>
                    {experiences.map((exp) => (
                        <div
                            key={exp.year + exp.company}
                            className='experience-card'>
                            <span className='experience-year'>{exp.year}</span>
                            <p className='experience-role'>{exp.role}</p>
                            <p className='experience-company'>{exp.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
