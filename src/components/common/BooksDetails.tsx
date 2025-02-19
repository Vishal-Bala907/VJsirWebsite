import Image from "next/image";
import React from "react";
import img from "@/assets/img/81Gh9aWhYsL._SY385_.jpg";
import { FaAmazon, FaShoppingCart } from "react-icons/fa"; // Amazon Icon
import { SiFlipkart } from "react-icons/si"; // Flipkart Icon
// import "bootstrap/dist/css/bootstrap.min.css";

const BookDetails = () => {
  return (
    <div
      className="container mt-5"
      style={{
        marginTop: "5rem !important",
      }}
    >
      <div className="card text-light bg-dark shadow-lg border-0">
        <div className="row g-0">
          {/* Book Image */}
          <div
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#f7f7f7",
            }}
          >
            <Image
              src={img}
              className="img-fluid rounded-start"
              alt="Book Cover"
            />
          </div>

          {/* Book Details */}
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold text-warning">
                Problems and Solutions in Inorganic Chemistry for JEE : Main and
                Advanced
              </h2>

              {/* About the Book */}
              <h5 className="text-primary mt-3">About the Book</h5>
              <p className="card-text text-light">
                Problems and Solutions in Inorganic Chemistry for JEE (Main &
                Advanced) is designed to help aspiring engineers focus on the
                subject of Inorganic Chemistry from two standpoints: To develop
                their caliber, aptitude, and attitude for the engineering field
                and profession. To strengthen their grasp and understanding of
                the concepts of the subjects of study and their applicability at
                the grassroots level. An array of solved exercises will expose
                the students to the variety and nature of questions that they
                can expect to face in JEE. The coverage and features of this
                book make it highly useful for all those preparing for JEE and
                aspiring to become engineers.
              </p>

              {/* About the Author */}
              <h5 className="text-primary mt-4">About the Author</h5>
              <p className="card-text text-light">
                With 25+ years of teaching experience, VJ Sir has perfected his
                teaching methods to deliver the best guidance to students. His
                deep understanding of the JEE and NEET exams ensures that
                students are well-prepared to tackle even the toughest
                questions.
              </p>
              {/* Buy Now Buttons */}
              <div className="d-flex gap-3 mt-4">
                <a
                  href="https://www.amazon.in/Problems-Solutions-Inorganic-Chemistry-JEE/dp/9355738552/ref=sr_1_1?sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning fw-bold d-flex align-items-center gap-2"
                >
                  <FaAmazon size={20} />
                  Buy on Amazon
                </a>

                <a
                  href="https://www.flipkart.com/problems-solutions-organic-inorganic-chemistry-set-2-books-jee-main-advance-v-joshi-sir-s-k-m/p/itm52a28fd6ab056?pid=RBKFTJYVNURVPTKZ&lid=LSTRBKFTJYVNURVPTKZ5UBARV&marketplace=FLIPKART&q=vj+sir+inorganic+chemistry&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=6e4a901f-3ad0-4288-8baf-31c822b35a52.RBKFTJYVNURVPTKZ.SEARCH&ppt=hp&ppn=homepage&ssid=rojt05fxsw0000001739979758141&qH=1c0d2de2081efafc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary fw-bold d-flex align-items-center gap-2"
                >
                  <SiFlipkart size={20} />
                  Buy on Flipkart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
