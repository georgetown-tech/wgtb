import * as React from 'react'
import Layout from "../components/header/layout"
import "./contact.css"
import Footer from "../components/footer"

{/* <script src="https://smtpjs.com/v3/smtp.js"/>
function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
} */}

  const formPage = () => {
    return(
      <container>
        <Layout pageTitle = "Contact Us"/>
        {/* depending on CMS we use, it may be able to generate forms automatically */}
        <h2>Please fill out the contact form below with any inquiries:</h2>
        <form class="contact-form" method="post" action="#"> {/*# is placeholder for sending form data*/}
          <label for="name">
            Name
          </label>
          <input type="text" name="name" id="name" />

          <label for="email">
            Email
          </label>
          <input type="email" name="email" id="email" />
          

          <label for="subject">
            Subject
          </label>
          <input type="text" name="subject" id="subject" />
 
          <div>
            <label for="message">
            Message
            </label>
            <textarea name="message" id="message" placeholder="Please type your message here..."/>
          </div>
          <div class ="button-container">
            <button type="submit">Submit</button>
          </div>
          {/* <input type="reset" value="Clear" /> */}
        </form>


        <h2>Contact Information by Department:</h2>
        <div class= "contact-info">
          <h3>General Managers:</h3>
              <p>Ian Tracy, Serena Korkmaz</p>
              <a href="gm@georgetownradio.com">gm@georgetownradio.com</a>
          <h3>Website Directors:</h3>
            <p>Luke Monnich, Connor Lammas, Carolina Oxenstierna</p>
            <a href="rotation@georgetownradio.com">rotation@georgetownradio.com</a>
          <h3>Music Directors:</h3>
            <p>Christian Joseph</p>
            <a href="music@georgetownradio.com">music@georgetownradio.com</a>
          <h3>Events Directors:</h3>
            <p>Liepa Ivanauskas, Lucy Binder</p>
            <a href="events@georgetownradio.com">events@georgetownradio.com</a>
          <h3>Programming Director:</h3>
            <p>Anjali Paye</p>
            <a href="programming@georgetownradio.com">programming@georgetownradio.com</a>
          <h3>Promotions / Social Media Directors:</h3>
            <p>Darsey Trudo, Nina Jennings, Zoe Klausner</p>
            <a href="promotions@georgetownradio.com">promotions@georgetownradio.com</a>
          <h3>Business Director:</h3>
            <p>Ian Tracy</p>
            <a href="business@georgetownradio.com">business@georgetownradio.com</a>
          <h3>DJ Services:</h3>
            <p>Eloise Owen</p>
            <a href="djservices@georgetownradio.com">djservices@georgetownradio.com</a>
          <h3>Technology Director:</h3>
            <p>Will Atkinson</p>
            <a href="technology@georgetownradio.com">technology@georgetownradio.com</a>
        </div>

        {/* FOOTER */}
        <footer>
            <Footer>
            </Footer>
        </footer>
      </container>
    )
  }

export const Head = () => <title>Home Page</title>

export default formPage