"use client";

import { useState } from 'react';
import { projects, getFeaturedProjects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const displayedProjects = filter === 'featured' ? getFeaturedProjects() : projects;
  
  const categories = ['Todos', 'Destacados'];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mis Proyectos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Una selección de proyectos que he desarrollado, mostrando diferentes tecnologías y enfoques de desarrollo.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Todos ({projects.length})
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  filter === 'featured'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                Destacados ({getFeaturedProjects().length})
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {displayedProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                No hay proyectos para mostrar
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intenta con un filtro diferente o vuelve más tarde.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
