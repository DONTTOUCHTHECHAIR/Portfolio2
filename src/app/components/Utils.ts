export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Update the URL hash without scrolling again or reloading
    window.history.replaceState(null, '', `/#${id}`);
  }
};