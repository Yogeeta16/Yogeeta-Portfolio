import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    position: "Product Analyst",
    company: "Rupyy by CarDekho (NBFC Team)",
    location: "New Delhi",
    period: "December 2024 - Present",
    highlights: [
      "Analyzed and monitored product performance metrics using AWS CloudWatch.",
      "Managed and optimized MySQL databases for improved data retrieval and analysis.",
      "Collaborated with cross-functional teams to implement data-driven product improvements.",
      "Developed and maintained reporting dashboards for key business metrics.",
    ],
    isLeft: false,
  },
  {
    position: "PG DAC, Computer Software Engineering",
    company: "CDAC (Centre for Development of Advanced Computing)",
    location: "Pune-Karad",
    period: "March 2024 - August 2024",
    highlights: [
      "Gained hands-on experience in Java, JavaScript, and MySQL while developing scalable backend systems.",
      "Gained knowledge on DevOps tools including Git, Jenkins, and Agile methodologies.",
      "Trained in MySQL, JavaScript, Core Java, J2EE, MERN Stack, Data Structures, MongoDB, Linux OS.",
    ],
    isLeft: true,
  },
 
  {
    position: "Web Developer",
    company: "Ayasya Digitals",
    location: "New Delhi",
    period: "March 2023 - January 2024",
    highlights: [
      "Analyzed requirements and assisted in website development and updates for enhanced user experience.",
      "Collaborated with cross-functional teams to gather user feedback and make data-driven improvements.",
      "Technologies used: ReactJs, HTML, CSS, JavaScript.",
    ],
    isLeft: false,
  },
  {
    position: "Power BI Certification",
    company: "Honeywell",
    location: "Remote",
    period: "January 2023",
    highlights: [
      "Mastered Power BI for data visualization and business intelligence.",
      "Created interactive dashboards and reports for data analysis.",
    ],
    isLeft: true,
  },
  {
    position: "Java Programming Masterclass",
    company: "Udemy",
    location: "Remote",
    period: "June 2022 - Dec 2022",
    highlights: [
      "Acquired strong skills in Java, focusing on data structures, algorithms, and object-oriented design.",
      "Enhanced problem-solving abilities with practical projects and coding challenges.",
    ],
    isLeft: false,
  },
  {
    position: "Data Structure and Web Development Training",
    company: "Pepcoding Education Private Limited",
    location: "Remote",
    period: "Sept 2021 - Mar 2022",
    highlights: [
      "Solved 250+ Data Structure questions to refine programming skills.",
      "Developed web applications using MERN stack technologies.",
    ],
    isLeft: true,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience & Training</h2>
        
        <div className="timeline-container mt-16">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-item-dot" />
              <div
                className={`timeline-content ${
                  exp.isLeft ? "timeline-left" : "timeline-right"
                }`}
              >
                <h3 className="text-xl font-semibold text-purple-dark">
                  {exp.position}
                </h3>
                <h4 className="font-medium text-lg">{exp.company}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-light mt-1.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.position.includes("Web Developer") && (
                    <>
                      <Badge variant="outline" className="bg-purple-light/10">React</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">HTML</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">CSS</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">JavaScript</Badge>
                    </>
                  )}
                  {exp.position.includes("PG DAC") && (
                    <>
                      <Badge variant="outline" className="bg-purple-light/10">Java</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">MySQL</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">MERN</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">DevOps</Badge>
                    </>
                  )}
                  {exp.position.includes("Java Programming") && (
                    <>
                      <Badge variant="outline" className="bg-purple-light/10">Java</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">Algorithms</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">OOP</Badge>
                    </>
                  )}
                  {exp.position.includes("Data Structure") && (
                    <>
                      <Badge variant="outline" className="bg-purple-light/10">DSA</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">MERN</Badge>
                      <Badge variant="outline" className="bg-purple-light/10">Web Dev</Badge>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
