import React from "react";
import "./App.css";
import mahesh from "./assets/mentor_mahesh.png";
import life from "./assets/life.png";
import work from "./assets/work.png";
import workk from "./assets/workk.png";
import music from "./assets/music.png";
import music1 from "./assets/music1.png";
import youtube_logo from "./assets/youtube_logo.png";
import youtube1 from "./assets/youtube1.png";
import footer from "./assets/footer.png";
import Logo1 from "./assets/Logo1.png";
import mentoons_logo from "./assets/mentoons_logo.png";
import Propelling from "./assets/propelling.png";
import email from "./assets/email.png";
import phone from "./assets/phone.png";
import find_me_here from "./assets/find_me_here.png";

function App() {
  return (
    <div>
      <div style={{ background: "#0d0828",padding: '1.5rem' }}>
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <img src={mahesh} alt="" className="01_img" />
            </div>
          </div>
        </div>
      </div>
      <div className="LWM">
        <img src={life} alt="" />
        <img src={work} alt="" />
        <img src={music} alt="" />
      </div>
      <div className="first_div">
        <h3>
          Check out my youtube
          <span>
            <img src={youtube_logo} alt="" width="18rem" />
          </span>
          Chanel
        </h3>
        <img src={youtube1} alt="" id="youtube" />
      </div>
      
      <div className="second_div">
        <div className="about_me_imges">
          <img src={life} alt="" className="text_img" />
          <img src={footer} alt="" className="sir_img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          veritatis exercitationem cum rem iste iure quam optio perferendis
          adipisci. Quasi iste officiis perferendis voluptate optio adipisci
          quibusdam esse?
        </p>
        <h3>FACTS ABOUT ME</h3>
        <span>Hobbies</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus ? Laborum, atque repudiandae delenitasperiores placeat,
          ratione optio nisi in similique facilis vero? Non aut excepturi dolor
          temporibus! Dignissimos cum provident autem!
        </p>
      </div>
      <div className="third_div">
        <div className="work_imges">
          <img src={workk} alt="" className="sir_img" />
          <img src={work} alt="" className="text_img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptate libero inventore atque saepe doloremque magni quibusdam
          consequuntur, non odit. Quos a ea ullam iusto fugiat velit maiores
          sapiente non deserunt laudantium, distinctio voluptatibus? Provident
          aut facere similique aliquam illum ab velit soluta tempora
        </p>
      </div>
      <div className="fourth_div">
        <div className="music_imges">
          <img src={music} alt="" className="text_img" />
          <img src={music1} alt="" className="sir_img" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem vel
            minus ipsam magni. Soluta illum esse ratione magni voluptas
            consequatur natus excepturi ex, nisi quos recusandae harum eaque
            provident sunt molestiae aut fugiat suscipit in nesciunt quis. Quod
            sapiente ullam temporibus nulla! Facere, voluptatibus.
          </p>
        </div>
      </div>
      <div className="fifth_div">
        <div className="logo1">
          <img src={Logo1} alt="" />
          <p>
            modi a odio assumenda, provident delectus accusamus itaque
            repellendus nemo! Libero optio nemo perspiciatis, quisquam quia,
            commodi delectus iste assumenda a labore quam distinctio aliquam?
          </p>
        </div>
        <div className="logo2">
          <img src={mentoons_logo} alt="" />
          <p>
            modi a odio assumenda, provident delectus accusamus itaque
            repellendus nemo! Libero optio nemo perspiciatis, quisquam quia,
            commodi delectus iste assumenda a labore quam distinctio aliquam?
          </p>
        </div>
      </div>
      <div className="sixth_div">
        <h2>MENTORING</h2>
        <img src={Propelling} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          debitis vel! Possimus, repudiandae, enim ut esse quia ad consequatur
          atque recusandae commodi laudantium placeat praesentium eaque
          blanditiis. Odit recusandae earum voluptas cumque omnis distinctio
          temporibus corrupti, maxime laborum delectus ex. Eligendi nesciunt
          libero aliquid nobis nihil fugiat, consectetur, dolore excepturi
          laudantium quisquam id culpa aliquam asperiores inventore tenetur
          earum dignissimos possimus odit adipisci? Aliquam id corporis
          consequuntur asperiores quod, adipisci veritatis omnis. Labore officia
          dolorum soluta numquam!
        </p>
        <h2>CXO BRANDING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          debitis vel! Possimus, repudiandae, enim ut esse quia ad consequatur
          atque recusandae commodi laudantium placeat praesentium eaque
          blanditiis. Odit culpa aliquam asperiores inventore tenetur earum
          dignissimos possimus odit adipisci? Aliquam id corporis consequuntur
          asperiores quod, adipisci veritatis omnis. Labore officia dolorum
          soluta numquam!
        </p>
        <h2>PERSONAL BRANDING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          debitis vel! Possimus, repudiandae, enim ut esse quia ad consequatur
          atque recusandae commodi laudantium placeat praesentium eaque
          blanditiis. Odi culpa aliquam asperiores inventore tenetur earum
          dignissimos possimus odit adipisci? Aliquam id corporis consequuntur
          asperiores quod, adipisci veritatis omnis. Labore officia dolorum
          soluta numquam!
        </p>
      </div>
      <div className="seventh_div">
        <div className="contact">
          <h3>contact us on </h3>
          <div className="email">
            <img src={email} alt="" className="contact_img" />
            <b>email </b>
            mentoons@gmail.com
          </div>
          <div className="phone">
            <img src={phone} alt="" className="contact_img" />
            <b>phone</b>
            +918778244636
          </div>
          <div>
            <b>address-:</b>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              laborum distinctio beatae.
            </div>
          </div>
        </div>
        <img src={find_me_here} alt="" className="find_me_here" />
      </div>
    </div>
  );
}

