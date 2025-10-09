import React, { useState, useEffect } from 'react';
import FadeIn from './FadeInOnScroll';
import star from './Img/stars.png';
import SignupForm from "./SignupForm";

const Testi = () => {
  const allMessages = [
    {
      text: "The Smart Earner Bot from ApexCore has been a total breakthrough for me. It's simple, reliable, and incredibly effective — I've seen consistent results without the stress of manual trading. ApexCore really outdid themselves with this innovation; it feels like having a professional trader working for me 24/7. - Blessing A., Lagos",
    },
    {
      text: "Since I started using the Smart Earner Bot from ApexCore, my trading has become effortless. It analyzes the markets better than I ever could and executes trades with precision. I finally feel in control and stress-free. - Chinedu K., Abuja",
    },
    {
      text: "The Smart Earner Bot by ApexCore is the best decision I've made this year. It works quietly in the background, making consistent profits while I focus on other things. ApexCore truly understands what traders need. - Amara O., Port Harcourt",
    },
    {
      text: "I was skeptical at first, but the Smart Earner Bot from ApexCore proved itself fast. The accuracy and risk management are impressive — it feels like trading with a pro's discipline. Huge thanks to ApexCore for this tool. - Tunde E., Ibadan",
    },
    {
      text: "With ApexCore's Smart Earner Bot, trading has never been this easy. It removes the emotions, follows the data, and delivers steady results. ApexCore really built something special for traders who want consistency. - Joy C., Enugu",
    },
    {
      text: "The Smart Earner Bot by ApexCore has simplified my trading life completely. I don't spend hours analyzing charts anymore — the bot does it all with precision. It's reliable, smart, and worth every bit of trust. - Michael O., Lagos",
    },
  ];

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [itemVisible, setItemVisible] = useState([false, false, false]);
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState(null);
  

  // Added formData state for inputs
 
  // Added your working Google Apps Script URL


  useEffect(() => {
    let currentPage = 0;

    const switchMessages = () => {
      currentPage = currentPage === 0 ? 1 : 0;
      setDisplayedMessages(allMessages.slice(currentPage * 3, currentPage * 3 + 3));
      setItemVisible([false, false, false]);
      setTimeout(() => setItemVisible([true, false, false]), 200);
      setTimeout(() => setItemVisible([true, true, false]), 500);
      setTimeout(() => setItemVisible([true, true, true]), 900);
    };

    setDisplayedMessages(allMessages.slice(0, 3));
    setTimeout(() => setItemVisible([true, false, false]), 100);
    setTimeout(() => setItemVisible([true, true, false]), 500);
    setTimeout(() => setItemVisible([true, true, true]), 900);

    const interval = setInterval(switchMessages, 6000);

    return () => clearInterval(interval);
  }, []);
  
  // New useEffect hook to handle form success and trigger the Facebook Pixel event
  useEffect(() => {
    if (status === 'succeeded') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CompleteRegistration');
      }
      setShowSuccessModal(true);
      closeForm();
    }
  }, [status]);

  // Added handleChange function to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Updated handleSubmit function to use fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: urlEncodedData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setStatus('succeeded');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="testimonials" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="w-full max-w-[90%] sm:max-w-4xl mx-auto">
        <h2
          className="capitalize text-[1.5rem] xs:text-[2rem] sm:text-3xl text-center font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent
                 before:from-blue-600 before:to-green-600  mb-6 sm:mb-8 md:mb-12"
        >
          Some of Our Traders Success stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 xs:gap-6" aria-live="polite">
          {displayedMessages.map((testimonial, index) => (
            <div
              key={index}
              className={`p-4 xs:p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col transition-opacity duration-500 ease-in-out
                ${itemVisible[index] ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={star}
                alt="Five-star rating"
                className="w-25 xs:w-8 h-6 xs:h-8 mb-2"
              />
              <p
                className="text-gray-600 text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] font-medium leading-relaxed flex-grow"
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

       
      </div>
      <div className="flex justify-center items-center mt-[4em]">
         <button
      
                  onClick={() => setShowForm(true)}
                    className="relative px-8 md:px-20 py-3 font-semibold text-white rounded-full 
                    bg-gradient-to-r from-blue-600 to-green-600 
                    overflow-hidden transition-transform duration-300 
                    hover:scale-110 hover:rotate-1"
                  >
                    <span className="relative z-10">Register Now</span>
                    <span className="glow-slide"></span>
                  </button>
      </div>
        {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Testi;