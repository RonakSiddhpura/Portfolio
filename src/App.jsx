import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Code, 
  Briefcase, 
  GraduationCap,
  User,
  Code2,
  MapPin,
  Calendar,
  Award,
  Home,
  Send,
  ChevronUp,
  Link,
  FileText,
  Download 
} from 'lucide-react';

// Personal Information Data
const personalInfo = {
  name: "Ronak Siddhpura",
  title: "Computer Science Student & Full Stack Developer",
  email: "ronaksiddhpura07@gmail.com",
  phone: "+91-8460240025",
  location: "Ahmedabad, Gujarat, India",
  about: "Computer Science undergraduate with a strong foundation in full-stack development and practical experience in building scalable applications. Passionate about Software Development, DevOps and eager to expand my skills in CI/CD, containerization, and cloud infrastructure management.",
  github: "https://github.com/RonakSiddhpura",
  linkedin: "https://www.linkedin.com/in/ronaksiddhpura07/",
};

// Education Data
const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Institute of Technology Nirma University",
    location: "Ahmedabad",
    year: "2022-25",
    gpa: "CGPA: 6.70"
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "A. V. Parekh Technical Institute (GTU)",
    location: "Rajkot",
    year: "2019-22",
    gpa: "CGPA: 9.41"
  }
];

// Skills Data
const skills = {
  "Programming Languages": ["Python", "Java", "JavaScript", "C/C++", "HTML/CSS"],
  "Frameworks and Libraries": ["React.js", "Node.js", "Express.js", "Redux", "Bootstrap", "Tailwind", "Flask"],
  "Databases": ["MongoDB", "MySQL", "Firebase"],
  "Other": ["Docker", "REST Api", "Git", "Github", "Data structure", "AWS"]
};

// Experience Data
const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Indian Navy, INS Valsura",
    location: "Jamnagar",
    period: "May 2024 - July 2024",
    responsibilities: [
      "Developed and maintained web applications with seamless user experiences",
      "Implemented efficient backend processes and audio classification techniques"
    ],
    technologies: ["Python", "Flask", "MongoDB"]
  }
];

// Projects Data
const projects = [
  {
    title: "EZYBUY",
    description: "A comprehensive E-commerce platform",
    details: "Developed a full-featured E-commerce platform with robust administrative functions and user-friendly customer features. Implemented secure user authentication, product management, and order processing systems. Utilized React Context API for state management and Firebase for real-time updates.",
    technologies: ["ReactJS", "Firebase", "Tailwind CSS"],
    github: "https://github.com/username/ezybuy",
    demo: "https://ezybuy-demo.com"
  },
  {
    title: "REAL TIME CHAT APP",
    description: "A real-time messaging chat application",
    details: "Implemented real-time messaging with Socket.io, allowing messages to be sent and received instantly. Enabled user authentication using JWT for secure login and registration. Integrated Cloudinary for cloud image uploads and stored persistent chat history in MongoDB.",
    technologies: ["ReactJS", "Socket.io", "Node.js", "Redux", "MongoDB", "Cloudinary"],
    github: "https://github.com/username/chat-app",
    demo: "https://chat-app-demo.com"
  },
  {
    title: "CHAT WITH PDF",
    description: "LLM-powered document QA system",
    details: "Developed an intelligent document analysis system using Large Language Models. Implemented document processing pipeline including PDF parsing and text extraction.",
    technologies: ["Python", "LLM", "Streamlit"],
    github: "https://github.com/username/chat-pdf",
    demo: "https://chat-pdf-demo.com"
  }
];

// Certifications Data
const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    date: "May 2024",
    link: "https://www.credly.com/badges/01696a5b-5d6e-46c2-9884-356bac250301/public_url"
  },
  {
    title: "Google Python Crash Course",
    date: "Jul 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/SWRSQ5CTBG8S"
  },
  {
    title: "Java (Basic) - HackerRank",
    date: "Jul 2023",
    link: "https://www.hackerrank.com/certificates/16855a6d0e75"
  }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/11TwM6hnPT9SvNx5iNKL1UgbIi227RDRm/view?usp=drive_link";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const NavButton = ({ icon: Icon, label, section, isDownload = false, href  }) => (
  
  //   <button
  //     onClick={() => scrollToSection(section)}
  //     className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
  //       activeSection === section 
  //         ? 'bg-gray-900 text-white shadow-lg' 
  //         : 'text-gray-600 hover:bg-gray-100'
  //     }`}
  //   >
  //     <Icon className="w-5 h-5" />
  //     <span>{label}</span>
  //   </button>
  // );

  const NavButton = ({ icon: Icon, label, section, isDownload = false, href }) => {
    if (isDownload && href) {
      return (
        <a
          href={href}
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-gray-600 hover:bg-gray-100"
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </a>
      );
    }
  
    return (
      <button
        onClick={() => scrollToSection(section)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          activeSection === section
            ? 'bg-gray-900 text-white shadow-lg'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </button>
    );
  };
  
  

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-gray-700" />
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <img 
              src="https://github.com/RonakSiddhpura.png" 
              alt={personalInfo.name}
              className="h-12 w-12 rounded-full object-cover border-2 border-gray-900 hover:scale-110 transition-transform duration-300"
            />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{personalInfo.name}</h1>
                <p className="text-sm text-gray-600">{personalInfo.title}</p>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              <NavButton icon={Home} label="Home" section="home" />
              <NavButton icon={User} label="About" section="about" />
              <NavButton icon={Code2} label="Projects" section="projects" />
              <NavButton icon={Briefcase} label="Experience" section="experience" />
              <NavButton icon={Mail} label="Contact" section="contact" />
              <NavButton  icon={Download}  label="Resume" isDownload={true} href={resumeUrl}/>
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              <NavButton icon={Home} label="Home" section="home" />
              <NavButton icon={User} label="About" section="about" />
              <NavButton icon={Code2} label="Projects" section="projects" />
              <NavButton icon={Briefcase} label="Experience" section="experience" />
              <NavButton icon={Mail} label="Contact" section="contact" />
              <NavButton  icon={Download}  label="Resume" isDownload={true} href={resumeUrl}/>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <img 
          src="https://github.com/RonakSiddhpura.png"
          alt={personalInfo.name}
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-gray-900 hover:scale-110 transition-transform duration-300 shadow-lg"
          />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm {personalInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {personalInfo.about}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 pt-28">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle icon={User} title="About Me" />
            
            {/* Education */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-600">{edu.location}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <Award className="w-4 h-4" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-white p-6 rounded-xl shadow-sm border">
                    <h4 className="font-bold text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 pt-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle icon={Code2} title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-600 mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <Link className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 pt-28">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle icon={Briefcase} title="Experience" />
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-gray-900">{cert.title}</h4>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 pt-28 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionTitle icon={Mail} title="Contact Me" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="ronaksiddhpura07@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                    <Mail className="w-5 h-5" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
