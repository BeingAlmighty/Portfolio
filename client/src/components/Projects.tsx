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
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Recent <span className="text-[#ff5722]">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Explore our latest work and see how we bring ideas to life
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`project-card ${project.color} w-full h-80 sm:h-96`}
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-bold px-4 text-center">
                {project.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
