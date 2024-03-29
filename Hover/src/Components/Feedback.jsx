import React from 'react'

const Feedback = () => {
  return (
    <div>
      <>
  {/* *******  Link To CSS Style Sheet  ******* */}
  <link rel="stylesheet" type="text/css" href="style.css" />
  {/* *******  Font Awesome Icons Link  ******* */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  {/* *******  Link To Goggle Fonts  *******  */}
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,800;1,900&display=swap"
    rel="stylesheet"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Feedback Section</title>
  <div className="container">
    <main className="row">
      {/*  *******   Left Section (Column) Starts   *******  */}
      <section className="col left">
        {/*  *******   Title Starts   *******  */}
        <div className="contactTitle">
          <h2>Feedback</h2>
          <p>
          I want EDS team to respond to my feedback

          </p>
        </div>
        {/*  *******   Title Ends   *******  */}
        {/*  *******   Contact Info Starts   *******  */}
        <div className="contactInfo">
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-phone" />
            </div>
            <div className="details">
              <span>Phone</span>
              <span>+00 110 111 00</span>
            </div>
          </div>
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="details">
              <span>Email</span>
              <span>name.tutorial@gmail.com</span>
            </div>
          </div>
          <div className="iconGroup">
            <div className="icon">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div className="details">
              <span>Location</span>
              <span>X Street, Y Road, San Fransisco</span>
            </div>
          </div>
        </div>
        {/*  *******   Contact Info Ends   *******  */}
        {/*  *******   Social Media Starts   *******  */}
        <div className="socialMedia">
          <a href="#">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter" />
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
        {/*  *******   Social Media Ends   *******  */}
      </section>
      {/*  *******   Left Section (Column) Ends   *******  */}
      {/*  *******   Right Section (Column) Starts   *******  */}
      <section className="col right">
        {/*  *******   Form Starts   *******  */}
        <form className="messageForm">
          <div className="inputGroup halfWidth">
            <input type="text" name="" required="required" />
            <label>Your Name</label>
          </div>
          <div className="inputGroup halfWidth">
            <input type="email" name="" required="required" />
            <label>Email</label>
          </div>
          <div className="inputGroup fullWidth">
            <input type="text" name="" required="required" />
            <label>Subject</label>
          </div>
          <div className="inputGroup fullWidth">
            <textarea required="required" defaultValue={""} />
            <label>Say Something</label>
          </div>
          <div className="inputGroup fullWidth">
            <button>Send Message</button>
          </div>
        </form>
        {/*  *******   Form Ends   *******  */}
      </section>
      {/*  *******   Right Section (Column) Ends   *******  */}
    </main>
  </div>
</>

    </div>
  )
}

export default Feedback
