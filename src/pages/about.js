import * as React from 'react'
import Layout from "../components/header/layout"
// Imports style sheet
import "../styles/about.css"
import Footer from "../components/footer/footer.js"


// Creates the header for the page
const About = () => {
  return (
    <container>
      {/* Place HTML code in this container */}
      <Layout pageTitle="About Us" />

      <div class="fullsection">

        {/* This is the video at the top of the page */}
        <center>
          <iframe
            title="Radical Silence: The Story of WGTB-FM"
            src="https://player.vimeo.com/video/33088293?h=4b0f35a159&amp;dnt=1&amp;app_id=122963"
            width="600"
            height="338"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </center>
        <br /><br />

        <h2 class="sectiontitle">Club Overview</h2>
        <div class="overview">
          <p>
            WGTB is Georgetown University’s student-run, internet-streaming campus radio station, serving as Georgetown’s central source for music news, reviews, events, and community as well as broadcasting talk, sports, news, and music. Our mission is to be an integral part of the Georgetown undergraduate experience and the Washington community, providing a forum for students to broadcast, to discover new music and communicate ideas and opinions, and to enjoy live music. We manage this through on-air programming, The Rotation, and major events and concerts. In recent years, WGTB has hosted artists such as: Slowthai, Faye Webster, Snailmail, Girl Talk, Best Coast, Dan Deacon, The Hood Internet, Real Estate, Reptar, Das Racist, US Royalty, ZZ Ward, Kids These Days, twenty|one|pilots, and Nick Waterhouse.
          </p>
        </div>

        <h2 class="sectiontitle">History</h2>
        <div class="history">
          <p>
            WGTB was founded as the Georgetown Broadcasting System in 1946 by Rev. Francis Hayden, S.J. In its earliest incarnation, the station was primarily an outlet for news and public affairs programming. The station developed “The Georgetown Forum” during the 1950s which became famous for hosting notable public figures and scholars to discuss the topics of the day. At that time, the studio was located in Healy Hall, and it would often receive complaints from the physics department, also located at the time in Healy Hall, that radio waves coming from the studio were interfering with their instruments.
            <br /><br />
            By the 1970s, the station had shifted course to music-oriented programming. WGTB became well-known throughout the Washington, DC metro area as a voice for new music, and more notably as a voice for the political left, broadcasting anti-war programming across a 60-mile radius. Maintaining a political voice for dissidents of the day established the station as a mainstay among the left-wing community. This stance was the source of considerable friction between the station and the university administration, resulting in several shutdowns, and eventually the end of WGTB. In 1979, to mark the creation of the University of the District of Columbia (UDC), Georgetown donated WGTB’s 6700 watt signal (90.1 FM) to UDC. This signal was later sold by UDC in 1997 to C-SPAN for $25 million.
            <br /><br />
            After the permanent shutdown, the station was reincarnated as WROX, broadcasting solely through the campus on AM carrier current. The WGTB moniker was soon resurrected however, but the station was a mere shadow of its former self. In the words of late ‘80s GTB alum Joe Kelly, “We used cruddy outdated equipment and were always a half step away from being shut down by the university. By my senior year, all they could say about us in the yearbook was that we survived another year.” It is certainly to the credit of the DJs and staff of this period that they accessed to keep the WGTB spirit alive.
            <br /><br />
            In 1996, student Shan Vosseller led a drive to revive WGTB, and built the current studios located in the Leavey Center. The current incarnation of WGTB broadcasts FM stereo on a “leaky cable” system that can only be heard in wired dormitories on campus. In 2001, WGTB began broadcasting on the web, and in 2010 launched The Rotation, an online publication featuring reviews, concerts, interviews, and other interactive features to serve the Georgetown and Washington communities.
          </p>
        </div>

        <h2 class="sectiontitle">Q&A</h2>
        <div class="qa">
          <p class="q">
            Q: So, what is WGTB now?
          </p>
          <p class="a">
            A: Well, if you haven’t figured it out by now, chances are you won’t, but WGTB is a radio station. More specifically, it is an entirely student-operated radio station broadcasted exclusively over the internet.
          </p>
          <p class="q">
            Q: Where is WGTB actually located?
          </p>
          <p class="a">
            A: Georgetown Radio offices are located on the fourth floor of the Leavey Center (the elevators are next to the Credit Union). The main studio is just off Hoya Court—it’s the big window to the right of the entrance to Bulldog Alley on the first floor of the Leavey Center. Feel free to express your affection to the station and its respective DJs at that window.
          </p>
          <p class="q">
            Q: I’m a parent/significant other/person over the age of 35 and I want to listen to WGTB. How do I go about doing that?
          </p>
          <p class="a">
            A: It’s actually pretty easy. All you need to do is make sure you have either <a href="https://www.winamp.com/">WinAmp</a>, <a href="https://www.real.com/">Real Player</a>, or the ever-popular <a href="https://www.apple.com/itunes/">iTunes</a> installed on your computer and then click on the big “Listen Live” button on the top of every page here at georgetownradio.com. If prompted, choose to open the ”.pls” file with the player of your choice.
          </p>
          <p class="q">
            Q: How can I get involved?
          </p>
          <p class="a">
            A: At the beginning of each semester WGTB interviews interested students for DJ positions. If you find yourself in the middle of a semester with a burning need to help Georgetown Radio, chances are you won’t get a radio show. However, there’s plenty to do around the station that doesn’t involve DJing and that we need help with, so shoot us an email (<a href="mailto:GM@georgetownradio.com">GM@georgetownradio.com</a>) and hopefully, we can find you a place with WGTB in one of our departments.
            Make sure you’re following us on our <a href="https://twitter.com/wgtb">Twitter</a>, <a href="https://www.instagram.com/georgetownradio/">Instagram</a>, and <a href="https://www.facebook.com/georgetownradio/">Facebook</a>. Our <a href="../blog">blog</a> is also quite active and a great way to get involved – even by commenting.
          </p>
          <p class="q">
            Q: I’m an alum and/or general fan of WGTB. Please keep me in the loop!
          </p>
          <p class="a">
            A: That’s great news, we launched our Alumni Association in the spring of 2011. You can sign up for that <a href="https://spreadsheets0.google.com/a/georgetownradio.com/spreadsheet/viewform?hl=en&hl=en&formkey=dHV2NTVvZlRDNHJoUkZqaEZTbmhFMGc6MQ#gid=0">here</a> – we’ll email you from time to time about cool things and events happening at our station.
            If you’re a band/neighbor/blog/company/individual who just loves WGTB (and why wouldn’t you!) please sign up for our Friends of WGTB listserv by emailing <a href="mailto:GM@georgetownradio.com">GM@georgetownradio.com</a>.
          </p>
          <p class="q">
            Q: How can I contact the station?
          </p>
          <p class="a">
            A: Emailing is probably the best way. The emails of the directors are listed on the contact page. They are desperate for human contact and would love to talk with you.
          </p>
          <p class="q">
            Q: Does Georgetown Radio host live acts?
          </p>
          <p class="a">
            A: Sure, why not? If your band or the band you represent is interested in performing live in-studio or even in a concert event, email our events director and they’ll help you out.
          </p>
          <p class="q">
            Q: Does WGTB accept submissions?
          </p>
          <p class="a">
            A: Yep. Send them to our offices in the Leavey Center and if you want, email the music director as well. Here’s the address:

            Attn: Teddy Carey, WGTB
            432 Leavey Center, Georgetown University
            Washington, DC 20057
          </p>
          <p class="q">
            Q: Can I rent equipment?
          </p>
          <p class="a">
            A: Sure. Contact the tech director and check out the DJ Services page for more information.
          </p>
          <p class="q">
            Q: So, which is it, “WGTB” or “Georgetown Radio”?
          </p>
          <p class="a">
            A: We’re fond of both and will continue to alternate without reason.
          </p>


        </div>

      </div>

      {/* FOOTER */}
      <footer>
        <Footer>
        </Footer>
      </footer>


    </container>
  )
}

// This stores the HTML head
export const Head = () => <title>About</title>
// This stores the HTML body
export default About
