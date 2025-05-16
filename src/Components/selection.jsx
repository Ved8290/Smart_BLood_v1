"use client";
import React, { useState, useEffect } from "react";
import "./selection.css";

function Selection() {
  const [state, setState] = useState("");
  const [states, setStates] = useState([]);
  const [stateid, setStateid] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [districtid, setDistrictid] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [bloodComponent, setBloodComponent] = useState("");
  const [bloodBanks, setBloodBanks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchState = async () => {
    try {
      const response = await fetch(
        "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETSTATELIST&statetype=2&lang=0"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchDistrict = async (selectedStateCode) => {
    try {
      const response = await fetch(
        `https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETDISTRICTLIST&selectedStateCode=${selectedStateCode}`
      );
      const data = await response.json();
      setDistricts(data.records || []);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    const selectedStateObject = states.find(
      (state) => state.label === selectedState
    );
    if (selectedStateObject) {
      setStateid(selectedStateObject.value);
      fetchDistrict(selectedStateObject.value);
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);
    const selectedDistrictObject = districts.find(
      (district) => district.id === selectedDistrict
    );
    if (selectedDistrictObject) {
      setDistrictid(selectedDistrictObject.value);
    }
  };

  const handleBloodBanks = async () => {
    try {
      const response = await fetch(
        `https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=${stateid}&districtCode=${districtid}&bloodGroup=${bloodGroup}&bloodComponent=${bloodComponent}&lang=0`
      );
      const bloodbank = await response.json();
      setBloodBanks(bloodbank.data || []);
      setCurrentPage(1); // Reset to first page after new data fetch
    } catch (error) {
      console.error("Error fetching blood banks:", error);
      setBloodBanks([]);
    }
  };

  const paginatedData = bloodBanks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div id="firstdiv">
      <select
        id="stateselection"
        value={state}
        onChange={handleStateChange}
        aria-label="Select State"
      >
        <option disabled value="">
          Select State
        </option>
        {states.map((stateOption) => (
          <option key={stateOption.value} value={stateOption.label}>
            {stateOption.label}
          </option>
        ))}
      </select>

      <select
        id="districtselection"
        value={district}
        onChange={handleDistrictChange}
        aria-label="Select District"
        disabled={!stateid}
      >
        <option disabled value="">
          Select District
        </option>
        {districts.map((districtOption) => (
          <option key={districtOption.id} value={districtOption.id}>
            {districtOption.label || districtOption.id}
          </option>
        ))}
      </select>

      <select
        id="bloodgroup"
        onChange={(e) => {
          e.preventDefault();
          setBloodGroup(e.target.value);
        }}
        disabled={!districtid}
      >
        <option value="all">Select Blood Group</option>
        <option value="17">AB+ve</option>
        <option value="18">AB-ve</option>
        <option value="11">A+ve</option>
        <option value="12">A-ve</option>
        <option value="13">B+ve</option>
        <option value="14">B-ve</option>
        <option value="22">Oh+ve</option>
        <option value="23">Oh-ve</option>
        <option value="15">O+ve</option>
        <option value="16">O-ve</option>
        <option value="all">All Blood Group</option>
      </select>

      <select
        id="bloodcomponent"
        onChange={(e) => {
          e.preventDefault();
          setBloodComponent(e.target.value);
        }}
        disabled={!bloodGroup}
      >
        <option value="null">Select Blood Type</option>
        <option value="11">Whole Blood</option>
        <option value="14">Single Donor Platelet</option>
        <option value="1">Single Donor Plasma</option>
        <option value="2">Random Donor Platelet</option>
        <option value="20">Platelet Concentrate</option>
        <option value="16">Platelet Rich Plasma</option>
        <option value="1">Plasma</option>
        <option value="2">Sagm Packed Red Blood Cells</option>
      </select>

      <button id='btn' onClick={handleBloodBanks} disabled={!bloodComponent}>
        Search Blood Banks
      </button>

      <div>
        <table id="bloodDataTable">
          <thead id="thead">
            <tr>
              <th>S.No.</th>
              <th>Blood Bank Name & Address</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Last Update</th>
              <th>Blood Type</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {paginatedData.length > 0 ? (
              paginatedData.map((bank, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td dangerouslySetInnerHTML={{ __html: bank[1] }}></td>
                  <td>{bank[2]}</td>
                  <td dangerouslySetInnerHTML={{ __html: bank[3] }}></td>
                  <td>{bank[4]}</td>
                  <td>{bank[5]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div id="pagination">
        {currentPage > 1 && (
          <button 
            onClick={prevPage}
            style={{
              padding: "5px 10px",
              margin: "5px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Previous
          </button>
        )}
        {currentPage < Math.ceil(bloodBanks.length / itemsPerPage) && (
          <button 
            onClick={nextPage}
            style={{
              
              padding: "5px 10px",
              margin: "5px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Selection;
