import React from 'react'
import './Contact.css'
function Contact() {
  return (
   <>

<section className="contact">
   <div className="container">
   <div className='top text-center'>
        <h3>contact us</h3>
        <h1>Let’s Start a Conversation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
     

         
        <div className="container  ">
  <div className="row text-center align-items-center text-white p-4">
    <div className="col-12 col-md-6">
      <p className="fw-bold">Working hours</p>
      <h5>Monday To Friday</h5>
      <h5>9:00 AM to 8:00 PM</h5>
      <p>Our Support Team is available 24/7</p>
    </div>
    <div className="col-12 col-md-6">
      <p className="fw-bold">Contact Us</p>
      <h5>020 7993 2905</h5>
      <p>hello@finsweet.com</p>
    </div>
  </div>
</div>






        


<div class="container mt-5 bg-white ">
        <div class="row justify-content-center  bg-white">
            <div class="col-md-8">
                <form class="border p-4 bg-white">
                    <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" placeholder="Full Name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Your Email" />
                    </div>
                    <div class="mb-3">
                        <label for="query" class="form-label">Query Related</label>
                        <select class="form-select" id="query">
                            <option selected>Select a Query</option>
                            <option value="1">query 1</option>
                            <option value="2">query 2</option>
                            <option value="3">query 3</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning w-100">Send Message</button>
                </form>
            </div>
        </div>
    </div>

    </div>
    </section>
     </>
  )
}

export default Contact