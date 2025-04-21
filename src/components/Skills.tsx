
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "J2EE", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "Agile", level: 75 },
      { name: "Linux", level: 70 },
      { name: "DevOps", level: 65 },
    ],
  },
];

const otherSkills = [
  "Object-oriented design",
  "API development",
  "Full-stack web development",
  "Data Structures",
  "Algorithms",
  "Problem-solving",
  "Project management",
  "Jira",
  "PHP",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillsData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-purple-dark">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-purple-dark">
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <div key={index} className="skill-badge flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-purple" />
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-gradient-to-br from-purple-light/5 to-purple/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-dark">
                Problem Solving
              </h3>
              <p>
                Solved 250+ Data Structure and Algorithm questions on LeetCode, showcasing strong analytical thinking and coding efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-br from-purple-light/5 to-purple/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-dark">
                Full Stack Development
              </h3>
              <p>
                Experience building complete web applications from frontend interfaces to backend APIs with various technologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-br from-purple-light/5 to-purple/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-dark">
                Continuous Learning
              </h3>
              <p>
                Constantly improving skills through courses, certifications, and practical projects to stay updated with latest technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
