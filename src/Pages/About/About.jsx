import React from 'react';
import './About.css';
import AboutBanner from '../../assets/images/tronix about page banner.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faTruck, faDollar, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import Team1 from '../../assets/images/team-1.jpg';
import Team2 from '../../assets/images/team-2.jpg';
import Team3 from '../../assets/images/team-3.jpg';
import Team4 from '../../assets/images/team-4.jpg';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <div className='about py-12'>
        <div className='container mx-auto px-4'>
          <div className="md:grid grid-cols-1">

            <div className='info'>
              <h2 className="text-4xl">About Tronix</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolorem est laborum laboriosam autem omnis. Nulla ipsa veniam voluptas adipisci?</p>
            </div>

            <img className='w-full h-96 rounded-lg' src={AboutBanner} alt="AboutBanner" />
          </div>

          {/* why choose us */}
          <div className="section-title text-center py-12">
            <h2 className="text-5xl">Why Choosing Us</h2>
          </div>
          <div className="md:grid grid-cols-4 gap-4 gap-y-2">

            <div className="icon-box text-center border rounded-lg p-8">
              <div className="icon">
                <FontAwesomeIcon className="font-6xl" icon={faBrain} />
              </div>
              <div className="info">
                <h3 className="title font-2xl font-mono py-2 text-red-500">54 Brands</h3>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab!</p>
              </div>
            </div>

            <div className="icon-box text-center border rounded-lg p-8">
              <div className="icon">
                <FontAwesomeIcon className="font-6xl" icon={faTruck} />

              </div>
              <div className="info">
                <h3 className="title font-2xl font-mono py-2 text-red-500">Fast Delivery</h3>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab!</p>
              </div>
            </div>

            <div className="icon-box text-center border rounded-lg p-8">
              <div className="icon">
                <FontAwesomeIcon className="font-6xl" icon={faDollar} />

              </div>
              <div className="info">
                <h3 className="title font-2xl font-mono py-2 text-red-500">COD Service</h3>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab!</p>
              </div>
            </div>

            <div className="icon-box text-center border rounded-lg p-8">
              <div className="icon">
                <FontAwesomeIcon className="font-6xl" className="font-6xl" icon={faIdBadge} />

              </div>
              <div className="info">
                <h3 className="title font-2xl font-mono py-2 text-red-500">100% Original Products</h3>
                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab!</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className='bg-gray-50 py-14'>
        <div className='container mx-auto px-4 '>
          <section id="team" className="team ">
            <div className="container">
              <div className="section-title">
                <h2>Team</h2>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda mollitia praesentium excepturi iure neque earum? Corrupti, molestias dolorum.</p>
              </div>
              <div className="md:grid grid-cols-4 gap-4 gap-y-2">

                <div className="flex items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img className="img-fluid" src={Team1} alt="team-1" />
                      <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4 className='text-xl text-red-500 text-semibold text-mono'>Weather Hitw</h4>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img className="img-fluid" src={Team2} alt="team-2" />
                      <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4 className='text-xl text-red-500 text-semibold text-mono'>Weather Hitw</h4>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img className="img-fluid" src={Team3} alt="team-3" />
                      <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4 className='text-xl text-red-500 text-semibold text-mono'>Weather Hitw</h4>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-stretch">
                  <div className="member">
                    <div className="member-img">
                      <img className="img-fluid" src={Team4} alt="team-4" />
                      <div className="social">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4 className='text-xl text-red-500 text-semibold text-mono'>Weather Hitw</h4>
                      <p>Assistant Director</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default About