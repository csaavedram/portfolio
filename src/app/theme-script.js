// Script para establecer el tema inmediatamente (antes de la hidratación)
(function() {
  try {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    // Si hay error, usar tema oscuro por defecto
    document.documentElement.classList.add('dark');
  }
})();
