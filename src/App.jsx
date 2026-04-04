import './App.css';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-wide">
            Ritesh<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-white transition">
              Skills
            </button>

            <a
              href="https://github.com/Ritesh02s"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Github size={18} className="text-gray-300" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ritesh-shankar-72a433191/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
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
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("projects")}
            className="rounded-xl bg-cyan-400 px-6 py-3 font-medium text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
          >
            View Projects
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            download
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
          >
            Download Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:riteshshankar2018@gmail.com?subject=Portfolio%20Contact"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
          >
            <Mail size={18} />
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/ritesh-shankar-72a433191/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-black"
          >
            <Linkedin size={30} className="text-white" />
            LinkedIn
          </motion.a>
        </div>
      </section>

      {/* Projects */}
     <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">
          Selected Work
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* AI Chatbot */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">AI Chatbot</h3>

            <p className="mb-4 text-sm text-gray-400">
              NLP chatbot using Transformers with custom intent classification and response generation.
            </p>

            <p className="mb-6 text-sm text-gray-500">
              Tech: Python, Transformers, NLP
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Ritesh02s/ai-chatbot"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                <Github size={16}/>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* RAG System */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">RAG System</h3>

            <p className="mb-4 text-sm text-gray-400">
              Retrieval-Augmented Generation system using embeddings and vector database.
            </p>

            <p className="mb-6 text-sm text-gray-500">
              Tech: Python, RAG, Embeddings, Vector DB
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Ritesh02s/RAG--based--chatbot"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Student Manager */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">Student Manager</h3>

            <p className="mb-4 text-sm text-gray-400">
              Python-based system for managing and analyzing student performance data.
            </p>

            <p className="mb-6 text-sm text-gray-500">
              Tech: Python, Data Handling
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Ritesh02s/student-manager"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Portfolio Website */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">Portfolio Website</h3>

            <p className="mb-4 text-sm text-gray-400">
              Personal portfolio built using React, Tailwind CSS, and Framer Motion.
            </p>

            <p className="mb-6 text-sm text-gray-500">
              Tech: React, Tailwind, Framer Motion, Vercel
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Ritesh02s/portfoli-site"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://portfoli-site-alpha.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
              >
                <ExternalLink size={16} />
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