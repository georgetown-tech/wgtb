import * as React from 'react'
import Layout from "../components/header/layout"
import "../styles/contact.css"
import Footer from "../components/footer/footer.js"
import RadioPlayer from '../components/radio-player/radio-player.js';
 import { graphql } from 'gatsby'

export const useStaticQuery = graphql`
  query ContactDataQuery {
    allContentfulLeadershipContact {
      nodes {
        title
        currentLeaders
        email 
      }
    }
  }
`;

const Contact = ({ contactData }) => {
  return (
    <main className="contact-container">
      {contactData.map((contact) => (
          <div className="contact" key={contact.id}>
              <h1>{contact.title}:</h1> 
              <h2 className="contact-name">{contact.currentLeaders}</h2>
              <a href={`/${contact.email}`}>{contact.email}</a>
          </div>
      ))
      }
    </main>
)};
 
  const ContactPage = ({data}) => {
    const contactData = data.allContentfulLeadershipContact.nodes;


    return(
      <container>
        <Layout pageTitle = "Contact Us"/>
        <RadioPlayer/>
        <div className='form-container'>
        {/* SWITCH TO NETLIFY FORM HANDLING, RETURNS RESPONSES TO NETLIFY ACCOUNT */}
          <h2 className="form-header">Please fill out the contact form below with any inquiries:</h2>
          <form className="contact-form" method="post" action="#"> {/*# is placeholder for sending form data*/}
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
          <hr className="divider"/>


          <h2 className="form-header">Contact Information by Department:</h2>
          <div class="contact-info">
            <Contact contactData={contactData}/>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
            <Footer>
            </Footer>
        </footer>
      </container>
    )
  };


export default ContactPage



{/* <div class="contact">
              <h3>General Managers:</h3>
              <p>Ian Tracy, Serena Korkmaz</p>
              <a href="gm@georgetownradio.com">gm@georgetownradio.com</a>
            </div>
            <div class="contact">
              <h3>Website Directors:</h3>
              <p>Luke Monnich, Connor Lammas, Carolina Oxenstierna</p>
              <a href="rotation@georgetownradio.com">rotation@georgetownradio.com</a>
            </div>
            <div class="contact">
              <h3>Music Directors:</h3>
              <p>Christian Joseph</p>
              <a href="music@georgetownradio.com">music@georgetownradio.com</a>
            </div>

            <h3>Events Directors:</h3>
              <p>Liepa Ivanauskas, Lucy Binder</p>
              <a href="events@georgetownradio.com">events@georgetownradio.com</a>
            <h3>Programming Director:</h3>
              <p>Programming Director</p>
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
          </div> */}