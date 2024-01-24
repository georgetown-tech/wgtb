import * as React from 'react'
import Layout from "../components/header/layout"
import "../styles/about.css"
import Footer from "../components/footer/footer.js" 

const DjServicesPage = () => (
  <container>
  <Layout pageTitle="DJ Services"/>
    <div class="fullsection">
    <h2 class = "sectiontitle" >Sound Equipment Rentals/DJ Services</h2>
    <p>WGTB offers a full range of professional-quality technical services for events of all sizes. Student organizations have the opportunity to reserve our various equipment and request the services of our diverse and talented DJs. Just tell us the who, the what, the where, the when, and the why… we’re here to help you have a successful event and a great time.</p>
    <p>Here is a standard list of the services we offer. If you would like a more specific request, or just want more information, email Melissa Frazee at djservices@georgetownradio.com</p>
    <ul>
      <li>Equipment rentals: For a $125 rental fee, you can reserve our various equipment. We will drop off the equipment, as well as set it up to your specifications.</li>
      <li>Equipment rental and Tech/DJ specialist: For a $125 rental fee and an hourly fee of $20, we can not only provide our equipment but a member of the DJ Services department to also operate the equipment and play music. For larger events, a separate tech specialist and DJ specialist may be required.</li>
      <li>Tech/DJ Specialist: For an hourly fee of $20, one of our DJs will provide music for your event. You may request everything from genre to specific songs and we will send a DJ who can best serve you.</li>
    </ul>
    <p>Past events have included everything from providing a basic microphone/speaker setup for a career talk hosted by the College Academic Council to DJing SAC Fair to mixing sound for a benefit concert.</p>
    <p>Our equipment includes, but is not limited to: large tower speakers, mixing boards, pre-amps, microphones, mic stands, monitors, and any cable you could ever need.</p>
    <p>Oh and we do it all for the cheapest prices you’ll find anywhere!</p>
    <p>Please fill out this form to help us help you have a successful event.  To ensure availability of the equipment please give us two weeks notice.</p>
    <h2 class="sectiontitle">Concerts</h2>
    <p>One of the most exciting adventures WGTB has embarked on is concert hosting. We'll host anyone from a student band to that buzz band you missed at the Black Cat.</p>
    <p>In the past, we've hosted artists such as:</p>
    <ul>
      <li>Cults</li>
      <li>Real Estate</li>
      <li>Hood Internet</li>
      <li>Best Coast</li>
      <li>Reptar</li>
      <li>The Wrens</li>
      <li>Sondre Lerche</li>
      <li>Mr. Lif</li>
      <li>Voxtrot</li>
      <li>Dan Deacon</li>
      <li>Girl Talk</li>
      <li>Mary Timony</li>
      <li>Marnie Stern</li>
      <li>Georgie James</li>
      <li>Aa</li>
      <li>Apes</li>
      <li>The Bowerbirds</li>
      <li>Tim Sweeney</li>
      <li>US Royalty</li>
      <li>ZZ Ward</li>
      <li>Kids These Days</li>
      <li>twenty | one | pilots</li>
      <li>Nick Waterhouse</li>
      <li>Wavves</li>
      <li>Faye Webster</li>
      <li>slowthai</li>
      <li>Snail Mail</li>
      <li>Sidney Gish</li>
      <li>MICHELLE</li>
    </ul>
    <h2 class="sectiontitle">In-Studio Interviews and Performances</h2>
    <p>Playing a DC gig and want to use your down time before the show to gain some publicity? We’d love to chat with you on air and host an acoustic performance in the studio!</p>
    <p>In the past, we've hosted artists such as:</p>
    <ul>
      <li>Nina Nastasia</li>
      <li>Jamie Lidell</li>
      <li>John Vanderslice</li>
      <li>Akron/Family</li>
      <li>M. Ward</li>
      <li>Figurines</li>
      <li>Quiet Company</li>
      <li>The Silver Liners</li>
    </ul>
    <p>Contact our Events Director at events@georgetownradio.com for more information on how to book your next show!</p>
    </div>
    {/* FOOTER */}
      <footer>
          <Footer>
          </Footer>
      </footer>
    </container>
    )

export default DjServicesPage;
