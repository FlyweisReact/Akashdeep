import React from "react";
import {useNavigate} from 'react-router-dom';

const OP1 = () => {
    const navigate = useNavigate();
  return (
    <>
      <h2 className="op1-top-txt">Logo</h2>
      <div className="form-2-cont">
        <h2>Customer Details</h2>
        <form className="form-2">
          <div className="form-2-fld">
            <div class="form-group">
              <label for="field1">Traveler's Name</label>
              <input
                className="ip"
                type="text"
                id="field1"
                name="field1"
                required
              />
            </div>
            <div class="form-group">
              <label for="field2">Mobile Number</label>
              <input
                className="ip"
                type="text"
                id="field2"
                name="field2"
                required
              />
            </div>
            <div class="form-group">
              <label for="field3">Email</label>
              <input
                className="ip"
                type="text"
                id="field3"
                name="field3"
                required
              />
            </div>
            <div class="form-group">
              <label for="field3">Pan Number</label>
              <input
                className="ip"
                type="text"
                id="field3"
                name="field3"
                required
              />
            </div>
            <div className="form-group">
              <label>Select Countries to Travel</label>
              <select className="ip" id="timezone" name="timezone" required>
                <option value="">Select</option>
                <option value="EST">Germany</option>
                <option value="CST">Brazil</option>
                <option value="PST">USA</option>
                <option value="PST">UK</option>
                <option value="PST">France</option>
                <option value="PST">Russia</option>
              </select>
            </div>
            <div className="form-group">
              <label>Travel Starting Date</label>
              <input
                className="ip"
                type="date"
                id="end-date-1"
                name="end-date-1"
                required
              />
            </div>
            <div className="form-group">
              <label>Travel End Date</label>
              <input
                className="ip"
                type="date"
                id="end-date-1"
                name="end-date-1"
                required
              />
            </div>
          </div>
          <button className="form-2-btn" type="submit" onClick={()=>navigate("/customer-det2")}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default OP1;
