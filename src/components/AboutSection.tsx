import Image from 'next/image';
import { aboutInfo } from '@/data/portfolio';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 pt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
                  <Image
                    src={aboutInfo.profileImage}
                    alt={`Foto de perfil de ${aboutInfo.name}`}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-70 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-50 -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hola, soy{' '}
                <span className="text-blue-600 dark:text-blue-400 animate-shimmer hover:animate-bounce transition-all duration-300 inline-block relative">{aboutInfo.name}</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                {aboutInfo.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {aboutInfo.description}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Tecnologías que uso:
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {aboutInfo.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {aboutInfo.email && (
                  <a
                    href={`mailto:${aboutInfo.email}`}
                    className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
                  >
                    Contactar
                  </a>
                )}
                {aboutInfo.github && (
                  <a
                    href={aboutInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                  >
                    GitHub
                  </a>
                )}
                {aboutInfo.linkedin && (
                  <a
                    href={aboutInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
