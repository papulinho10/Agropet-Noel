import { createBrowserRouter, RouterProvider, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppMenu } from './components/WhatsAppMenu';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { motion, AnimatePresence } from 'motion/react';

function PageWrapper() {
  const location = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Scroll to top on initial load unless there's a hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[location.key] = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  const handleAnimationComplete = () => {
    if (navType === 'POP') {
      const savedPosition = scrollPositions.current[location.key];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      }
    } else {
      if (!location.hash) {
        window.scrollTo(0, 0);
      } else {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
        onAnimationComplete={handleAnimationComplete}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-green-500 selection:text-white">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <PageWrapper />
      <Footer />
      <WhatsAppMenu />
      <BackToTop />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/servicos/:id",
        element: <ServicePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
