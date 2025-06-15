import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online store with seamless user experience',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      tags: ['React', 'Node.js']
    },
    {
      title: 'Corporate Website',
      description: 'Professional business presence with modern design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      tags: ['Next.js', 'CMS']
    }
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="project-card group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-black border border-white/10 group-hover:border-[#ff5722]/50 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-[#ff5722]/20 text-[#ff5722] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
