function Skills() {

  const skills = [
    {
      name: "HTML",
      level: "Advanced"
    },
    {
      name: "CSS",
      level: "Advanced"
    },
    {
      name: "JavaScript",
      level: "Intermediate"
    },
    {
      name: "React JS",
      level: "Intermediate"
    }
  ];

  return (
    <section>

      <h2>My Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>

            <span>{skill.name}</span>

            <strong>{skill.level}</strong>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;