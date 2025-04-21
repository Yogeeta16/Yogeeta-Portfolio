
import React from "react";
import { BadgeCheck, Building, Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Guru Tegh Bahadur Institute Of Technology, Delhi",
    percentage: "86.5%",
    year: "2019-2023",
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE",
    percentage: "78.6%",
    year: "2019",
  },
  {
    degree: "Secondary",
    institution: "CBSE",
    percentage: "10", // CGPA
    year: "2017",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in Information
              Technology. My journey in tech has equipped me with expertise in both frontend
              and backend technologies, allowing me to build complete web applications from
              concept to deployment.
            </p>
            <p className="text-lg leading-relaxed">
              With hands-on experience in Java, JavaScript, React, and database systems like MySQL
              and MongoDB, I've developed a variety of applications ranging from healthcare
              appointment systems to food delivery platforms.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines technical skills with problem-solving abilities,
              as evidenced by solving 250+ Data Structure questions on LeetCode and
              implementing complex functionalities in real-world applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-dark">Education</h3>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-purple-light/10 rounded-full">
                        <GraduationCap className="w-5 h-5 text-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.degree}</h4>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm">
                          <div className="flex items-center gap-1">
                            <BadgeCheck className="w-4 h-4 text-purple-light" />
                            <span>{item.percentage}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-purple-light" />
                            <span>{item.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-purple-dark">Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BadgeCheck className="w-10 h-10 text-purple mb-4" />
                <h4 className="font-semibold">LeetCode Problems</h4>
                <p className="text-muted-foreground">Solved 250+ Data Structure and Algorithm questions</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-purple mb-4" />
                <h4 className="font-semibold">HP Enterprise Simulation</h4>
                <p className="text-muted-foreground">Completed Software Engineering Job Simulation on Forage</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BadgeCheck className="w-10 h-10 text-purple mb-4" />
                <h4 className="font-semibold">TCS NQT</h4>
                <p className="text-muted-foreground">Achieved 78% in TCS National Qualifier Test</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <BadgeCheck className="w-10 h-10 text-purple mb-4" />
                <h4 className="font-semibold">Salesforce Trailblazer</h4>
                <p className="text-muted-foreground">Active participant in Salesforce's Trailblazer program</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
