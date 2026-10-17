import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Navbar';
import Hero from './Hero';
import Commercial from './Commercial';
import Footer from '../../Components/Footer/Footer';
import '../../Styles/premium.css';

const Home = () => (
  <div className="di-site">
    <Header />
    <main>
      <Hero />
      <Commercial />
      <section className="di-section di-section--muted" aria-labelledby="di-how-heading">
        <div className="di-container di-split">
          <div className="di-panel-visual" aria-hidden="true">
            <div className="di-panel-top">DEVELOP-IQ / OUR APPROACH</div>
            <div className="di-panel-code">
              <div><strong>01.</strong> understand_the_problem()</div>
              <div><strong>02.</strong> architect_the_solution()</div>
              <div><strong>03.</strong> build_and_iterate()</div>
              <div><strong>04.</strong> deliver_with_clarity()</div>
            </div>
          </div>
          <div>
            <span className="di-eyebrow">THE DIFFERENCE</span>
            <h2 id="di-how-heading">Good software starts with understanding.</h2>
            <p>We're a focused, six-person engineering team that approaches every engagement with attention to the problem, the product and the people using it.</p>
            <ul className="di-simple-list">
              <li>Clear requirements and thoughtful architecture</li>
              <li>Practical development from web to mobile</li>
              <li>Transparent scope and ownership discussions</li>
            </ul>
            <Link className="di-button di-button--outline" to="/About">Get to know Develop-IQ <span className="di-arrow" aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="di-section" aria-labelledby="di-process-heading">
        <div className="di-container">
          <div className="di-section-intro">
            <span className="di-eyebrow">WORKING TOGETHER</span>
            <h2 id="di-process-heading">A simple process. A considered outcome.</h2>
            <p>Whether you're commissioning new software or considering a licensed asset, we'll start with what you actually need.</p>
          </div>
          <div className="di-steps">
            <div className="di-step"><span className="di-step-number">01 / DISCOVER</span><h3>Define the challenge</h3><p>Understand your use case, business objectives, timelines and any constraints.</p></div>
            <div className="di-step"><span className="di-step-number">02 / PLAN</span><h3>Choose the right path</h3><p>Discuss custom development, eligible existing assets or the best collaboration model.</p></div>
            <div className="di-step"><span className="di-step-number">03 / DELIVER</span><h3>Make it real</h3><p>Agree on scope, milestones, responsibilities and a clear route to execution.</p></div>
          </div>
        </div>
      </section>
      <section className="di-cta-wrap">
        <div className="di-container">
          <div className="di-cta">
            <div><span className="di-eyebrow di-eyebrow--light">LET'S BUILD SOMETHING MEANINGFUL</span><h2>Your next product deserves a thoughtful start.</h2><p>Start a conversation about development, software licensing or a technology partnership.</p></div>
            <Link className="di-button di-button--white" to="/Contact">Let's talk <span className="di-arrow" aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
