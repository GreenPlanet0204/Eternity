import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { ArrowupIcon, CronosIcon, DiscordIcon, FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../../icons";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="row">
        <div className="col-4">
          <div className="link">
            <div>
              <Link className="subtext" to="about">About</Link>
            </div>
            <div>
              <Link className="subtext" to="strategy">Strategy</Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="link">
            <div>
              <Link className="subtext" to="reward">Rewards & Taxes</Link>
            </div>
            <div>
              <Link className="subtext" to="roadmap">RoadMap</Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="link">
            <div className="subtext text-black">CONTACT</div>
            <div className="subtext">EmailHere@email.com</div>
          </div>
        </div>
      </div>
      

    </div>

    <div className="bottom-container">
        <div className="text subtext">Copyright © 2022 Eternity Earn, All rights Reserved</div>
        <div className="linklist">
          <NavLink to="#"><CronosIcon/></NavLink>
          <NavLink to="#"><TelegramIcon/></NavLink>
          <NavLink to="#"><TwitterIcon/></NavLink>
          <NavLink to="#"><DiscordIcon/></NavLink>
          <NavLink to="#"><ArrowupIcon/></NavLink>
          <NavLink to="#"><FacebookIcon/></NavLink>
          <NavLink to="#"><InstagramIcon/></NavLink>
        </div>
      </div>
    </>
    
  );
};

export default Footer;
