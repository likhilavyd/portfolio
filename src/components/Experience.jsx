import "../styles/Experience.css";
import { useState } from "react";
import CertificationModal from "./CertificationModal";
import innovortexCert from "../assets/certifications/Innovortex 2.0 CoP.png";
import hackOrbit from "../assets/certifications/HackOrbit.png";
import rablo from "../assets/certifications/RabloI.png";
import ideaGenCert from "../assets/certifications/IdeaGen CoP.png";
import gdscCert from "../assets/certifications/GDSC CoA.png";
import agentAICert from "../assets/certifications/Agent AI.png";
import leanInCert from "../assets/certifications/Lean In CoR.png";
import gdgcCert from "../assets/certifications/GDGC CoA.png";

function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const certifications = {
    innovortex: { title: "Innovortex 2.0 Hackathon", image: innovortexCert },
    ideagen: { title: "IdeaGen Hackathon", image: ideaGenCert },
    hackorbit: { title: "HackOrbit Hackathon - 2025", image: hackOrbit },
    rablo: { title: "24-Hour UI/UX Design Hackathon - Rablo.In", image: rablo },
    gdsc: { title: "GDSC - Gen AI 2024", image: gdscCert },
    agentai: { title: "Agent AI", image: agentAICert },
    leanin: { title: "Lean In - Basic Coding & DSA (C++)", image: leanInCert },
    gdgc: { title: "Google Developer Groups on Campus - Web Development", image: gdgcCert }
  };

  const openModal = (certKey) => {
    setSelectedCertification(certifications[certKey]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertification(null);
  };
  return (
    <section id="experience" className="section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-description">During my college, I've volunteered to take part in many societies, programs, cohorts and internships.</p>
      <p className="experience-description">You can view them here along with the certifications:</p>
      
      <section className="scroll-section">
        <br />
        <div className="scroll-container">

          {/* Societies Section */}
          <div className="card">
            <h3>Societies</h3>
            <p>I played the following roles:</p>
              <p>IEEE - IGDTUW</p>
              <ul className="card-list">
                <li>Event Management Associate (2025-26)</li>
                <li>Technical Associate (2025-26)</li>
                <li>Event Management Junior Executive Coordinator (2024-25)</li>
              </ul>
              <p>Technoliterati - IGDTUW</p>
              <ul className="card-list">
                <li>Technoliterati Public Relations Coordinator (2024-25)</li>
              </ul>
          </div>
          
          {/* Hackathons Section */}
          <div className="card">
            <h3>Hackathons</h3>
            <p>I participated in the following hackathons:</p>
            <ul className="card-list">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('innovortex');
                  }}
                >
                  Innovortex 2.0 Hackathon
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('ideagen');
                  }}
                >
                  IdeaGen Hackathon
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('hackorbit');
                  }}
                >
                  HackOrbit Hackathon - 2025
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('rablo  ');
                  }}
                >
                  24-Hour UI/UX Design Hackathon - Rablo.In
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="card">
            <h3>Programs</h3>
            <p>I took part in the following programs:</p>
            <ul className="card-list">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('gdsc');
                  }}
                >
                  GDSC - Gen AI 2024
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('agentai');
                  }}
                >
                  Agent AI
                </a>
              </li>
            </ul>
          </div>

          {/* Cohorts Section */}
          <div className="card">
            <h3>Cohorts</h3>
            <p>I was a mentee in the following cohorts:</p>
            <ul className="card-list">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('leanin');
                  }}
                >
                  Lean In - Basic Coding & DSA (C++)
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    openModal('gdgc');
                  }}
                >
                  Google Developer Groups on Campus - Web Development
                </a>
              </li>
            </ul>
          </div>
          
          {/* Open Sourcing Section */}
          <div className="card">
            <h3>Open Sourcing</h3>
            <p>I did Open Sourcing in the following:</p>
            <ul className="card-list">
              <li>GSSoC - GirlScript Foundation</li>
              <li>OSCI - Open Source Connect</li>
            </ul>
          </div>
        </div> 
      </section>

      <CertificationModal 
        isOpen={modalOpen}
        onClose={closeModal}
        certification={selectedCertification}
      />
    </section>
  );
}

export default Experience;