import React from 'react';


export default function Section1(props) {
  return (
    <div className='container my-5'>
      <div className="jumbotron text-center">
        <br></br>
        <br />
  <h1 className="display-4">Welcome to SIT</h1>
  <h4>Sahajanand Institute Of Technology</h4>
  <p className="lead">Empowering students with knowledge and skills in Information Technology.</p>
  <hr className="my-5"/>
  <p>Enroll now to kickstart your IT career journey!</p>
  <a className="btn btn-lg btn1 btn-outline-light" href="#" role="button">Enroll Now</a>
  <br></br>
  <br></br>
  <br></br>
</div>


<div className="container ">
    <div className="row my-5">
      <div className="col-md-4">
        <div className="text-center">
          <i className="fas fa-university about-us-icon"></i>
          <h2 className="about-us-heading">Our Vision</h2>
          <p className="about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus. Sed pharetra semper nulla, vel efficitur tortor tempor non.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-center">
          <i className="fas fa-bullseye about-us-icon"></i>
          <h2 className="about-us-heading">Our Mission</h2>
          <p className="about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus. Sed pharetra semper nulla, vel efficitur tortor tempor non.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-center">
          <i className="fas fa-handshake about-us-icon"></i>
          <h2 className="about-us-heading">Our Values</h2>
          <p className="about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus. Sed pharetra semper nulla, vel efficitur tortor tempor non.</p>
        </div>
      </div>
    </div>
  </div>


  <section className="py-5 div3">
  <div className="container">
    <h2 className="text-center mb-4">Courses Offered</h2>
    <div className="row">
      {/* Course Card 1 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Bachelor of Science in Information Technology</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Duration: 3 Years</li>
              <li className="list-group-item">Eligibility: 10+2 (Sci./Com. Stream)</li>
              <li className="list-group-item">Syllabus: View syllabus</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Course Card 2 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Diploma in Information Technology</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Duration: 2 Years</li>
              <li className="list-group-item">Eligibility: 10th Pass</li>
              <li className="list-group-item">Syllabus: View syllabus</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Course Card 3 */}
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Certificate in FullStack Website Development</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat justo vitae augue malesuada, vel fermentum arcu rhoncus.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Duration: 6 Months</li>
              <li className="list-group-item">Eligibility: 10+2 (Any Stream)</li>
              <li className="list-group-item">Syllabus: View syllabus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Faculty Members Section */}

<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Faculty Members</h2>
    <div className="row text-center">
      {/* Faculty Member 1 */}
      <div className="col-md-4">
        <div className="card faculty-card">
          {/* <img src="faculty1.jpg" className="card-img-top faculty-img" alt="Faculty 1"/> */}
          <div className="card-body faculty-details">
            <h5 className="card-title faculty-name">John Doe</h5>
            <p className="card-text faculty-designation">Professor</p>
            <p className="card-text faculty-qualification">Ph.D. in Computer Science</p>
            <p className="card-text faculty-expertise"><strong>Areas of Expertise:</strong> Web Development, Data Science</p>
            <div className="text-center">
              <a href="#" className="mr-3"><i className="fab fa-facebook faculty-social-icons"></i></a>
              <a href="#" className="mr-3"><i className="fab fa-twitter faculty-social-icons"></i></a>
              <a href="#"><i className="fab fa-linkedin faculty-social-icons"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Faculty Member 2 */}
      <div className="col-md-4">
        <div className="card faculty-card">
          {/* <img src="faculty2.jpg" className="card-img-top faculty-img" alt="Faculty 2"/> */}
          <div className="card-body faculty-details">
            <h5 className="card-title faculty-name">Jane Smith</h5>
            <p className="card-text faculty-designation">Assistant Professor</p>
            <p className="card-text faculty-qualification">M.Tech. in Information Technology</p>
            <p className="card-text faculty-expertise"><strong>Areas of Expertise:</strong> Database Management, Cybersecurity</p>
            <div className="text-center">
              <a href="#" className="mr-3"><i className="fab fa-facebook faculty-social-icons"></i></a>
              <a href="#" className="mr-3"><i className="fab fa-twitter faculty-social-icons"></i></a>
              <a href="#"><i className="fab fa-linkedin faculty-social-icons"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Faculty Member 3 */}
      <div className="col-md-4">
        <div className="card faculty-card">
          {/* <img src="faculty3.jpg" className="card-img-top faculty-img" alt="Faculty 3"/> */}
          <div className="card-body faculty-details">
            <h5 className="card-title faculty-name">David Johnson</h5>
            <p className="card-text faculty-designation">Associate Professor</p>
            <p className="card-text faculty-qualification">M.Sc. in Computer Science</p>
            <p className="card-text faculty-expertise"><strong>Areas of Expertise:</strong> Software Engineering, Artificial Intelligence</p>
            <div className="text-center">
              <a href="#" className="mr-3"><i className="fab fa-facebook faculty-social-icons"></i></a>
              <a href="#" className="mr-3"><i className="fab fa-twitter faculty-social-icons"></i></a>
              <a href="#"><i className="fab fa-linkedin faculty-social-icons"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Student Testimonial Section */}

