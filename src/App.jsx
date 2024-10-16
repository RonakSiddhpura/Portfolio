import React, { useState, useEffect } from 'react';
import { Mail, ChevronDown, Github, Linkedin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState('');

  const GITHUB_USERNAME = 'RonakSiddhpura';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchProfileImage = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setProfileImage(data.avatar_url);
      } catch (err) {
        console.error('Error fetching profile image:', err);
      }
    };

    fetchProjects();
    fetchProfileImage();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Ronak Siddhpura
          </div>
          <div className="flex space-x-6">
            {['home', 'projects', 'about', 'education', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider ${
                  activeSection === section
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      <div className="text-center z-10 space-y-8">
        {profileImage && (
          <img
            src={profileImage}
            alt="Ronak Siddhpura"
            className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/30"
          />
        )}
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Ronak Siddhpura
        </h1>
        <p className="text-2xl text-gray-300">Software Developer & DevOps Engineer</p>
        <p className="max-w-2xl mx-auto text-gray-400 px-4">
          Diligent and goal-oriented student passionate about Software Development and DevOps. Ready to drive innovation as a global leader.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/ronaksiddhpura07/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-purple-400 hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="https://github.com/RonakSiddhpura" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 text-purple-400 hover:text-purple-300 cursor-pointer" />
          </a>
          <a href="mailto:22bce540@nirmauni.ac.in">
            <Mail className="w-6 h-6 text-purple-400 hover:text-purple-300 cursor-pointer" />
          </a>
        </div>
        <ChevronDown 
          className="w-8 h-8 text-purple-400 animate-bounce cursor-pointer mx-auto mt-12"
          onClick={() => scrollToSection('projects')}
        />
      </div>
    </section>
  );

  const Projects = () => (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          My Projects
        </h2>
        
        {loading && (
          <div className="text-center text-gray-400">
            Loading projects...
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-400">
            Error: {error}
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GitHub Projects from API */}
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/50 rounded-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 h-20 overflow-y-auto">
                    {project.description || 'No description available'}
                  </p>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}

            {/* Manually added projects */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300">Indian Food Recipes</h3>
              <p className="text-gray-400">A recipe platform for famous Indian dishes. Built with HTML, CSS, Bootstrap, PHP, JavaScript, MySQL.</p>
              <a href="https://github.com/RonakSiddhpura/Indian-Food-Recipes" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                View on GitHub
              </a>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300">NewsApp</h3>
              <p className="text-gray-400">A real-time news application built with React, Bootstrap, and News API.</p>
              <a href="https://github.com/RonakSiddhpura/Newsify" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                View on GitHub
              </a>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300">Chat with PDF</h3>
              <p className="text-gray-400">An LLM-powered platform for answering questions from PDFs. Built with Python, Streamlit, and LLM models.</p>
              <a href="https://github.com/RonakSiddhpura/MineD2024" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="space-y-8">
          <div className="space-y-6 text-gray-300">
            <p>
              I'm a diligent and goal-oriented student passionate about Software Development and DevOps. 
              With a strong foundation in computer science and hands-on experience in various projects, 
              I'm eager to contribute my skills and drive innovation in the tech industry.
            </p>
            <h3 className="text-2xl font-bold">Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Flask', 'Python', 'C', 'C++', 'Java', 'AWS', 'Firebase', 'Tailwind CSS', 'Bootstrap', 'Docker'].map((skill) => (
                <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Education = () => (
    <section id="education" className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-300">B.Tech - Computer Science and Engineering</h3>
            <p className="text-gray-400">Nirma University, Ahmedabad (2022-2025)</p>
            <p className="text-gray-400">CGPA: 6.70 / 10</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-300">Diploma - Computer Engineering</h3>
            <p className="text-gray-400">A.V.Parekh Technical Institute, Rajkot (2022)</p>
            <p className="text-gray-400">CGPA: 9.41 / 10</p>
          </div>
        </div>
      </div>
    </section>
  );

  const Experience = () => (
    <section id="experience" className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Experience
        </h2>
        <div className="bg-gray-800/50 rounded-xl p-6 text-left">
          <h3 className="text-2xl font-bold text-purple-300">Full Stack Web Developer</h3>
          <p className="text-gray-400">Indian Navy | 27 May, 2024 - 12 Jul, 2024</p>
          <ul className="list-disc list-inside text-gray-300 mt-4">
            <li>Worked on both frontend and backend development</li>
            <li>Built and maintained robust web applications</li>
            <li>Expanded knowledge in audio classification techniques</li>
          </ul>
          <p className="text-gray-400 mt-4"><strong>Key Skills:</strong> Python, Flask, MongoDB</p>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none text-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none text-gray-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none text-gray-300"
            />
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;