import React, {useEffect} from 'react'
import './Footer.css';
import './Footer.scss';
import video2 from "../../Assets/video2.mp4";
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { SiTripadvisor } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" type='submit' className='btn flex'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perferendis aperiam necessitatibus. Quisquam alias minima libero vel ipsam. Eum temporibus pariatur maiores inventore eveniet itaque quas quisquam deserunt. Dicta, sint.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <SiTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
            </div>
            {/* Group 2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rencarts
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HotelWolrd
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
            </div>
            {/* GROUP3*/}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>RESET TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVERED - ISRATECH 2022</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer
