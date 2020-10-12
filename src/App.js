import React from 'react';
import './App.css';
import profile from './pic.jpeg';
import logo from './logo.png';
import './style.css';
import Api from './api';


/*"{/*import './smooth-scroll.js';}"*/


function App() {
  
  return (
    <div className="App">
      <div>
        <title>CURRICULUM VIATE</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        {/*----bootstrap link----*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/*--header*/}
        <section id="header">
          <div className="container text-center">
            <div className="user-box">
              <img src={profile} />
              <h1>Omphile Mongake</h1>
              <h2>Student</h2>
            </div>
          </div>
          <div className="scroll-btn">
            <div className="scroll-bar"><a href="#about"><span> </span></a></div>    
          </div>
        </section>
        {/*---User Info section-*/}
        <section id="user-info">
          <div className="nav-bar">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#"><img src={logo} /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" />
                {/*span class="navbar-toggler-icon"></span-*/}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#top">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">ABOUT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume">RESUME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">CONTACT</a>
                  </li> 
                </ul>
              </div>
            </nav>
          </div>
        </section>
        {/*-------About--------*/}
        <div className="about container" id="about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={profile} className="profile-img" />
            </div>
            <div className="col-md-6">
              <h3>THE CATALYST OF MY PERSONA</h3>
              <p>
                We've all transitioned from the humble beginnings of primary school to high school, and from high school to tertiary. 
                We've also phased through our own variations of obstacles and challenges. Every single individual has an ambition, but what exactly makes 
                one unique? These are the outstanding traits that from my paradigm:
                I am an enthusiastic, self-motivated, reliable, responsible and hard working person. 
                I am a mature team worker and adaptable to all challenging situations. 
                I am able to work well both in a team environment as well as using own initiative. 
                I am able to work well under pressure and adhere to strict deadlines.
                <b> </b><br />
                <b>Name(s):</b> Omphile Tlhaole Mongake<br />
                <b>Profession:</b> Student<br /> 
                <b>Physical Address:</b>  15390 Paardekraal, Rustenburg 0300<br />
                <b>Postal Address:</b>  P.O Box 6471 Mmabatho Mahikeng 2735<br />
                <b>Contact number:</b>  0722221043<br />
                <b>Email:</b> otmongake98@gmail.com<br />	
                <b>ID Number:</b> 9809055146083<br />
                <b>Date of birth:</b> 1998/09/05<br />
                <b>Nationality:</b> South African<br />
                <b>Languages:</b> English, Setswana<br />
              </p>
              <div className="skills-bar">
                <p>Delphi</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '80%'}}>80%</div>
                </div>
                <p>C#</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '88%'}}>88%</div>
                </div>
                <p>C</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '72%'}}>72%</div>
                </div>
                <p>C++</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '70%'}}>70%</div>
                </div>
                <p>Java</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '75%'}}>75%</div>
                </div>
                <p>HTML/CSS</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '85%'}}>85%</div>
                </div>
                <p>Vue</p>
                <div className="progress">
                  <div className="progress-bar" style={{width: '70%'}}>70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-------Social media icons-------*/}
        <div className="social-icons">
          <ul>
            <a href="#"><li><i className="fa fa-facebook" /></li></a>
            <a href="#"><li><i className="fa fa-twitter" /></li></a>
            <a href="#"><li><i className="fa fa-instagram" /></li></a>
            <a href="#"><li><i className="fa fa-linkedin" /></li></a>
            <a href="#"><li><i className="fa fa-github" /></li></a>
          </ul>
        </div>
        {/*----------RESUME-------------*/}
        <div className="resume" id="resume">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-center">Education &amp; Experiences</h3>
                <ul className="timeline">
                  <li>
                    <h4><span>2018-current </span> Tertiary Education</h4>
                    <p>
                      <b>Institution:</b> North-West University<br />
                      <b>City:</b> Potchefstroom<br />
                      <b>Degree:</b> Bachelor of Science<br />
                      <b>Field of Study:</b> Information Technology 
                    </p>
                    <h5><span>2012-2016 </span> Secondary Education</h5>
                    <p>
                      <b>Institution:</b> Fields College<br />
                      <b>City:</b> Rustenburg, North-West<br />
                      <b>Subjects:</b>
                      •	Mathematics
                      •	Physical Science
                      •	Information Technology
                      •	Business Studies
                      •	English
                      •	Afrikaans
                      •	Life orientation
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*----CONTACT ME------*/}
        <div className="contact" id="contact">
          <div className="container text-center">
            <h1>Contact Me</h1>
            <p>Hello my name is Omphile. <br />If you want to contact me punch in your details on th elinks provided and send me a message!</p>
            <div className="row">
              <div className="col-md-4">
                <i className="fa fa-phone" />
                <p>+27 072 222 1043</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-envelope" />
                <p>otmongake98@gmail.com</p>
              </div>
              <div className="col-md-4">
                <i className="fa fa-internet-explorer" />
                <p>www.otmongake.com</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary"><i className="fa fa-download" />Resume</button>
            <button type="button" className="btn btn-primary"><i className="fa fa-rocket" />Hire Me</button>
          </div>
        </div>
        {/*------Smooth Scroll----*/}

      </div>
      <Api />

      </div>


////////////////////////////////////////////////fetch data amd get key make an account here http://api.openweathermap.org

    );
  }

export default App;
