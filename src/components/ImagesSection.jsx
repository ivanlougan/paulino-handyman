import blinds from "../assets/images/chair.png"
import door from "../assets/images/door.png"
import tap from "../assets/images/tap.png"

function ImagesSection() {
  return (
    <section className="images-section">
      <div className="image-wrapper">
        <img src={blinds} alt="Blinds installation" />
      </div>

      <div className="image-wrapper">
        <img src={door} alt="Door handle fitting" />
      </div>

      <div className="image-wrapper">
        <img src={tap} alt="Plumbing repair" />
      </div>
    </section>
  )
}

export default ImagesSection
