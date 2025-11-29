import React from "react";
import '../App.css';


const logos = [
  { src: "/LOGOSlider/1.jpg", href: "http://india.gov.in/" },
  { src: "/LOGOSlider/2.jpg", href: "http://india.gov.in/" },
  { src: "/LOGOSlider/3.jpg", href: "https://www.incredibleindia.org/content/incredible-india-v2/en.html" },
  { src: "/LOGOSlider/4.jpg", href: "https://www.digitalindia.gov.in/" },
  { src: "/LOGOSlider/5.jpg", href: "https://pmnrf.gov.in/en/" },
  { src: "/LOGOSlider/6.jpg", href: "https://www.makeinindia.com/" },
  { src: "/LOGOSlider/7.jpg", href: "http://goidirectory.nic.in/" },
  { src: "/LOGOSlider/8.jpg", href: "https://www.mygov.in/" },
  { src: "/LOGOSlider/9.jpg", href: "https://www.eci.gov.in/" },
  { src: "/LOGOSlider/l0.jpg", href: "http://egazette.nic.in/" },
  { src: "/LOGOSlider/l1.jpg", href: "https://evisitors.nic.in/" },
  { src: "/LOGOSlider/14.jpeg", href: "https://data.gov.in/" },
  { src: "/LOGOSlider/13.jpg", href: "https://pgportal.gov.in/" },
];

const LogoScroll = () => {
  // Duplicate the array for seamless infinite scrolling
  const scrollingLogos = [...logos, ...logos];

  return (
    <div className="slider">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">Our Clients</h1>
      <ul>
        {scrollingLogos.map((logo, index) => (
          <li key={index}>
              <img src={logo.src} alt="" />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoScroll;
