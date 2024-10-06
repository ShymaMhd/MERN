import './About.css'
const About = () =>{
return(
    <>
   <section className='white-background'>
   <div className ='top-side'>

    <div className='wrapping-text' > 
        <h5>Best Deal </h5>
        <h1> Find Your Best</h1> <h1> Deal Reight Now! </h1>
    </div>
    
    <div className='buttons'>
    <button className='button'>Appartment</button>
    <button className='button'>Villa House</button>
    <button className='button'>penthouse</button>
    </div>
   </div>
    

    <div className='bootom-side'>
        <div className='card '>
        <p className='bottom-border' style={{color:'black'}}> Total Flat Space <span style={{color:'var(--site-color-01) '}}>150 m2</span> </p>
        <p className='bottom-border' style={{color:'black'}}> Floor number <span style={{color:'var(--site-color-01) '}}>26 th</span> </p>
        <p className='bottom-border' style={{color:'black'}}> Number of room<span style={{color:'var(--site-color-01) '}}>4 </span> </p>
        <p className='bottom-border' style={{color:'black'}}> PArkking Available <span style={{color:'var(--site-color-01) '}}>True</span> </p>
        <p className='bottom-border' style={{color:'black'}}> Payment Process<span style={{color:'var(--site-color-01) '}}>Bank</span> </p>


        </div>
        <div className='picture'></div>
        <div className='Extra-info'>
        <h4>Extra Info About Property </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatem at ut voluptates dolorem facere! Tenetur eum voluptate perferendis nobis animi totam earum necessitatibus vitae nihil. Quos cumque modi officia!</p>     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas eveniet incidunt maxime explicabo ea veritatis beatae possimus odio facilis? Odit accusamus placeat fuga quaerat, sit porro labore quia fugiat.</p>
        
        <a className="anchor-link" href="#s-gallery"><img style={{height:'60px' , width:'160px'}} src = {'../../../src/assets/images/schedul.png'}></img> </a>
                    
        </div>
 
    </div>


   </section>
    </>
)

}



export default About