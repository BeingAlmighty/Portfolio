import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      color: 'red',
      title: 'AI Chatbot',
      description: 'Built using GPT-4 and React.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    },
    {
      color: 'blue',
      title: 'Food Ordering App',
      description: 'React Native + Firebase stack.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    },
    {
      color: 'green',
      title: 'Portfolio Website',
      description: 'Personal brand using Next.js.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    },
    {
      color: 'yellow',
      title: 'Task Manager',
      description: 'Task assignment + leaderboard.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Recent <span className="text-[#ff5722]">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore our latest work and see how we bring ideas to life
          </motion.p>
        </div>
        
        <div className="project-cards">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`project-card ${project.color}`}
            >
              <div className="project-content">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button>View Project</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
