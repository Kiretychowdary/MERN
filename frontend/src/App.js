import React, { useState } from 'react'; 
import './App.css';   
import './all.css';   
import videoFile from './assets/video1.mp4';  

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleShowRegistration = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  const handleHideRegistration = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="App">
      <section id="page1">
        <video className="video" autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
        </video>
        <header>
          <div className="logo">
            <h1>Pawsitive Pet Care</h1>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#page1">Home</a></li>
              <li><a href="#page2">Services</a></li>
              <li><a href="#about2">About Us</a></li>
              <li><a href="#page4">Registration</a></li>
              <li><a href="#page5">Login</a></li>
            </ul>
          </nav>
        </header>
        <div className="overlay0">
          <h1>Giving Pets the Care They Deserve.</h1>
          <p>Join us in providing the best care for your pets.</p>
        </div>
      </section>
      
      <section className="success-story">
        <div className="container">
          <h2 className="section-title">Real-Life Adoption Success Story</h2>
          <div className="story">
            <div className="story-image">
              <img src="/assets/bg.jpg" alt="Adopted Pet" />
            </div>
            <div className="story-content">
              <div className="quote-container">
                <div className="quote-icon">
                  <img src="/assets/quote.jpg" alt="Quote Icon" />
                </div>
                <p className="quote">"Adopting Max was one of the best decisions we ever made. He brings so much joy and love into our home every day."</p>
              </div>
              <p className="author">- Emily, Proud Pet Parent</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why">
        <h2>Why Choose Us?</h2>
        <p className="intro">With over 4 years of experience, we mark our presence across 18 cities in India, offering top-tier pet care, grooming, and training services.</p>
        <div className="features">
          <div className="feature">
            <img src="/assets/icon1.png" className="icon" alt="Personalized Pet Care Plans" />
            <h3>Personalized Pet Care Plans</h3>
            <p>Tailored services to suit each pet's unique needs and preferences.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon2.png" className="icon" alt="Holistic Wellness Approach" />
            <h3>Holistic Wellness Approach</h3>
            <p>Comprehensive services encompassing grooming, training.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon3.png" className="icon" alt="Certified Professional Team" />
            <h3>Certified Professional Team</h3>
            <p>Trained experts ensuring your pet receives the highest quality care.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon4.png" className="icon" alt="Convenience & Flexibility" />
            <h3>Convenience & Flexibility</h3>
            <p>Easy scheduling and a range of service options.</p>
          </div>
        </div>
        <br /><br /><h2>Our Services</h2>
      </section>

      <section className="serv" id="page2">
        <div className="container">
          <a href="/assets/grooming.html" className="box grooming">
            <h2>Pet Grooming</h2>
          </a>
          <a href="/assets/sitting.html" className="box sitting">
            <h2>Pet Sitting</h2>
          </a>
          <a href="/assets/walking.html" className="box walking">
            <h2>Dog Walking</h2>
          </a>
          <a href="/assets/boarding.html" className="box boarding">
            <h2>Pet Boarding</h2>
          </a>
          <a href="/assets/vet.html" className="box vet">
            <h2>Veterinary Care</h2>
          </a>
          <a href="/assets/train.html" className="box pet">
            <h2>Pet Training</h2>
          </a>
        </div>
      </section>

      <section id="about2">
        <div className="container2">
          <h1>About Us</h1>

          <section id="company-story">
            <div className="text-and-image">
              <div className="text2">
                <h2>Our Story</h2>
                <p>
                  Our journey began with a love for animals and a passion for providing top-quality pet care. We started as a small team of pet lovers, determined to change the way pet care is approached. Over the years, we’ve grown into a trusted name in pet services, offering a wide range of care options tailored to the unique needs of every pet.
                </p>
              </div>
              <div className="image2">
                <img src="/assets/pets.jpg" alt="Dog Image 1" />
              </div>
            </div>
          </section>

          <section id="mission2">
            <div className="text-and-image">
              <div className="text2">
                <h2>Our Mission</h2>
                <p>
                  Our mission is simple: to provide the highest quality of care and companionship for your beloved pets. We are committed to ensuring their safety, well-being, and happiness, treating every pet as if they were our own.
                </p>
              </div>
              <div className="image2">
                <img src="/assets/miss.webp" alt="Dog Image 2" />
              </div>
            </div>
          </section>

          <section id="team2">
            <h3>Meet Our Team</h3>
            <div className="team-member">
              <img src="https://www.plenodelafemp.es/wp-content/uploads/2014/10/speaker-3-600x670.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://tse1.mm.bing.net/th?id=OIP.qsuUPPkTxRUoS4SpNGZtkwHaHa&pid=Api&P=0&h=180" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Lead Pet Trainer</p>
            </div>
            <div className="team-member">
              <img src="https://e0.365dm.com/19/01/1600x900/skysports-sam-johnson-scotland_4563381.jpg" alt="Team Member 3" />
              <h3>Sam Johnson</h3>
              <p>Veterinary Expert</p>
            </div>
          </section>

          <section id="why-choose-us">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Experienced and certified pet care professionals</li>
              <li>Personalized services tailored to each pet’s needs</li>
              <li>Compassionate, loving care with a focus on safety</li>
              <li>Available 24/7 for emergency support</li>
              <li>Flexible packages for all types of pets</li>
            </ul>
          </section>
        </div>
      </section>

      <section className="hero" id="page4">
        <div className="content">
          <h1>Pawsome Opportunities Await: Join Our Team</h1>
          <p>Searching for a way to de-stress while enjoying the company of adorable animals and earning at the same time? Look no further! Pawspace is in search of dependable individuals who can offer pet care services. Register with us today if this aligns with your interests. Waste no time!</p>
          <button className="cta-btn" onClick={handleShowRegistration}>Join PawSpace</button>
        </div>
        <div className="image-gallery">
          <div className="image-item">
            <img src="/assets/reg1.jpeg" alt="Cute Dog 1" />
            <span className="paw-icon">🐾</span>
          </div>
          <div className="image-item">
            <img src="/assets/reg2.jpg" alt="Cute Dog 2" />
            <span className="paw-icon">🐾</span>
          </div>
          <div className="image-item">
            <img src="/assets/reg3.jpg" alt="Cute Dog 3" />
            <span className="paw-icon">🐾</span>
          </div>
          <div className="image-item">
            <img src="/assets/reg4.jpg" alt="Cute Dog 4" />
            <span className="paw-icon">🐾</span>
          </div>
        </div>
      </section>

      {showRegistrationForm && (
        <section className="registration-form-overlay">
          <div className="form-container">
            <div className="form-image">
              <img src="/assets/reg5.jpg" alt="Cute Dog" />
            </div>
            <div className="form-content">
              <h2>Become a part of our community and increase your earnings</h2>
              <form action="/register" method="POST">
                <input type="text" name="name" placeholder="Name" className="in" required />
                <input type="text" name="phone" placeholder="Phone Number" className="in" required />
                <input type="text" name="age" placeholder="Age" className="in" required />
                <input type="email" name="email" placeholder="Email" className="in" required />
                <input type="text" name="pin" placeholder="Pin code" className="in" required />
                <select name="city" required>
                  <option value="" disabled selected>Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </select>
                <input type="text" name="sub_area" placeholder="Sub Area" className="in" required />
                <input type="password" name="password" placeholder="Password" className="in" required />
                <button type="submit" className="cta-btn">Next</button>
              </form>
              <button className="cta-btn" onClick={handleShowRegistration}>Close</button>
            </div>
          </div>
        </section>
      )}

      <section id="page5">
        <div className="login">
          <h2>Login</h2>
          <form action="dashboard.html" method="post">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="registration.html">Register Here</a></p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
