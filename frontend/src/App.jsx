import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import fevicon from "../src/assets/images/site_logo/fevicon_1.svg";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    // Cleanup the event listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // If the page is still loading, show the loader
  if (isLoading) {
    return (
      <div className="relative flex items-center justify-center bg-primary h-screen">
        {/* Orbit Loader */}
        <div className="relative flex items-center justify-center w-48 h-48 border rounded-full animate-loader before:absolute before:content-[''] before:inset-0 before:rounded-full before:border before:border-white before:border-t-transparent before:animate-spin">
          <img
            src={fevicon}
            alt="Site Favicon"
            className="w-24 h-24 rounded-full p-4 object-contain"
          />
        </div>
      </div>
    );
  }

  // Main application routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/industries" element={<Industries />} /> */}
      <Route path="/about" element={<AboutUs />} />
      {/* <Route path="/solutions" element={<Solutions />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
