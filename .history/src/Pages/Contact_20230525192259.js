/** @format */

import React from "react";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";
import img from "../Images/27.png";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

const Contact = () => {
  const handleCaptchaChange = (value) => {
    console.log("CAPTCHA value:", value);
  };

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const center = {
    lat: 28.6139,
    lng: 77.2090,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDntn5A6bf1VLX2WgNUetcG84HjRrCmE7w",
  });

  return (
    <>
      <div className="continer_Div">
        <div className="header_Div">
          <Header />
        </div>
        <div className="content_Div">
          <section className="Contact_Us_Section">
            <p className="Head">Contact Us</p>
            <p className="sub_Heading">
              Our team is here to help you, Don’t worry!
            </p>

            <div className="Two_Container">
              <div className="left_Container">
                {/* <img src={img} alt="" /> */}
                <GoogleMap
            center={center}
            zoom={7}
            mapContainerStyle={containerStyle}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
             <MarkerF
                position={{ lat: parseFloat(i.lat), lng: parseFloat(i.long) }}
                key={index}
              />
          </GoogleMap>

              </div>

              <div className="right_container">
                <p className="head">Enquiry Now</p>
                <form>
                  <div className="two_container mb-4">
                    <div>
                      <p>Name</p>
                      <input type={"text"} placeholder="Enter Name" />
                    </div>
                    <div>
                      <p>Email</p>
                      <input type={"text"} placeholder="Enter Email" />
                    </div>
                  </div>

                  <div className="two_container mb-4 ">
                    <div>
                      <p>Mobile Number </p>
                      <input type={"text"} placeholder="Enter Mobile Number" />
                    </div>
                    <div>
                      <p>Inquiry Type</p>
                      <select>
                        <option>Select Inquiry Type</option>
                      </select>
                    </div>
                  </div>

                  <div className="two_container mb-4 ">
                    <div style={{ width: "100%" }}>
                      <p>Message</p>
                      <input type={"text"} style={{ width: "100%" }} />
                    </div>
                  </div>

                  <ReCAPTCHA
                    sitekey="6LcSnTwmAAAAAAjWLbcxsO0Ufff8BQyup-GyIdok"
                    onChange={handleCaptchaChange}
                    className='mb-4'
                  />

                  <button>Submit</button>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div className="footer_Div">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
