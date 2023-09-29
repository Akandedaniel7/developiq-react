import React from 'react';
import '../../Components/General.css';
import './form.css';

const Form = () => {
  return (
    <div>
    <section id="get-started" className="get-started section-bg">
    <div className="container">
     <form action="">

      <div className="form1Flex">
   
        <div className="formFlex_i">
          <label for="name">Name</label>
          <input type="text" placeholder="Enter Name" name="name" required />
        </div>
     
        <div className="formFlex_ii">
         <label for="email">Email</label>
         <input type="email" name="email" id=""  placeholder="Enter Email" required />
        </div>
      </div>


      <div className="form1Flex">
 
        <div className="formFlex_i">
          <label for="name">Contact</label>
          <input type="number" placeholder="Enter Contact Number " name="number" required />
        </div>

        <div className="formFlex_ii">
         <label for="text">Country</label>
         <input type="text" name="text" id=""  placeholder="Enter Country Name" required />
        </div>
      </div>


      <div className="form1Flex">
 
        <div className="formFlex_i">
          <label for="name">Approximate Budget</label>
          <select id="dropdown" name="dropdown">
            <option value="option1" disable selected>Select Aproxilate Budget</option>
            <option value="option2">$5000 to $10000</option>
            <option value="option3">$10000 to $25000</option>
            <option value="option4">$25000 to $50000</option>
            <option value="option5">$50000+</option>
            <option value="option6">Negotiable</option>
          </select>
        </div>

        <div className="formFlex_ii form2">
         <label for="number"></label>
         <input type="number" name="text" id=""  placeholder="Enter Whatsapp Number" required />
        </div>
      </div>

     <div className="formGeneral">
      <label for="name">Details</label>
      <textarea name="text" id="" cols="10" rows="4" placeholder="Project Description"></textarea>
     </div>
       <div className="form1Flex">

        <div className="formFlex_i">
          <label for="name">Start Date</label>
          <input type="text" placeholder="When are you ready to start? " name="text" required />
        </div>
        <div className="formFlex_ii">
         <label for="text">Company Name </label>
         <input type="text" name="text" id=""  placeholder="Enter your company or bussiness name" required />
        </div>
      </div>

       <div className="form1Flex">
       
        <div className="formFlex_i">
          <label for="name">Position</label>
          <input type="number" placeholder="What is your position in your company " name="number" required />
        </div>
    
        <div className="formFlex_ii">
          <label for="name">How did you know DevelopIQ</label>
          <select id="dropdown" name="dropdown">
            <option value="option1" disabled selected>Referral</option>
            <option value="option2">Facebook</option>
            <option value="option3">Twitter</option>
            <option value="option4">LinkedIn</option>
            <option value="option5">Instagram</option>
            <option value="option6">Goggle Search</option>
            <option value="option7">Clutch</option>
            <option value="option8">Family or Friends</option>
            <option value="option9">WhatsApp</option>
            <option value="option10">Sortlist</option>
            <option value="option11">TrustPilot</option>
            <option value="option12">GoodFirm</option>
            <option value="option13">Others</option>
          </select>
        </div>
      </div>

      <div className="browerseFile ">
        <label for="fileInput">Select a file:</label>
        <input type="file" id="fileInput" name="fileInput" className="file-input" />
        {/* <p>Only doc, docx, pdf, rtf, txt, zip, rar files are allowed</p>*/}
      </div>
      
      <div className="QuoteBtn">
        <button type="submit">Submit</button>
      </div>
      
     </form>
      </div>
  </section>
    </div>
  )
}

export default Form
