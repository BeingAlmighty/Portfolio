import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      subtitle: 'Web Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=500&fit=crop&crop=center',
      description: 'Modern shopping experience with React and Node.js'
    },
    {
      title: 'Mobile Banking App',
      subtitle: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop&crop=center',
      description: 'Secure financial app with React Native'
    },
    {
      title: 'AI Analytics Dashboard',
      subtitle: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&crop=center',
      description: 'Real-time insights with machine learning'
    },
    {
      title: 'Healthcare Portal',
      subtitle: 'Healthcare Tech',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop&crop=center',
      description: 'Patient management system with telemedicine'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Recent <span className="text-[#ff5722]">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
          >
            Explore our latest work and see how we bring ideas to life
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="animated-card project-card-rect"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="card-glow"></div>
              <div className="card-corner-bottom"></div>
              <div className="hover-content">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3 className="project-title">{project.title}</h3>
                <button className="view-button">
                  View
                  <div className="icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
