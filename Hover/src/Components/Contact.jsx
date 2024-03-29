import React from 'react'

const Contact = () => {
  return (
    <div>
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="Contact.css" />
  {/* Fontawesome icon */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossOrigin="anonymous"
  />
  <section className="contact-section">
    <div className="contact-bg">
      <h3>Get in Touch with Us</h3>
      <h2>contact us</h2>
      <div className="line">
        <div />
        <div />
        <div />
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste
        facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis
        quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.
      </p>
    </div>
    <div className="contact-body">
      <div className="contact-info">
        <div>
          <span>
            <i className="fas fa-mobile-alt" />
          </span>
          <span>Phone No.</span>
          <span className="text">1-2392-23928-2</span>
        </div>
        <div>
          <span>
            <i className="fas fa-envelope-open" />
          </span>
          <span>E-mail</span>
          <span className="text">mail@company.com</span>
        </div>
        <div>
          <span>
            <i className="fas fa-map-marker-alt" />
          </span>
          <span>Address</span>
          <span className="text">
            2939 Patrick Street, Vicotria TX, United States
          </span>
        </div>
        <div>
          <span>
            <i className="fas fa-clock" />
          </span>
          <span>Opening Hours</span>
          <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input type="email" className="form-control" placeholder="E-mail" />
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <textarea
            rows={5}
            placeholder="Message"
            className="form-control"
            defaultValue={""}
          />
          <input
            type="submit"
            className="send-btn"
            defaultValue="send message"
          />
        </form>
        <div>
          <img src="contact-png.png" alt="" />
        </div>
      </div>
    </div>
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
        width="100%"
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
    <div className="contact-footer">
      <h3>Follow Us</h3>
      <div className="social-links">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
        <a href="#" className="fab fa-youtube" />
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default Contact
