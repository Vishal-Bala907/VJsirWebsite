const MarqueSection = () => {
  return (
    <div className="marque-section">
      <div
        className="marquee-wrapper text-slider"
        style={{
          background: "linear-gradient(90deg, #00394f 0%, #14b2f1 100%)",
        }}
      >
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Unmatched Expertise
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                25+ years of teaching experience
              </span>{" "}
              <span
                className="text-slider"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Updated Strategies & Knowledge
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Updated Curriculum
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Technology-Driven Learning
              </span>{" "}
              <span
                className="text-slider"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Personalized Attention
              </span>{" "}
              <span
                className="text-slider"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Proven Track Record of Success
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                5 Lakh+ students
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                250+ toppers in JEE and NEET
              </span>{" "}
              {/* <span
                className="text-slider"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Your
              </span>{" "}
              <span
                className="text-slider style-2"
                style={{ color: "white", WebkitTextStrokeColor: "white" }}
              >
                Life
              </span>{" "} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarqueSection;
