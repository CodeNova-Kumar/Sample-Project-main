import React from 'react'

const Home = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Emergency Doctor Services</title>
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.1.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
  />
  <link rel="stylesheet" href=".css" />
  {/* <header>
    <div className="logo">
      <img src="images/logo3.png" alt="" />
    </div>
    <nav className="navbar">
      <a href="#Home">Home</a>
      <a href="#Home">About</a>
      <a href="#Home">Service</a>
      <a href="#Home">Contact</a>
      <a href="#Home">Login</a>
      <a href="#Home">Signup</a>
    </nav>
    <div className="right-icons">
      <div id="menu-bars" className="fas fa-bars" />
      <div className="btn">Make Appointment</div>
    </div>
  </header> */}
  {/* header section ended */}
  {/* Home section started */}
  <div className="main-home">
    <div className="home">
      <div className="home-left-content">
        <span>welcome to Emergency Doctor Services</span>
        <h2>
          We take care our
          <br /> Patients Healths
        </h2>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          numquam veniam porro eius, fugiat vero ut ipsum libero
        </p>
        <div className="home-btn">
          <a href="">Read More</a>
          <a className="homebtnsec" href="">
            Appointment
          </a>
        </div>
      </div>
      <div className="home-right-content">
        <img src="images/hero2.png" alt="" />
      </div>
    </div>
  </div>
  <div className="technology">
    <div className="main-technology">
      <div className="inner-technology">
        <span />
        <i className="fi fi-tr-hands-heart" />
        <h2>Great Doctors</h2>
        <p>
          Our diverse team of 120+ doctors, including physicians and clinicians,
          share a common passion to provide the highest quality of world-class
          care.
        </p>
      </div>
      <div className="inner-technology">
        <span />
        <i className="fi fi-rr-doctor" />
        <h2>Multi-Specialty Care</h2>
        <p>
          An ISO 9001-2000 certified, NABH Accredited multi-specialty hospital
          offering a patient-centric care to people of all age group, backed by
          the NABL Accredited Laboratories.
        </p>
      </div>
      <div className="inner-technology">
        <span />
        <i className="fi fi-tr-user-md" />
        <h2>24/7 Support</h2>
        <p>
          Fully equipped to offer medical assistance for all kinds of
          emergencies including pediatrics (facilities for Children). Backed by
          Ambulance with ventilator support.
        </p>
      </div>
    </div>
  </div>
  {/* home section ends */}
  {/* About us section started */}
  <div className="main-about">
    <div className="about-heading">About Us</div>
    <div className="inner-main-about">
      <div className="about-inner-content-left">
        <img src="images/about1.png" alt="" />
      </div>
      <div className="about-inner-content">
        <div className="about-right-content">
          <h2>
            We're setting Standards in Research <br /> what's more, Critical
            Care.
          </h2>
          <p>
            We provide the most full medical services, so every person could
            have the pportunity o receive qualitative medical help.
          </p>
          <p className="aboutsec-content">
            Our Clinic has grown to provide a world class facility for the
            treatment of tooth loss, dental cosmetics and bore advanced
            restorative dentistry. We are among the most qualified implant
            providers in the AUS with over 30 years of uality training and
            experience.
          </p>
          <button className="aboutbtn">Read More</button>
        </div>
      </div>
    </div>
  </div>
  {/* About us section ends */}
  {/* our doctors */}
  <div className="main-doctors">
    <div className="doctors-heading">
      <h2>Our Doctors</h2>
    </div>
    <div className="main-inner-doctor">
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team1.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.Awasthi</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team2.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.bhatiya</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team3.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.Patel</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team4.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.Sinha</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team5.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.Agarwal</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
      <div className="doc-poster">
        <div className="doc-icons">
          <i className="fa-solid fa-share" />
          <i className="fa-solid fa-eye" />
          <i className="fa-solid fa-heart" />
        </div>
        <img src="images/team6.jpg" alt="" />
        <div className="doc-details">
          <h2>Dr.Jain</h2>
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-instagram" />
        </div>
      </div>
    </div>
  </div>
  {/* our doctors ended */}
  {/* our services */}
  <div className="our-service">
    <div className="service-heading">
      <h2>Our Services</h2>
    </div>
    <div className="main-services">
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-solid fa-truck-medical" />
        </div>
        <h3>Ambulance Services</h3>
        <p>
          We offer extensive medical procedures to outbound &amp; inbound
          patients what it is and we are very proud achievement staff.
        </p>
      </div>
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-regular fa-hospital" />
        </div>
        <h3>Emergency &amp; Trauma</h3>
        <p>
          The world-class Emergency &amp; Trauma facility is operational 24×7
          with all the modern technology and infrastructure to provide the best
          emergency and trauma support.
        </p>
      </div>
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-regular fa-heart" />
        </div>
        <h3>Cardiology (Heart Care)</h3>
        <p>
          {" "}
          Our team of best heart specialists in Lucknow and Cardiothoracic
          surgeons in Lucknow has trained at the top institutes in India and
          abroad to perform many treatments and procedures in Cardiology
        </p>
      </div>
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-solid fa-notes-medical" />
        </div>
        <h3>Gynaecological Clinic</h3>
        <p>
          Our team of the best Gynaecologist in Lucknow and best Obstetrician in
          Lucknow provides pre-pregnancy and pregnancy care, management of
          high-risk pregnancies/late pregnancies
        </p>
      </div>
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-solid fa-list-check" />
        </div>
        <h3>Urology Hospital</h3>
        <p>
          Backed by the best Female urologists in Lucknow as well as male
          urologist in Lucknow, our treatments match the international standards
          and include, prostate disease treatment, urology cancer treatment,
          erectile dysfunction treatment, stone in ureter treatment, stone in
          kidney treatment, stone in urethra treatment, stone in bladder
          treatment, andrology treatment and more through laparoscopic urology
          procedures and reconstructive urology surgery.
        </p>
      </div>
      <div className="inner-services">
        <div className="service-icon">
          <i className="fa-solid fa-user-doctor" />
        </div>
        <h3>Anesthesia and Pain Management</h3>
        <p>
          Our team of experts Anesthesiologists in Lucknow focuses on optimal
          patient safety and satisfaction. Physician anesthesiologists
          specialize in anesthesia care, pain management, and critical care
          medicine. We have the latest equipment in anesthesia care, which give
          us the ability to provide timely and efficient care at our health
          center. We and our best anesthesiologist doctors in Lucknow are
          engineered in ways to focus on the individual needs of the patient..
        </p>
      </div>
    </div>
  </div>
  {/* our services ended */}
  {/* customer review */}
  <div className="main-review">
    <section>
      <div className="review-heading">
        <h1>Our Customers Review</h1>
      </div>
      <div className="main-inner-review">
        <div className="review-inner-content">
          <div className="review-box">
            <img src="images/pic1.jpg" alt="" />
            <h2>Areeba Shakeel</h2>
            <div className="review-stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <div className="review-text">
              <p>
                Once I found a doctor who matched my criteria, booking an
                appointment was a breeze. The website seamlessly integrated with
                the doctor's scheduling system, so I could see real-time
                availability and choose a time slot that worked for me. I also
                appreciated the reminders I received leading up to my
                appointment, which helped me stay organized.{" "}
              </p>
            </div>
          </div>
          <div className="review-box">
            <img src="images/pic2.jpg" alt="" />
            <h2>Bharvi Sharma</h2>
            <div className="review-stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <div className="review-text">
              <p>
                During my visit, I found the doctor to be knowledgeable,
                attentive, and compassionate. It was evident that they took the
                time to listen to my concerns and provide personalized care. The
                entire process, from booking the appointment to receiving
                treatment, was smooth and efficient thanks to Emergency Doctor
                Services.
              </p>
            </div>
          </div>
          <div className="review-box">
            <img src="images/pic3.jpg" alt="" />
            <h2>Irshad Ansar</h2>
            <div className="review-stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
            </div>
            <div className="review-text">
              <p>
                Overall, I highly recommend Emergency Doctor Services to anyone
                in need of medical care. Whether you're looking for a primary
                care physician, specialist, or other healthcare provider, this
                website makes it easy to find the right match and schedule
                appointments with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* customer review */}
  {/* footer */}
  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  {/* footer ended */}
</>

    </div>
  )
}

export default Home