<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Student Testimonials</h2>
    <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {/* Testimonial Slide 1 */}
        {/* <div className="carousel-item active"> */}
        <div>
          <div className="testimonial-slide">
            {/* <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png" className="testimonial-photo" alt="Student 1"/> */}
            <h3 className="testimonial-name">John Doe</h3>
            <p className="testimonial-course">BSc in Information Technology</p>
            <p className="testimonial-quote">"I had an amazing experience at BSc IT Institute. The faculty is knowledgeable and supportive, and the course curriculum is comprehensive. I highly recommend this institute to anyone looking to pursue a career in IT."</p>
          </div>
        </div>
        {/* Testimonial Slide 2 */}
        {/* <div className="carousel-item"> */}
        <div>
          <div className="testimonial-slide">
            {/* <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png" className="testimonial-photo" alt="Student 2"/> */}
            <h3 className="testimonial-name">Jane Smith</h3>
            <p className="testimonial-course">Diploma in Web Development</p>
            <p className="testimonial-quote">"I'm grateful for my time at BSc IT Institute. The practical training and industry exposure I received here have prepared me well for the job market. It's been an enriching journey, and I'm proud to be an alumna."</p>
          </div>
        </div>
        {/* Testimonial Slide 3 */}
        {/* <div className="carousel-item"> */}
        <div>
          <div className="testimonial-slide">
            {/* <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png" className="testimonial-photo" alt="Student 3"/> */}
            <h3 className="testimonial-name">David Johnson</h3>
            <p className="testimonial-course">Certificate in Cybersecurity</p>
            <p className="testimonial-quote">"Choosing BSc IT Institute was one of the best decisions I've made. The institute provides a conducive learning environment and ample opportunities for skill development. I'm proud to be associated with such a prestigious institute."</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>






{/* Admissions Information */}
<section className="accordion-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Admissions Information</h2>
    <div className="accordion" id="admissionsAccordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Eligibility Criteria
            </button>
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#admissionsAccordion">
          <div className="card-body">
            <p>Here are the details about the eligibility criteria for our programs:</p>
            <ul>
              <li>Minimum age: 17 years</li>
              <li>High school diploma or equivalent</li>
              <li>Basic knowledge of mathematics and English</li>
              <li>Prior programming experience is a plus but not mandatory</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Application Process
            </button>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#admissionsAccordion">
          <div className="card-body">
            <p>Follow these steps to apply to our institute:</p>
            <ol>
              <li>Complete the online application form available on our website.</li>
              <li>Submit the required documents, including transcripts and identification.</li>
              <li>Pay the application fee through our secure payment gateway.</li>
              <li>Schedule and attend an interview with our admissions committee.</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Important Dates
            </button>
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#admissionsAccordion">
          <div className="card-body">
            <p>Keep track of these important dates for the admissions process:</p>
            <ul>
              <li>Application Deadline: July 31st</li>
              <li>Interviews: August 1st - August 15th</li>
              <li>Admission Decisions: August 20th</li>
              <li>Orientation: September 1st</li>
              <li>Classes Begin: September 5th</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Contact Information
            </button>
          </h2>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#admissionsAccordion">
          <div className="card-body">
            <p>For any admissions queries, please contact us at:</p>
            <p>
              <strong>Email:</strong> admissions@bscit.edu<br/>
              <strong>Phone:</strong> (123) 456-7890<br/>
              <strong>Address:</strong> 123 IT Avenue, Tech City, TC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* Infrastructure and Facilities */}

