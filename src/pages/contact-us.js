import * as React from "react";
import Layout from "../components/header/layout";
import "../styles/contact.css";
import Footer from "../components/footer/footer.js";
import RadioPlayer from "../components/radio-player/radio-player.js";
import { graphql } from "gatsby";

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
      ))}
    </main>
  );
};

const ContactPage = ({ data }) => {
  const contactData = data.allContentfulLeadershipContact.nodes;

  return (
    <container>
      <Layout pageTitle="Contact Us" />
      <RadioPlayer />
      <div className="form-container">
        {/* SWITCH TO NETLIFY FORM HANDLING, RETURNS RESPONSES TO NETLIFY ACCOUNT */}
        <h2 className="form-header">
          Please fill out the contact form below with any inquiries:
        </h2>
        <form className="contact-form" method="post" action="#">
          {" "}
          {/*# is placeholder for sending form data*/}
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="subject">
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Please type your message here..."
            />
          </div>
          <div class="button-container">
            <button type="submit">Submit</button>
          </div>
          {/* <input type="reset" value="Clear" /> */}
        </form>
        <hr className="divider" />

        <h2 className="form-header">Contact Information by Department:</h2>
        <div class="contact-info">
          <Contact contactData={contactData} />
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <Footer></Footer>
      </footer>
    </container>
  );
};

export default ContactPage;
