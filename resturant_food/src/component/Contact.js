import React from 'react'

const Contact = () => {
  return (
    <>
     <section className='contact' id='contact'>
        <h1 className='heading'><span> CONTACT </span> us</h1>
        <div className='row'>
        <iframe  class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4171548689733!2d78.4478240749214!3d17.487589099911222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90424c883059%3A0x697ef64d4223f441!2sIDPL%20Colony%20Towards%20Jagathgirigutta!5e0!3m2!1sen!2sin!4v1696239375743!5m2!1sen!2sin"   allowfullscreen="" loading="lazy"></iframe>
        <form>
            <h3>get in touch</h3>
            <div className='inputBox'>
              <span className='fas fa-user'></span>
              <input type='text' placeholder='name'/>
            </div>
            <div className='inputBox'>
              <span className='fas fa-envelope'></span>
              <input type='email' placeholder='email'/>
            </div>
            <div className='inputBox'>
              <span className='fas fa-phone'></span>
              <input type='phone' placeholder='number'/>
              </div>
              <input type='submit' value="contact now" className='btn'/>
        </form>
        </div>
     </section> 
    </>
  )
}

export default Contact;
