import React, { useEffect, useState } from "react";
import rbc from '../assets/rbc.png';
import plasma from "../assets/plasma.png";
import platelets from "../assets/platelets.png";
import "./typesOfDoantion.css";

function TypesOfDoantion() {
    const [bt, setBt] = useState('');

    const handleButtonClick = (type) => {
        setBt(type);
    };
    useEffect(() => {
       
        setBt('bt1');
    }, []);
    return (
        <div>
            <div className='m'>
                <div id="tod">
                    <h1>Types of Donation</h1>
                    <p>
                        The average human body contains about five litres of blood, which is made of several cellular and non-cellular components such 
                        <span> such as Red blood cells, Platelets, and Plasma.</span>
                    </p>
                </div>
                <div id="maincon">
                    <div className="con1">
                    <button 
                            onClick={() => handleButtonClick('bt1')} 
                            id="bt1" 
                            className={`con1btn ${bt === 'bt1' ? 'active' : ''}`}>
                            Packed Red Blood Cells
                        </button>
                        <button 
                            onClick={() => handleButtonClick('bt2')} 
                            id="bt2" 
                            className={`con1btn ${bt === 'bt2' ? 'active' : ''}`}>
                            Plasma
                        </button>
                        <button 
                            onClick={() => handleButtonClick('bt3')} 
                            id="bt3" 
                            className={`con1btn ${bt === 'bt3' ? 'active' : ''}`}>
                            Platelets
                        </button>
                           </div>

                    <div className="two">
                        <div className="con2">
                            <div id="tex">
                                {bt === 'bt1' && (
                                    <>
                                        <h5>What is it?</h5>
                                        <p>
                                            Blood Collected straight from the donor into a blood bag and mixed with an anticoagulant is called whole blood. 
                                            This collected whole blood is then centrifuged and red cells, platelets, and plasma are separated. 
                                            The separated Red cells are mixed with a preservative to be called as packed red blood cells.
                                        </p>
                                        <h5>Who can donate?</h5>
                                        <p>You need to be 18-65 years old, weigh 45kg or more, and be fit and healthy.</p>
                                        <h5>User For?</h5>
                                        <p>Correction of severe anemia in a number of conditions and blood loss in case of childbirth, surgery, or trauma settings.</p>
                                        <h5>Lasts For?</h5>
                                        <p>Red cells can be stored for 42 days at 2-6 degrees Celsius.</p>
                                        <h5>How long does it take to donate?</h5>
                                        <p>15-30 minutes to donate, including the pre-donation check-up.</p>
                                        <h5>How often can I donate?</h5>
                                        <p>Male donors can donate again after 90 days, and female donors can donate again after 120 days.</p>
                                    </>
                                )}
                                {bt === 'bt2' && (
                                    <>
                                        <h5>What is it?</h5>
                                        <p>The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in is called plasma.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions. Plasma can be obtained from the collected whole blood after red blood cells and platelets have been separated. Additionally, it can also be collected using an apheresis equipment where other components are returned to the donor. The former is a common method of plasma preparation in our country.</p>
                                        <h5>Who can donate?</h5>
                                        <p>The donation criteria is similar to that of red blood cell. However, for apheresis plasma collection minimum weight is 50 kgs.</p>
                                        <h5>User For?</h5>
                                        <p>Used for bleeding patients with coagulation factor deficiency such as hemophilia A and B, von willibrand disease etc. also used in cases of blood loss due to trauma.</p>
                                        <h5>Lasts For?</h5>
                                        <p>Plasma after separation if frozen below -30 degrees can be stored up to one year.</p>
                                        <h5>How long does it take to donate?</h5>
                                        <p>15-30 minutes to donate including the pre-donation check-up.</p>
                                        <h5>How often can I donate?</h5>
                                        <p>similar to the red cell donation.</p>
                                    </>
                                )}
                                {bt === 'bt3' && (
                                    <>
                                        <h5>What is it?</h5>
                                        <p>These are cellular elements in blood which wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like hematology and cancer patients.</p>
                                        <h5>Who can donate?</h5>
                                        <p>One can donate whole blood from which the blood centre will separate platelets from other components. Criteria similar to whole blood donation apply. Alternatively, one can donate using apheresis equipment where only platelets are collected and rest components are returned back to donate. One need to satisfy whole blood criteria and pre- donation screening which include negative infectious markers and platelet count 1,50,000 per microlitre of blood. Weight should be  50kgs.</p>
                                        <h5>User For?</h5>
                                        <p>Conditions with very low platelet count such as Cancer, blood diseases, trauma, dengue etc.</p>
                                        <h5>How does it work?</h5>
                                        <p>We collect your blood, keep platelet and return rest to you by apheresis donation.</p>
                                        <h5>Lasts For?</h5>
                                        <p>can be stored for 5 days at 20-24 degree celsius.</p>
                                        <h5>How long does it take to donate?</h5>
                                        <p>45-60 minutes to donate. 2-3 hours for pre-donation screening.</p>
                                        <h5>How often can I donate?</h5>
                                        <p>Every 2 weeks but should not exceed more than 24 times in a year.</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="con3">
                            <img className="imgcon3" src={bt === 'bt1' ? rbc : bt === 'bt2' ? plasma : platelets} alt="blood donation type" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypesOfDoantion;
