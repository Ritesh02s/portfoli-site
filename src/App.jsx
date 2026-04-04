import './App.css';
import { motion } from "framer-motion";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Ritesh</h1>

        <div className="flex gap-6">
          <button onClick={() => scrollToSection("hero")} className="hover:text-gray-400">
            Home
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-gray-400">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-gray-400">
            Skills
          </button>
          <p className="text-gray-400 mt-4">
            riteshshankar2018@gmail.com
          </p>
          <a
            href="https://github.com/Ritesh02s"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-shankar-72a433191/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center min-h-screen text-center px-4 pt-28"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Ritesh Shankar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-6"
        >
          AI Engineer | NLP | RAG Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl text-gray-300 mb-6"
        >
          Building intelligent systems using Machine Learning, Natural Language
          Processing, and Retrieval-Augmented Generation.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection("projects")}
            className="bg-white text-black px-6 py-2 rounded-lg font-medium"
          >
            View Projects
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/resume.pdf"
            download
            className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black"
          >
            Download Resume
          </motion.a>
        </div>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:riteshshankar2018@gmail.com?subject=Portfolio%20Contact"
          className="mt-4 border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          Email Me
        </motion.a>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Chatbot */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
            <p className="text-gray-400 mb-4">
              NLP chatbot built using Transformers with custom intent
              recognition and response generation.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ritesh02s/ai-chatbot"
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* RAG System */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">RAG System</h3>
            <p className="text-gray-400 mb-4">
              Built a Retrieval-Augmented Generation system using embeddings
              and vector databases.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ritesh02s/RAG--based--chatbot"
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Student Manager */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Student Manager</h3>
            <p className="text-gray-400 mb-4">
              Python-based system for managing and analyzing student
              performance data.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ritesh02s/student-manager"
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Portfolio Website */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              Personal portfolio built using React, Tailwind CSS, and Framer
              Motion, showcasing AI projects with responsive design and smooth
              animations.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ritesh02s/portfoli-site"
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                GitHub
              </a>

              <a
                href="https://portfoli-site-alpha.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="border px-3 py-1 rounded hover:bg-white hover:text-black"
              >
                Live
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {[
            "Python",
            "Machine Learning",
            "NLP",
            "RAG",
            "React",
            "FastAPI",
            "TensorFlow",
            "PyTorch",
          ].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;