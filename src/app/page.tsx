import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="bg-black text-white">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
