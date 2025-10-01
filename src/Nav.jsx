import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./Img/logo.jpeg"; // replace with your logo path
import FadeInOnScroll from "./FadeInOnScroll";
import SignupForm from "./SignupForm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Features", "Highlights", "Contacts"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 ">
        {/* Logo */}
        <div className="flex-shrink-0">
  
         <FadeInOnScroll>
                    <div className="relative h-16 w-16 rounded-3xl overflow-hidden logo-container">
  <img
    src={logo}
    alt="ApexCore Logo"
    className="h-full w-full object-cover rounded-3xl relative z-10"
  />

  {/* Shimmer overlay */}
  <span className="logo-shimmer"></span>
</div>



         </FadeInOnScroll>

                               
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((item) => (
          <FadeInOnScroll>
              <Link
              key={item}
              to={item.toLowerCase("about")}
              smooth={true}
              duration={700}
              className="relative font-semibold text-lg cursor-pointer 
                bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent
                hover:before:scale-x-100 before:transition-all before:duration-500
                before:content-[''] before:absolute before:left-0 before:-bottom-1
                before:h-[2px] before:w-full before:scale-x-0 before:origin-left
                before:bg-gradient-to-r before:from-blue-600 before:to-green-600"
            >
              {item}
            </Link>
          </FadeInOnScroll>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
        <FadeInOnScroll>
            <button
  className="relative px-6 py-3 font-semibold text-white rounded-full 
    bg-gradient-to-r from-blue-600 to-green-600 
    overflow-hidden transition-transform duration-300 
    hover:scale-110 hover:rotate-1"

    onClick={() => setShowForm(true)}
>
  <span className="relative z-10">Get Started</span>

  {/* Glow effect layer */}
  <span className="glow-slide"></span>
</button>
        </FadeInOnScroll>






        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <FaTimes className="h-8 w-8 text-blue-700" />
            ) : (
              <FaBars className="h-8 w-8 text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/95 shadow-lg transform transition-transform duration-500 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes className="h-8 w-8 text-blue-700" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 mt-10">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={700}
              onClick={() => setMobileOpen(false)}
              className="relative font-semibold text-xl cursor-pointer 
                bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent
                hover:before:scale-x-100 before:transition-all before:duration-500
                before:content-[''] before:absolute before:left-0 before:-bottom-1
                before:h-[2px] before:w-full before:scale-x-0 before:origin-left
                before:bg-gradient-to-r before:from-blue-600 before:to-green-600"
            >
              {item}
            </Link>
          ))}

          {/* Mobile CTA */}
   {/* Mobile CTA */}
<button
  className="relative px-6 py-3 font-semibold text-white rounded-full 
    bg-gradient-to-r from-blue-600 to-green-600 
    overflow-hidden transition-transform duration-300 
    hover:scale-110 hover:rotate-1"

    onClick={() => setShowForm(true)}
>
  <span className="relative z-10">Get Started</span>

  {/* Infinite sliding shimmer overlay (uses .glow-slide CSS above) */}
  <span className="glow-slide" />
</button>







        </div>
      </div>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </nav>
  );
}
