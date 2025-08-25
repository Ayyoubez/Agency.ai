import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import OuWork from "./Components/OuWork";
import Teams from "./Components/Teams";
import ContactUs from "./Components/ContactUs";
import { Toaster } from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Toaster
        toastOptions={{
          success: {
            icon: <CheckCircle className="text-primary" />, // custom success icon
          },
        }}
      />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OuWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
