/** @format */

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpperForm = () => {
  const navigate = useNavigate();
  const [cities, setCity] = useState([]);
  const [options, setOptions] = useState([]);
  const [city, setCitys] = useState("");
  const [optionBestDescribeYou, setOptionBestDescribeYou] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [monthlyImport_Export, setMonthlyImp_Exp] = useState("");


  const getCities = async()=>{
    const url = "https://akashdeep12.vercel.app/selectcity/cities";
    try{
      const res = await axios.get(url);
      console.log(res?.data);
      setCity(res?.data);
    }catch(err){
      console.log(err.message);
    }
  }

  const getOptions = async()=>{
    const url = "https://akashdeep12.vercel.app/BestDescribe";
    try{
      const res = await axios.get(url);
      console.log(res?.data);
      setOptions(res?.data);
      
    }catch(err){
      console.log(err?.message);
    }
  }
  // navigate("/Transaction-Details")

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const url = "https://akashdeep12.vercel.app/remittance/remittances";
    try{
      const res = await axios.post(url, {city, optionBestDescribeYou, name, mobile, email, 
        purpose:monthlyImport_Export
      })
      console.log(monthlyImport_Export);
      console.log(res?.data);
      if(monthlyImport_Export === "S1107"){
        navigate("/cash-free");
      }
      else navigate("/Transaction-Details");
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    getCities();
    getOptions();
  },[])

  const purpose = [
    {
      description: "Education Abroad",
      code: "S1107",
    },
    {
      description: "GIC payment to canada",
      code: "S0305",
    },
    {
      description: "Travel For Education",
      code: "S0305",
    },
    {
      description: "Maintenance for close relative abroad",
      code: "S1301",
    },
    {
      description: "Gift",
      code: "S1302",
    },
    {
      description: "Donation to Charitable or religious organization",
      code: "S1303",
    },
    {
      description: "Travel For Medical Treatment Abroad",
      code: "S0304",
    },
    {
      description: "Private Visit to any foreign country",
      code: "S0306",
    },
    {
      description:
        "Business travel, attending business conferences or specialized training abroad",
      code: "S0301",
    },
    {
      description: "Emigration Abroad",
      code: "S1307",
    },
    {
      description: "Employment Abroad",
      code: "S1307",
    },
    {
      description: "Legal Services",
      code: "S1004",
    },
    {
      description: "Postal and Courier Service",
      code: "S0224",
    },
    {
      description: "Travel For Pilgrimage",
      code: "S0303",
    },
    {
      description: "Refund of Non Trade Inward remittance",
      code: "S1502",
    },
    {
      description: "Purchase of Medicines and goods for personal use",
      code: "S1109",
    },
    {
      description: "Subscription, Payment for newspaper/ magazines",
      code: "S1108",
    },
  ];

  return (
    <div className="Index-Upper-Form">
      <form>
        <div className="form-cont" style={{ paddingBottom: "50px" }}>
          <div className="form-part-1">
            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <label>Select The City You're Located In</label>
                <select onChange={(e)=>setCitys(e.target.value)}>
                  <option>Select City</option>
                  {
                    cities?.map((ele,i)=>(
                      <option value={ele?._id}>{ele?.selectcity}</option>
                    ))
                  }
                </select>
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <label>Please select the option that best describes you</label>
                <select onChange={(e)=>setOptionBestDescribeYou(e.target.value)}>
                  <option>
                    Please select the option that best describes you
                  </option>
                  {
                    options?.map((ele,i)=>(
                      <option value={ele?._id}>{ele?.optionBestDescribe?.[0]}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="two-cont mb-3">
              <div>
                <input
                  type="text"
                  placeholder="Organization/ Individual name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input type="number" placeholder="Enter Phone Number"
                  onChange={(e)=>setMobile(e.target.value)}
                />
              </div>
            </div>

            <div className="two-cont" style={{ display: "block" }}>
              <div style={{ width: "100%" }} className="mb-3">
                <input type="email" placeholder="Enter Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3" style={{ width: "100%" }}>
                <label>Purpose</label>
                <select onChange={(e)=>setMonthlyImp_Exp(e.target.value)}>
                  <option value="">Select</option>
                  {
                    purpose?.map((ele,i)=>(
                      <option key={i} value={ele?.code}>{ele?.description}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div>
          <button
            className="ord-btn"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
