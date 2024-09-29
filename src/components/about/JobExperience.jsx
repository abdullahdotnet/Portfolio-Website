import React from 'react';

const JobExperience = () => {
  const experiences = [
    {
      company: "TechCorp",
      role: "Data Scientist",
      duration: "Jan 2022 - Present",
      description: [
        "Developed machine learning models for predictive analytics.",
        "Improved data processing speed by 30% through optimization.",
        "Led a team of 5 in data-driven decision-making projects."
      ],
    },
    {
      company: "DataX",
      role: "Data Science Instructor",
      duration: "Sep 2020 - Dec 2021",
      description: [
        "Taught data science courses to over 100 students.",
        "Created course materials and hands-on projects.",
        "Mentored students in machine learning and data analysis."
      ],
    },
  ];

  return (
    <section className="bg-[#0b1120] text-white py-16 mt-20 sm:mt-16">
      <div className="container mx-auto px-8">
        <p className="text-4xl text-center mb-8 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">Job Experience</p>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#1f2a3b]"
            >
              <h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
              <h4 className="text-lg mb-1">{experience.company}</h4>
              <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>
              <ul className="list-disc pl-5 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
