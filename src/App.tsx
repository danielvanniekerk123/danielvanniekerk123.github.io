import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import './index.css';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiJavascript, SiExpress, SiSqlite, SiPostgresql, SiFirebase, SiVercel } from 'react-icons/si';
import CollageViewer from './components/CollageViewer';
import q2m002 from './assets/img/q2m002.png';
import q2m003 from './assets/img/q2m003.png';
import s001 from './assets/img/s001.png';
import s002 from './assets/img/s002.png';
import s003 from './assets/img/s003.png';
import s004 from './assets/img/s004.png';
import s005 from './assets/img/s005.png';
import s006 from './assets/img/s006.png';
import s007 from './assets/img/s007.png';
import t001 from './assets/img/t001.png';
import t002 from './assets/img/t002.png';
import t003 from './assets/img/t003.png';
import t004 from './assets/img/t004.png';
import t005 from './assets/img/t005.png';
import t006 from './assets/img/t006.png';
import t007 from './assets/img/t007.png';

const projects = [
  {
    title: 'quick2mb Website',
    image: [q2m002, q2m003],
    description: 'A simple and easy compression website.',
    tech: ['React', 'Tailwind CSS', 'VUE', 'firebase'],
    link: 'https://github.com/danielvanniekerk123/2mbquick',
    weblink: 'https://quick2mb.site',
  },
  {
    title: 'Skoonify Website',
    image: [s001, s002, s003, s004, s005, s006, s007],
    description: 'A full-stack website for a company that provides cleaning services.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Firebase'],
    link: 'https://github.com/danielvanniekerk123/skoonify-app',
    // Add demo link if available
  },
  {
    title: 'Telegram trading Bot',
    image: [t001, t002, t003, t004, t005, t006, t007],
    description: 'A telegram bot that helps you calculate your PnL in crypto trading.',
    tech: ['Python', 'Telegram'],
    link: 'https://github.com/danielvanniekerk123/telegram_trading-bot',
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNameClick = () => {
    setShowName(true);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 700);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const commonSectionClasses = "bg-gray-800 text-white py-20 px-4 min-h-screen";
  const commonButtonClasses = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200";
  const commonSocialClasses = "flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-200 transform hover:scale-105";

  return (
    <div className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className={`transition-colors duration-500 ${scrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} flex flex-col items-center justify-center min-h-screen`}>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Hi, I'm {' '}
          <button
            className="relative cursor-pointer focus:outline-none"
            onClick={handleNameClick}
            aria-label="Reveal name"
          >
            <div className="text-sm">↓ click to reveal ↓</div>
            <span className={`inline-block text-blue-600 transition-opacity duration-300 ${showName ? 'opacity-100' : 'opacity-0'} ${animate ? 'animate-wiggle' : ''}`}>
              DANIEL
            </span><span className="text-black">.</span>
          </button>
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-xl text-center">
          I build modern, full-stack web applications and solutions.<br />
          <span className="text-blue-600">React</span> • <span className="text-yellow-500">Node.js</span> • <span className="text-green-600">Python</span> • <span className="text-purple-600">Tailwind CSS</span>
        </p>
        <span className="mt-4 text-sm text-gray-300">scroll down 👇</span>
        
      </section>

      {/* About Me Section */}
      <section id="about" className={commonSectionClasses}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center tracking-wide">About Me</h1>
          
          <div className="bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-left">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              I am currently pursuing a Bachelor's degree in Informatics at the University of South Africa. I am passionate about technology and am actively seeking opportunities to grow in the tech industry. I am a quick learner, always eager to improve my skills and take on new challenges.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-left">Core Strengths</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li>Problem-solving</li>
              <li>Creativity</li>
              <li>Adaptability</li>
              <li>Strong work ethic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${commonSectionClasses} flex flex-col items-center`}>
        <h2 className="text-2xl font-bold mb-6">My Tech Stack</h2>
        <p className="mb-6 max-w-lg text-center">
          I build modern, scalable web applications using a robust and versatile technology stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <FaReact title="React" className="text-blue-400 text-2xl" />
              <SiJavascript title="JavaScript" className="text-yellow-400 text-2xl" />
              <SiTypescript title="TypeScript" className="text-blue-600 text-2xl" />
              <SiTailwindcss title="Tailwind CSS" className="text-teal-400 text-2xl" />
              <FaHtml5 title="HTML5" className="text-orange-500 text-2xl" />
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <FaNodeJs title="Node.js" className="text-green-600 text-2xl" />
              <SiExpress title="Express" className="text-gray-300 text-2xl" />
              <FaPython title="Python" className="text-yellow-400 text-2xl" />
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Database</h3>
            <div className="flex flex-wrap gap-3">
              <SiSqlite title="SQLite" className="text-blue-400 text-2xl" />
              <SiPostgresql title="PostgreSQL" className="text-blue-700 text-2xl" />
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Deployment</h3>
            <div className="flex flex-wrap gap-3">
              <SiFirebase title="Firebase" className="text-yellow-500 text-2xl" />
              <FaAws title="AWS" className="text-orange-400 text-2xl" />
              <SiVercel title="Vercel" className="text-black text-2xl" />
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('projects')} className={`mt-8 ${commonButtonClasses}`}>
          View My Projects ↓
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className={commonSectionClasses}>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
          <h2 className="text-xl mb-8 text-left">
            my GitHub link:
            <a href="https://github.com/danielvanniekerk123" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">View GitHub</a>
          </h2>
          <h2 className="text-xl mb-8 mt-8 text-left">
            my cvv download link:
            <a href="/assets/cvv/danielvanniekerkcvv.pdf" download className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700">download</a>
          </h2>
          
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6 items-center hover:shadow-xl transition-shadow duration-300">
                {project.image && (
                  <CollageViewer images={project.image} />
                )}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="mb-2">{project.description}</p>
                  <div className="mb-2">
                    <span className="font-bold">Tech:</span> {project.tech.join(', ')}
                  </div>
                  <div className="flex gap-4 mt-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                    )}
                    {project.weblink && (
                      <a href={project.weblink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contact')} className={commonButtonClasses}>
              Get In Touch ↓
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${commonSectionClasses} flex flex-col items-center`}>
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
          <div className="mt-8 text-center text-gray-400">
            <p>Email me at <a href="mailto:danielvanniekerk1@icloud.com" className="text-blue-400 hover:underline">danielvanniekerk1@icloud.com</a></p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Connect With Me</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.facebook.com/share/1M7zLFmG37/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={`${commonSocialClasses} bg-blue-600 hover:bg-blue-700`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/daniel-van-niekerk-b83a83209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className={`${commonSocialClasses} bg-blue-700 hover:bg-blue-800`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/danielvanniekerk123" target="_blank" rel="noopener noreferrer" className={`${commonSocialClasses} bg-gray-700 hover:bg-gray-600`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Daniel van Niekerk. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/danielvanniekerk123" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-2">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-van-niekerk-b83a83209" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mx-2">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;