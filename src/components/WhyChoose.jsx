
import wall from "../assets/images/wall.png"

function WhyChoose() {
  return (
    <section className="why">
      <img
        src={wall}
        alt="handyman"
      />

      <div className="why-text">
        <h1>Why Choose Us?</h1>
        <ul>
          <li className="tick">Reliable & punctual service</li>
          <li className="tick">High-quality workmanship</li>
          <li className="tick">No job too small</li>
          <li className="tick">Fair pricing with free quotes</li>
          <li className="tick">Fully insured for peace of mind</li>
          <li className="tick">Friendly local Preston service</li>
        </ul>
      </div>
    </section>
  )
}

export default WhyChoose
