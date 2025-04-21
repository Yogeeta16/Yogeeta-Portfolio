import React, { useState } from "react";
import { ExternalLink, Github, Share2, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // primary image
  imageGallery?: string[]; // additional images
  videoUrl?: string; // embedded video link
  type: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}


const projects: Project[] = [
  {
    id: 1,
    title: "EMED Healthcare Appointment System",
    description: " Frontend and Backend system for managing patient and Doctor appointments.",
    imageUrl: "/projectImages/Emed01.png",
    imageGallery: [
      "/projectImages/Emed02.png",
      "/projectImages/Emed01.png",
      "/projectImages/Emed03.png",
      "/projectImages/Emed04.png",
      "/projectImages/Emed05.png",
      "/projectImages/Emed06.png",
      "/projectImages/Emed07.png",
      "/projectImages/Emed08.png",
      "/projectImages/Emed09.png",
      "/projectImages/Emed10.png",
      "/projectImages/Emed11.png",
   
    ],
    videoUrl: "https://www.youtube.com/watch?v=b4hYq90H1Ok",
    type: "backend",
    technologies: ["Java", "SpringBoot", "REST API", "MySQL"],
    githubUrl: "https://github.com/Yogeeta16/FinalProject-KD2-J016",
  },
  {
    id: 2,
    title: "Product Feedback App",
    description: "An interactive web app for collecting feedback.",
    imageUrl: "/projectImages/ProductFeedBack01.png",
    imageGallery: [
      "/projectImages/ProductFeedBack01.png",
      "/projectImages/ProductFeedBack02.png",
      "/projectImages/ProductFeedBack03.png",
      "/projectImages/ProductFeedBack04.png",
    ],
    type: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/Yogeeta16/product-feedback-App-js?",
    demoUrl: "https://yogeeta16.github.io/product-feedback-App-js/",
  },
  {
    id: 3,
    title: "Tetris Game",
    description: "Classic Tetris built with JavaScript.",
    imageUrl: "/projectImages/Tetris03.png",
    imageGallery: [
      "/projectImages/Tetris01.png",
      "/projectImages/Tetris02.png",
      "/projectImages/Tetris03.png",
    ],
    type: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    githubUrl: "https://github.com/Yogeeta16/tetrisgame?",
    demoUrl: "https://yogeeta16.github.io/tetrisgame/",
  },
  {
    id: 4,
    title: "Movie App",
    description: "Browse and explore movies using public APIs.",
    imageUrl: "/projectImages/Movie01.png",
    imageGallery: [
      "/projectImages/Movie01.png",
      "/projectImages/Movie02.png",
     
    ],
    type: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    githubUrl: "https://github.com/Yogeeta16/movie-app-js",
  },
  {
    id: 5,
    title: "Task Management Web App",
    description: "Organize and track daily tasks efficiently.",
    imageUrl: "/projectImages/TaskManager03.png",
    imageGallery: [
      "/projectImages/TaskManager01.png",
      "/projectImages/TaskManager02.png",
      "/projectImages/TaskManager03.png",
      "/projectImages/TaskManager04.png",
    ],
    type: "frontend",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/Yogeeta16/task-management-web-app",
    demoUrl: "https://yogeeta16.github.io/task-management-web-app/",
  },
  {
    id: 6,
    title: "Hotel Booking System",
    description: "Backend API for hotel room booking management.",
    imageUrl: "/projectImages/HotelBooking01.png",
     type: "backend",
    technologies: ["Java", "SpringBoot", "REST API", "MySQL"],
    githubUrl: "https://github.com/Yogeeta16/hotelbooking",
  },
  {
    id: 7,
    title: "Employee Management System",
    description: "API for employee data handling and operations.",
    imageUrl: "/projectImages/EmployeeManagement01.png",
    type: "backend",
    technologies: ["Java", "SpringBoot", "REST API", "MySQL"],
    githubUrl: "https://github.com/Yogeeta16/employee_mng",
  },
  {
    id: 8,
    title: "Patient Appointment System",
    description: "Backend system for managing patient appointments.",
    imageUrl: "/projectImages/PatientAppointment01.png",
    type: "backend",
    technologies: ["Java", "SpringBoot", "REST API", "MySQL"],
    githubUrl: "https://github.com/Yogeeta16/patientappointment",
  },
  {
    id: 9,
    title: "Automobile Management System",
    description: "Inventory and sales management system for automobiles.",
    imageUrl: "/projectImages/Automobile02.png",
    type: "backend",
    technologies: ["Java", "SpringBoot", "REST API", "MySQL"],
    githubUrl: "https://github.com/Yogeeta16/automobile_system",
  },
  
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-light/5 to-purple-dark/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        
        <Tabs defaultValue="all" className="mt-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveFilter("all")}
                className="rounded-full px-6"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="frontend" 
                onClick={() => setActiveFilter("frontend")}
                className="rounded-full px-6"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend" 
                onClick={() => setActiveFilter("backend")}
                className="rounded-full px-6"
              >
                Backend
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.type === "frontend")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.type === "backend")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} onCardClick={handleCardClick} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      {showModal && selectedProject && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all p-6">
      
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-purple mb-4">{selectedProject.title}</h2>

      {/* Project Image */}
      <img
        src={selectedProject.imageUrl}
        alt={selectedProject.title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>

      {/* Technologies */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedProject.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-purple-light/10 text-purple border-purple-light/20 hover:bg-purple-light/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          asChild
          size="sm"
          className="rounded-full bg-gradient-to-r from-purple-light to-purple hover:opacity-90 text-white"
        >
          <a
            href={selectedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </Button>

        {selectedProject.demoUrl && (
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-purple-light/30 text-purple hover:bg-purple-light/10"
          >
            <a
              href={selectedProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
      </div>

      {/* Image Gallery */}
      {selectedProject.imageGallery && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Gallery</h3>
          <div className="grid grid-cols-2 gap-4">
            {selectedProject.imageGallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="rounded-lg object-cover h-32 w-full"
              />
            ))}
          </div>
        </div>
      )}

      {/* Video */}
      {selectedProject.videoUrl && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Video Preview</h3>
          <div className="aspect-video">
            <iframe
              src={selectedProject.videoUrl}
              title={`${selectedProject.title} Demo Video`}
              className="w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  </div>
)}

    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  return (
    <div onClick={() => onCardClick(project)} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
      <div className="photo-main relative h-64 overflow-hidden bg-gradient-to-br from-purple-light to-purple-dark">
        <div className="controls absolute top-4 right-4 flex gap-3 z-10">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
            <Share2 className="w-4 h-4 text-white" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
            <Heart className="w-4 h-4 text-white" />
          </Button>
        </div>
        
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="p-6 bg-white">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-purple-light/10 text-purple border-purple-light/20 hover:bg-purple-light/20">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-purple-light to-purple hover:opacity-90 text-white">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </Button>
          
          {project.demoUrl && (
            <Button asChild size="sm" variant="outline" className="rounded-full border-purple-light/30 text-purple hover:bg-purple-light/10">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
