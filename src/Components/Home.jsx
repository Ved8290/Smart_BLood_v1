import React, { useState } from 'react';
import { FaHeartbeat, FaTint, FaHandsHelping, FaUserCheck, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './Home.css';
import TypesOfDoantion from './typesofdonations';

const bloodData = {
  'O-': { donateTo: 'All Groups', receiveFrom: 'O-' },
  'O+': { donateTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
  'A-': { donateTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
  'A+': { donateTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
  'B-': { donateTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
  'B+': { donateTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
  'AB-': { donateTo: 'AB+, AB-', receiveFrom: 'AB-, A-, B-, O-' },
  'AB+': { donateTo: 'AB+', receiveFrom: 'All Groups' },
};

const Home = () => {
  const [selectedBlood, setSelectedBlood] = useState('O-');

  return (
    <div className="home-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Be a Lifesaver. Donate Blood.</h1>
          <p>
            Join India’s largest real-time blood availability platform. Help save lives by
            donating blood or finding donors near you.
          </p>
          <a href="/findblood">
          <button className="btn-primary">Check Live Blood Stock Availability</button></a>
        </div>
        <div className="hero-right">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/273/517/non_2x/blood-donor-save-life-banner-poster-blood-donation-design-vector.jpg"
            alt="Blood Donation"
          />
        </div>
      </section>

      {/* Importance Section */}
      <section className="importance-section">
        <h2><FaHeartbeat color="#b71c1c" /> Why Donate Blood?</h2>
        <div className="importance-cards">
          <div className="card">
            <FaHandsHelping size={40} color="#d32f2f" />
            <h3>Save Lives</h3>
            <p>One donation can save up to 3 lives. Your single act matters!</p>
          </div>
          <div className="card">
            <FaTint size={40} color="#d32f2f" />
            <h3>Blood Can't be Manufactured</h3>
            <p>Blood donation is the only source of blood for patients in need.</p>
          </div>
          <div className="card">
            <FaUserCheck size={40} color="#d32f2f" />
            <h3>Stay Healthy</h3>
            <p>Regular donation helps reduce heart risks & improves blood cell production.</p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="rules-section">
        <h2><FaCheckCircle color="#388e3c" /> Blood Donation Rules & Eligibility</h2>
        <ul>
          <li><FaCheckCircle color="#388e3c" /> Age: 18-65 years</li>
          <li><FaCheckCircle color="#388e3c" /> Weight: Minimum 50 kg</li>
          <li><FaCheckCircle color="#388e3c" /> No alcohol or illness in the last 48 hours</li>
          <li><FaTimesCircle color="#d32f2f" /> No tattoos or piercings in the last 6 months</li>
          <li><FaTimesCircle color="#d32f2f" /> Not eligible if pregnant or anemic</li>
        </ul>
      </section>

      {/* Compatibility Section */}
      <section className="compatibility-section">
        <h2><FaTint color="#b71c1c" /> Blood Group Compatibility</h2>
        <div className="blood-group-buttons">
          {Object.keys(bloodData).map((group) => (
            <button
              key={group}
              className={`blood-btn ${selectedBlood === group ? 'active' : ''}`}
              onClick={() => setSelectedBlood(group)}
              aria-label={`Select blood group ${group}`}
            >
              {group}
            </button>
          ))}
        </div>
        <div className="compatibility-info">
          <h3>{selectedBlood} Compatibility</h3>
          <p><strong>Can Donate To:</strong> {bloodData[selectedBlood].donateTo}</p>
          <p><strong>Can Receive From:</strong> {bloodData[selectedBlood].receiveFrom}</p>
        </div>
      </section>

      {/*finding camp near me */}

      <TypesOfDoantion />

      <section className="blood-banner-section">
  <div className="blood-banner-content">
    <h2>
      <i className="fas fa-hand-holding-droplet"></i> Be the Reason for Someone’s Heartbeat
    </h2>
    <p className="banner-quote">
      “Donate blood, save lives. A small action can have a huge impact.”
    </p>
    <p className="banner-subtext">
      Blood donation is a noble act that costs you nothing but gives someone a new life. Explore nearby blood donation camps and be the hero in someone’s story.
    </p>
  </div>



  <div className="blood-banner-image-wrapper">
    <img
      src="https://www.abbott.in/corpnewsroom/diagnostics/breaking-down-the-process-of-blood-donation/_jcr_content/root/rarticle_container/image.coreimg.85.1024.jpeg/1702932248769/blood-donation-960x430.jpeg"
      alt="Blood donation"
      className="blood-banner-image"
    />
    <button
      className="blood-banner-button"
      onClick={() =>
        window.open(
          'https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/campSchedule.cnt',
          '_blank'
        )
      }
    >
      Find Blood Donation Camps
    </button>
  </div>
</section>


      {/* Final CTA */}
      <section className="final-cta-section">
        <h2>Ready to Save Lives?</h2>
        <p>Become a donor or find urgent blood near you right now!</p>
        <a href="https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorLogin.cnt">
        <button className="btn-primary">Join the Movement</button></a>
      </section>

      {/* Footer */}
      <footer className="footer-section">
       
       <p className="footer-disclaimer">
  Disclaimer: This website uses publicly available data from the official <a href="https://eraktkosh.mohfw.gov.in/eraktkoshPortal/#/" target="_blank" rel="noopener noreferrer">eRaktKosh</a> portal (Ministry of Health & Family Welfare, Government of India) for demonstration purposes only. We do not claim ownership of the data or API, and this platform is not intended for commercial use.
</p>
 <p>© 2025 SmartBlood | Together, we save lives</p>
      </footer>
    </div>
  );
};

export default Home;
