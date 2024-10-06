import './VideoView.css'

const VideoView = () => {
return (
<>

 <section  className='white-background' >
    <div className='wrapping text-position' > 
        <h6>VIDEO VIEO </h6>
        <p> Get Closer View <br/> & Different <br/>Feeling </p>
    {/* description  */}
    </div>

   <div>
    {/* bacground */}

    <div className="background"> 

    </div>   
   </div>

   <div  className='wrapping'>
    {/* video  */}
   <video className='video' src='../../../src/assets/Videos/video.mp4' width='65%' height='15%' controls autoPlay muted loop></video>
   </div>

   <div>
   <section className ="index-category wraper-main">
        <a href="#" className ="index-category-box">
          <p>34</p>
            <h3> Buildings Finshed Now</h3>
            <span className="dot"></span>

        </a>
       <div href="#" className ="index-category-box">
       <p>12</p>
            <h3> Years Experience </h3>
            <span className="dot"></span>
       </div>
       <a  href="#" className ="index-category-box">
       <p>24</p>
            <h3> Awards won 2023</h3>
            <span className="dot"></span>
       </a>
     
</section>
    {/* Three small card  */}
   </div>
  
    
 </section>

</>

)

}
export default VideoView