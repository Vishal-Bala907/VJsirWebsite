import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/vjsir/indian_students_studying_in_online_classroom_hd (2).jpeg";

const AboutTwo = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Her Journey & Mission</h3>
                  {/* <h3>Our Missoin</h3> */}
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi velit ab voluptate! Eum harum nihil quae, facere
                    dolore nisi voluptatem alias numquam, consectetur
                    repellendus vero ut omnis! Porro dolorem, autem ab nisi
                    voluptate, assumenda ipsam magnam, possimus similique quidem
                    modi?
                  </p>
                </div>
                <h3>His mission is simple:</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem officiis eos nesciunt, odit dicta odio labore
                  aliquid obcaecati inventore consequatur?
                </p>
                {/* <ul className="wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    We have a combination of skilled and experienced workforce
                    to look after the production of high end products.
                  </li>
                  <li>We untiringly strive for zero defects</li>
                  <li>
                    All our employees share responsibility to continuously
                    improve our products
                  </li>
                </ul> */}

                <h3
                  style={{ margin: "50px 0px 20px 0px ! important" }}
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Transformations & Success Stories
                </h3>
                <div
                  className="wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ margin: "16px 0px" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt qui magni saepe dolor ea! Similique sint ullam,
                    pariatur optio tempora eaque, asperiores, facere itaque
                    tempore id dolorem eum adipisci modi.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente illum dicta repellendus voluptatibus consequuntur
                    perspiciatis neque unde! Ab sequi ipsa fugit optio,
                    provident inventore laboriosam!
                  </p>
                </div>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_img1} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image src={about_img2} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            margin: "180px  10px 0px 10px",
          }}
        >
          <div className="about-image" style={{ maxWidth: "40%" }}>
            <Image
              src={about_img2}
              alt="about-img"
              style={{ width: "60%", height: "auto" }}
            />
          </div>
          <div style={{ maxWidth: "40%" }}>
            <h2 style={{ margin: "30px 0px", textAlign: "center" }}>
              Coaching & Programs
            </h2>
            <b
              className="mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{ margin: "0px 30px", display: "block" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate illum in architecto ea sunt aliquid magnam, quos
              reprehenderit, qui assumenda quas, id quibusdam minima! Quam
              quidem iusto distinctio asperiores deleniti.
            </b>
            <ol
              className=""
              data-wow-delay=".7s"
              style={{ alignSelf: "start", margin: "0px 15px" }}
            >
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                reiciendis rem ut, repellendus repudiandae quaerat, esse,
                suscipit modi obcaecati architecto impedit adipisci nesciunt!
                Consequuntur, nihil? Necessitatibus repellendus vero praesentium
                quas?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus ex vero accusantium soluta delectus, amet voluptas
                quaerat, quibusdam voluptates debitis mollitia libero, beatae
                dolore ipsa. Obcaecati voluptates sint doloribus blanditiis.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus ex vero accusantium soluta delectus, amet voluptas
                quaerat, quibusdam voluptates debitis mollitia libero, beatae
                dolore ipsa. Obcaecati voluptates sint doloribus blanditiis.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus ex vero accusantium soluta delectus, amet voluptas
                quaerat, quibusdam voluptates debitis mollitia libero, beatae
                dolore ipsa. Obcaecati voluptates sint doloribus blanditiis.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus ex vero accusantium soluta delectus, amet voluptas
                quaerat, quibusdam voluptates debitis mollitia libero, beatae
                dolore ipsa. Obcaecati voluptates sint doloribus blanditiis.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
