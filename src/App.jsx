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
          <button onClick={() => scrollToSection("hero")} className="hover:text-gray-400">Home</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-gray-400">Projects</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-gray-400">Skills</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center h-screen text-center px-4 pt-20">
        
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
          Building intelligent systems using machine learning, natural language processing, 
          and modern web technologies.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("projects")}
          className="bg-white text-black px-6 py-2 rounded-lg font-medium"
        >
          View Projects
        </motion.button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1,2,3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {index === 0 ? "AI Chatbot" : index === 1 ? "RAG System" : "Student Manager"}
              </h3>

              <p className="text-gray-400 mb-4">
                {index === 0
                  ? "Built a chatbot using Transformers with NLP pipeline."
                  : index === 1
                  ? "Built RAG system using embeddings and vector DB."
                  : "Python system to manage student performance."}
              </p>

              <div className="flex gap-4">
                <a href="#" className="border px-3 py-1 rounded hover:bg-white hover:text-black">
                  GitHub
                </a>
                <a href="#" className="border px-3 py-1 rounded hover:bg-white hover:text-black">
                  Live
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {["Python","Machine Learning","NLP","React","FastAPI","TensorFlow","PyTorch"].map((skill, i) => (
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