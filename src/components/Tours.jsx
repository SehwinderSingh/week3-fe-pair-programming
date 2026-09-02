import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>
      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour1} className="tour-img" alt="Tibet Adventure" />
            <p className="tour-date">august 26th, 2027</p>
          </div>
          <div className="tour-info">
            <div className="tour-title"><h4>Tibet Adventure</h4></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p><span><i className="fas fa-map"></i></span>china</p>
              <p>from €2100</p>
              <p>6 days</p>
            </div>
          </div>
        </article>
        {/* repeat for tour2 / tour3 / tour4 */}
      </div>
    </section>
  );
};

export default Tours;