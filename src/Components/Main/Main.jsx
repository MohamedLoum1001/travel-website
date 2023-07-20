import React, {useEffect} from 'react'
import './Main.css';
import './Main.scss';
import img from "../../Assets/img1 (1).jpg";
import img2 from "../../Assets/img1 (2).jpg";
import img3 from "../../Assets/img1 (3).jpg";
import img4 from "../../Assets/img1 (4).jpg";
import img5 from "../../Assets/img1 (5).jpg";
import img6 from "../../Assets/img1 (6).jpg";
import img7 from "../../Assets/img1 (7).jpg";
import img8 from "../../Assets/img1 (8).jpg";
import img9 from "../../Assets/img1 (9).jpg";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from "aos";
import "aos/dist/aos.css"

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zeland",
    grade: "CUTURAL Relax",
    fees: "$700",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu-Picchu",
    location: "Peru",
    grade: "CUTURAL RElAX",
    fees: "$600",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CUTURAL RElAX",
    fees: "$700",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CUTURAL Relax",
    fees: "$800",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuata",
    location: "Mexico",
    grade: "CUTURAL Relax",
    fees: "$1100",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinquo-Terre",
    location: "Italy",
    grade: "CUTURAL Relax",
    fees: "$840",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Ankor Wat",
    location: "Cambodia",
    grade: "CUTURAL Relax",
    fees: "$790",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CUTURAL Relax",
    fees: "$900",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CUTURAL Relax",
    fees: "$500",
    description: "The opitome of remance, Bora Bora is one of the best travel,destinations in the world. This place is known for its luxurious stays and,adventurous activities."
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Main
