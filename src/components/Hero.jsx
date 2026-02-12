function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>PAULINO HANDYMAN SERVICES IN PRESTON</h1>
            <p>
              Based in Preston, Paulino Handyman Services delivers dependable
              home repairs, general maintenance, and property improvements.
              Every project is completed with care, professionalism, and
              attention to detail.
            </p>
          </div>

          <form className="contact-form">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            {/* <input type="text" placeholder="Phone" /> */}
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
