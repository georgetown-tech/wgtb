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