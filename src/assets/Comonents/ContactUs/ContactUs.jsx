import './ContactUs.css'
const ContactUs = ()=>{

    return(
    
    <>
    <section className='white-background'> 
    <div className='wrapping text-position' > 
        <h6>Contact Us </h6>
        <p> Get In Touch <br/> with our Agents </p>
    </div>
    <div className="background-2">
  
   <div className='contact-info'>
   <div>
    <div className='map'>
   
   <iframe 
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13401.364074735937!2d36.02092141081296!3d32.889150833787305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151beddbe3fad6e5%3A0x627d4c644d6a0576!2sDaraa%2C%20Syria!5e0!3m2!1sen!2sro!4v1726046879006!5m2!1sen!2sro" 
     width="100%"
     height="450" 
    //  style={{border:0}}
    allowfullscreen=""
     loading="lazy"
     referrerpolicy="no-referrer-when-downgrade">
     </iframe>
  
   
    </div>
    <div className='information'>
    <div className='img-info'>
            <img style={{height:'50px',width:'50px',borderRadius:'100%'}} src='../../../src/assets/images/phone.png'/>
            <div className='connection-info'>
            <p>Phone Number</p>
            <h4>010-020-0340</h4>
          
            </div>
    </div>

    <div  className='img-info'>
            <img style={{height:'50px',width:'50px',borderRadius:'10%'}} src='../../../src/assets/images/message.jpg'/>
            <div className='connection-info'>
            <p>Business Email</p>
            <h4>info@villa.com</h4>
            </div>
    </div>
    </div>


</div>


    </div>


<div className='contact-info'>
<div className='form'>

    <section class="s-form" id="s-contact">
		<div class="container">
			<div class="form-row">
				<div class="form-right">
					<form>
            <label style={{paddingLeft:'2%'}}>Full Name</label>
	
  					<input type="text" placeholder="Full Name*" required/>
	
  					<input type="text" placeholder="Your phone*" required/>
            <label style={{paddingLeft:'2%'}}>Email Address</label>

						<input type="text" placeholder="Your email"/>
            <label style={{paddingLeft:'2%'}}>Message</label>

						<textarea cols="30" rows="5" placeholder="Your Message"></textarea>
						<button class="def-btn form-button">Send</button>
					</form>
				</div>

			</div>
		</div>
	</section>
    </div>
    </div>


    </div>
  

  

    </section>
    <div><p>gfsregth</p></div>
    </>
    
    )
    
    }
export default ContactUs;