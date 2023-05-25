/** @format */

import React from "react";
import Footer from "../components/footer";
import Header from "../components/Layout/Header";
import img from "../Images/27.png";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const handleCaptchaChange = (value) => {
    // Process the CAPTCHA response value
    console.log("CAPTCHA value:", value);
  };
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
                <img src={img} alt="" />
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
  sitekey="6Lc6mDwmAAAAABH0UDE6FAKuiF-BMTek1tMJKZ9D"
  onChange={handleCaptchaChange}
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
