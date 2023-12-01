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
        <p>
          General Managers:
Ian Tracy, Serena Korkmaz;
gm@georgetownradio.com
Website Directors:
Luke Monnich, Connor Lammas, Carolina Oxenstierna;
rotation@georgetownradio.com
Music Directors:
Christian Joseph;
music@georgetownradio.com
Events Directors:
Liepa Ivanauskas, Lucy Binder;
events@georgetownradio.com
Programming Director:
Anjali Paye
programming@georgetownradio.com
Promotions / Social Media Directors:
Darsey Trudo, Nina Jennings, Zoe Klausner;
promotions@georgetownradio.com
Business Director:
Ian Tracy
business@georgetownradio.com
DJ Services:
Eloise Owen
djservices@georgetownradio.com
Technology Director:
Will Atkinson
technology@georgetownradio.com
          </p>
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