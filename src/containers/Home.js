import React from "react"
import Main from "./Main";
import Footer from "../components/Footer/Footer";
import AdventureComponent from "../components/Adventure/Adventure";
import CompoundComponet from "../components/Compound/Compound";
import MetaMaskComponent from "../components/MetaMask/MetaMask";
import PassiveComponent from "../components/Passive/Passive";
import ReferralComponent from "../components/Referral/Referral";
import StrategyComponent from "../components/Strategy/Strategy";
import VisionComponent from "../components/Vision/Vision";
import { LogoIcon } from "../icons"
import { Link } from "react-scroll";

const Home = () => {

  return (
    <div className="">
      <div className="header-container">
        <header className="header">
          <div className="logo">
            <LogoIcon/>
          </div>
          <div className="logo-title">
            Eternity Earn
          </div>
          <div className="menu">
            <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
            <Link to="strategy" spy={true} smooth={true}>Strategy</Link>
            <Link to="reward" spy={true} smooth={true}>Rewards & Taxes</Link>
            <Link to="roadmap" spy={true} smooth={true}>RoadMap</Link>
          </div>
          <div className="tool">
            <div className="whitepaper">Whitepaper</div>
            <button className="blue-btn btn">Launch Dapp</button>
          </div>
        </header>
      </div>
      <Main>
        <PassiveComponent/>
        <StrategyComponent/>
        <ReferralComponent/>
        <VisionComponent/>
        <MetaMaskComponent/>
        <CompoundComponet/>
        <AdventureComponent/>
      </Main>
      <Footer/>
    </div>
  )
}

export default Home;