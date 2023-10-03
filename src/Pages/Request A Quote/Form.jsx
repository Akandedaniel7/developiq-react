import React, { useState } from 'react';
import '../../Components/General.css';
import './form.css';

const Form = () => {
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Country: '',
    Budget: '',
    WhatsappNumber: '',
    ProjectDetails: '',
    WhenStart: '',
    CompanyName: '',
    Position: '',
    Referrals: ''
  });

  const [buttonText, setButtonText] = useState('Submit');

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const { Name, Email, PhoneNumber, Country, Budget, WhatsappNumber, ProjectDetails, WhenStart, CompanyName, Position, Referrals, fileInput } = userData;

    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        Email,
        PhoneNumber,
        Country,
        Budget,
        WhatsappNumber,
        ProjectDetails,
        WhenStart,
        CompanyName,
        Position,
        Referrals,
        fileInput
      })
    };

    try {
      const res = await fetch('https://form--react-default-rtdb.firebaseio.com/Messages.json', option);
      if (res.ok) {
        setButtonText('Quote Sent');
        setTimeout(() => {
          setButtonText('Submit');
          setUserData({
            Name: '',
            Email: '',
            PhoneNumber: '',
            Country: '',
            Budget: '',
            WhatsappNumber: '',
            ProjectDetails: '',
            WhenStart: '',
            CompanyName: '',
            Position: '',
            Referrals: '',
            fileInput: ''
          });
        }, 3000); // Reset button text and clear form data after 3 seconds
      } else {
        // Handle error here
        console.error('Error sending message');
        setButtonText('Submit'); // Reset button text on error
      }
    } catch (error) {
      // Handle fetch error here
      console.error('Error sending message:', error);
      setButtonText('Submit'); // Reset button text on error
    }
  };

  return (
    <div>
      <section id="get-started" className="get-started section-bg">
        <div className="container">
          <form action="" method="POST">
            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="Name">Name</label>
                <input type="text" value={userData.Name} placeholder="Enter Name" name="Name" required onChange={data} />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Email">Email</label>
                <input type="email" value={userData.Email} name="Email" id="Email" placeholder="Enter Email" required onChange={data} />
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="PhoneNumber">Contact</label>
                <input type="number" value={userData.PhoneNumber} placeholder="Enter Contact Number" name="PhoneNumber" required onChange={data} />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Country">Country</label>
                <input type="text" name="Country" id="Country" value={userData.Country} placeholder="Enter Country Name" required onChange={data} />
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="Budget">Approximate Budget</label>
                <select id="Budget" name="Budget" onChange={data} value={userData.Budget} required>
                  <option value="" disabled>Select Approximate Budget</option>
                  <option value="$5000 to $10000">$5000 to $10000</option>
                  <option value="$10000 to $25000">$10000 to $25000</option>
                  <option value="$25000 to $50000">$25000 to $50000</option>
                  <option value="$50000+">$50000+</option>
                  <option value="Negotiable">Negotiable</option>
                </select>
              </div>
              <div className="formFlex_ii form2">
                <label htmlFor="WhatsappNumber">WhatsApp Number</label>
                <input type="number" name="WhatsappNumber" id="WhatsappNumber" placeholder="Enter WhatsApp Number" value={userData.WhatsappNumber} required onChange={data} />
              </div>
            </div>

            <div className="formGeneral">
              <label htmlFor="ProjectDetails">Details</label>
              <textarea name="ProjectDetails" id="ProjectDetails" cols="10" rows="4" placeholder="Project Description" value={userData.ProjectDetails} onChange={data}></textarea>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="WhenStart">Start Date</label>
                <input type="text" placeholder="When are you ready to start?" name="WhenStart" value={userData.WhenStart} required onChange={data} />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="CompanyName">Company Name</label>
                <input type="text" name="CompanyName" id="CompanyName" placeholder="Enter your company or business name" value={userData.CompanyName} required onChange={data} />
              </div>
            </div>

            <div className="form1Flex">
              <div className="formFlex_i">
                <label htmlFor="Position">Position</label>
                <input type="text" placeholder="What is your position in your company" name="Position" value={userData.Position} required onChange={data} />
              </div>
              <div className="formFlex_ii">
                <label htmlFor="Referrals">How did you know DevelopIQ</label>
                <select id="Referrals" name="Referrals" value={userData.Referrals} onChange={data} required>
                  <option value="" disabled>Referral</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Clutch">Clutch</option>
                  <option value="Family or Friends">Family or Friends</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Sortlist">Sortlist</option>
                  <option value="TrustPilot">TrustPilot</option>
                  <option value="GoodFirm">GoodFirm</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="browerseFile">
              <label htmlFor="fileInput">Select a file:</label>
              <input type="file" id="fileInput" name="fileInput" className="file-input" value={userData.fileInput} onChange={data} />
              {/* <p>Only doc, docx, pdf, rtf, txt, zip, rar files are allowed</p> */}
            </div>

            <div className="QuoteBtn">
              <button type="submit" onClick={send}>{buttonText}</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;