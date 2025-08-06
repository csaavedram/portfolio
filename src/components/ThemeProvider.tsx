"use client";

import { useEffect } from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Aplicación correcta del tema inicial con Tailwind
    const theme = localStorage.getItem('theme') || 'dark';
    const html = document.documentElement;
    
    console.log('🚀 Theme provider initializing with:', theme);
    
    // Tailwind solo necesita la clase 'dark'
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    console.log('✅ Initial theme applied:', theme, 'Has dark class:', html.classList.contains('dark'));
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
