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
import { useRef } from "react";
import Scrollbtn from "./Scrollbtn";


function App() {
  const lifee = useRef(null);
  const worke = useRef(null);
  const musice = useRef(null);
  // const scrollToSection = (ElementRef) => {
  //   window.scrollTo({
  //     top: ElementRef.current.offSetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="main_circle" style={{ background: "#0d0828", padding: "1.5rem" }}>
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <img src={mahesh} alt="" className="01_img" />
            </div>
          </div>
        </div>
      </div>
      <div className="LWM">
        <a href="#lifee">
          {" "}
          <img className="lifee" src={life} alt="" />
        </a>
        <a href="#musice">
          {" "}
          <img className="music" src={music} alt="" />
        </a>
        <a href="#worke">
          {" "}
          <img className="work" src={work} alt="" />
        </a>
  
      </div>
      <div className="first_div">
        <h2>
          Check out my youtube
          <span>
            <img src={youtube_logo} alt="" width="15rem" />
          </span>
          Chanel
        </h2>
        <img src={youtube1} alt="" id="youtube" />
      </div>

      <div id="lifee" ref={lifee} className="second_div">
        <div className="about_me_imges">
          <img src={life} alt="" className="text_img" />
          <img src={footer} alt="" className="" />
        </div>
        <p>
          I have always been fascinated with people, the human psyche and
          interpersonal dynamics & my early influences to music.. (Woodstock
          logo, Love and peace symbol)
        </p>
        <h2>FACTS ABOUT ME</h2>
        {/* <span>Hobbies</span> */}
        <p>
          I began my career in sales. Leveraging my expertise in scouting
          talent, I then shifted to the dynamic industry of Recruiting. Having
          met over 40,000 candidates and hired hundreds of them, I learnt the
          recruitment industry in and out.
        </p>
      </div>


      <div id="musice" ref={musice}  className="fourth_div">
        <div className="music_imges">
          <img src={music} alt="" className="text_img" />
          <img src={music1} alt="" className="sir_img" />
        </div>
        <div>
          <p>
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </p>
        </div>
      </div>



      <div id="worke" ref={worke} className="third_div">
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
   
      <div id="musice" ref={musice} className="fifth_div">
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
          <h3>contact us </h3>
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

