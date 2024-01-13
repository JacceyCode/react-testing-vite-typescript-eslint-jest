import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Start learning" : "Login"}
      </button>
    </>
  );
};