export default App;

// MM Site - 2022
// About me section:

// I have always been fascinated with people, the human psyche and interpersonal dynamics & my early influences to music..
// (Woodstock logo, Love and peace symbol)

// Work Section ..No heading needed, just the flow..page 1 to 2

// I began my career in sales. Leveraging my expertise in scouting talent, I then shifted to the dynamic industry of Recruiting. Having met over 40,000 candidates and hired hundreds of them, I learnt the recruitment industry in and out.

// Shift to Work Page 2 ( CXO Tee Shirt)  Logo of CXO

// Having had the privilege of pitching to top CEO’s, interviewing multiple “C - Level “ executives, I noticed a gap… A big gap. The paucity of time. (Think of an image,

// Hiring for top management can be tricky. Those making the hiring decisions don't have ample time to go through an entire resume. Those applying, i.e. the ultra-accomplished corporate executives, do not know how to correctly leverage their experience and achievements.

// I decided to bridge that gap through my Venture CXO branding. Here my team and I collectively help these interviewees ace these interviews by designing and writing concise and competency based Cover letters, resumes and Video introductions.( Personal Branding Image )
// We also help them build a personal brand on LinkedIn as an additional asset that can help them get the best industry opportunities.( Image of Linkedin growth, flower to influencer image )

// For the 20+ Youngsters, I conceptualised 'Propelling Stories', where we help individuals to revamp their personal / digital presence through websites and social media strategies. We harness the impeccable power of story-telling and illustrations to capture the ever declining attention spans and evoke powerful emotions.

// Shift to page 3

// However, I didn't stop here. Always wanting to maximise my impact through work, I began two new ventures (Mentoons, Toonland Logo )

// After keenly observing modern technology and social media, I noticed the extent of their detrimental effects on our well-being. Seeing children and teenagers  addicted to technology disheartens me.

// Thus I began Mentoons. Psychology and cartoon based platform that helps people lead healthy, tech-enabled and not tech dependent lives. We also mentor young professionals seeking career guidance.

// ( IMAGE OF ALL 4 BRANDS , ME Standing illustration )

// MUSIC PAGE
// I've always been someone who derives my grit and inspiration from music, especially Metal music and Rock music from the 70’s, 80s and 90s. With my ventures right now, I am trying to pass on the same to everyone between the ages of 5 to 55 through stories and illustrations.

// My love for story-telling, illustrations and social impact are my why underneath everything I do.
