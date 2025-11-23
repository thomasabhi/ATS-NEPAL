import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const Privacy = lazy(() => import("./pages/Privacy"));
const FAQ = lazy(() => import("./pages/FAQ"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactUs = lazy(() => import("./pages/Contact"));

// Fallback loader component
const Loader = () => <div className="text-center p-10">Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: "/features",
    element: (
      <Suspense fallback={<Loader />}>
        <Features />
      </Suspense>
    )
  },
  {
    path: "/privacy-policy",
    element: (
      <Suspense fallback={<Loader />}>
        <Privacy />
      </Suspense>
    )
  },
  {
    path: "/faq",
    element: (
      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>
    )
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    )
  },
  {
    path: "/footer",
    element: (
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    )
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactUs />
      </Suspense>
    )
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    )
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