<section className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Our Infrastructure and Facilities</h2>
    <div className="gallery">
      {/* <!-- Thumbnails */}
      <div className="gallery-item" data-toggle="modal" data-target="#galleryModal" data-slide-to="0">
        <img src="https://content3.jdmagicbox.com/v2/comp/surat/p6/0261px261.x261.221203155216.w5p6/catalogue/ddk-wealth-management-and-learning-institute-utran-surat-institutes-for-stock-market-r27107pjoz.jpg" alt="Infrastructure Image 1"/>
      </div>
      <div className="gallery-item" data-toggle="modal" data-target="#galleryModal" data-slide-to="1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9knvqtmCmPA60D_Vy7u4tUkeeOQbZ8Dyob_6ksG6smq9B_pCLb1MvCp4TaCLjhSdZ0w&usqp=CAU" alt="Infrastructure Image 2"/>
      </div>
      <div className="gallery-item" data-toggle="modal" data-target="#galleryModal" data-slide-to="2">
        <img src="https://www.crimsoninstitute.in/img/computer_infrastructure.jpg" alt="Infrastructure Image 3"/>
      </div>
      <div className="gallery-item" data-toggle="modal" data-target="#galleryModal" data-slide-to="3">
        <img src="https://images.shiksha.com/mediadata/images/1546600599phpuOhm9N.jpeg" alt="Infrastructure Image 4"/>
      </div>
      {/* <!-- Add more thumbnails as needed */}
    </div>
  </div>
</section>

{/* <!-- Modal */}
{/* <div className="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="galleryModalLabel">Gallery</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div id="galleryCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            Carousel Items
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/800x500" className="d-block w-100" alt="Infrastructure Image 1"/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/800x500" className="d-block w-100" alt="Infrastructure Image 2"/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/800x500" className="d-block w-100" alt="Infrastructure Image 3"/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/800x500" className="d-block w-100" alt="Infrastructure Image 4"/>
            </div>
            Add more carousel items as needed
          </div>
          <a className="carousel-control-prev" href="#galleryCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#galleryCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}







{/* Students Activities */}


<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Student Clubs and Activities</h2>
    <div class="row">
      {/* Card 1 */}
      <div class="col-md-4 mb-4">
        <div class="card club-card">
          <img src="https://blog.cybersquare.org/hubfs/Purple%20Artificial%20Intelligence%20Technology%20Business%20Instagram%20Post%20%286%29.png" class="card-img-top" alt="Coding Club"/>
          <div class="card-body">
            <h5 class="card-title">Coding Club</h5>
            <p class="card-text">Join our Coding Club to improve your coding skills and participate in exciting projects and hackathons.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
            <a href="#" class="btn btn-dark mx-3">Get Involved</a>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div class="col-md-4 mb-4">
        <div class="card club-card">
          <img src="https://img.freepik.com/free-photo/scene-with-futuristic-robot-used-construction-industry_23-2151329524.jpg" class="card-img-top" alt="Robotics Club"/>
          <div class="card-body">
            <h5 class="card-title">Robotics Club</h5>
            <p class="card-text">Explore the world of robotics with hands-on projects and competitions in our Robotics Club.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
            <a href="#" class="btn btn-dark mx-3">Get Involved</a>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div class="col-md-4 mb-4">
        <div class="card club-card">
          <img src="data:image/jpeg;base64,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" class='card-img-top'/>
          <div class="card-body">
            <h5 class="card-title">Photography Club</h5>
            <p class="card-text">Capture beautiful moments and enhance your photography skills with our Photography Club.</p>
            <a href="#" class="btn btn-primary">Learn More</a>
            <a href="#" class="btn btn-dark mx-3">Get Involved</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





{/* Contact Us */}

{/* <section className="py-5"> */}
  <div className="container">
    <h2 className="text-center mb-4">Contact Us</h2>
    <div className="row">
      {/* Contact Form -->   <div className="col-md-6 mb-4"> */}
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
          </div>
          <div className="form-group my-3">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="form-group my-3">
            <label for="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter subject" required/>
          </div>
          <div className="form-group my-3">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>
      </div>
      {/* Google Map Embed */}
      <div className="col-md-6 mb-4">
        <h5>Our Location</h5>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509426!2d144.95373631531686!3d-37.81627917975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f98c64c34160!2sInstitute!5e0!3m2!1sen!2sus!4v1604035641271!5m2!1sen!2sus" 
                  allowfullscreen="" 
                  aria-hidden="false" 
                  tabindex="0">
          </iframe>
        </div>
      </div>
    </div>
  

{/* </section> */}



</div>


  
  )
}
