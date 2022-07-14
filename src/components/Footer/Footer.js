import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import {
  ArrowupIcon,
  CronosIcon,
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="link-container">
                <div className="link">
                  <div>
                    <Link className="text" to="about" spy={true} smooth={true}>
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text"
                      to="strategy"
                      spy={true}
                      smooth={true}
                    >
                      Strategy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 border">
              <div className="link-container">
                <div className="link">
                  <div>
                    <Link className="text" to="reward" spy={true} smooth={true}>
                      Rewards & Taxes
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text"
                      to="roadmap"
                      spy={true}
                      smooth={true}
                    >
                      RoadMap
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
                <div className="link">
                  <div className="text text-black">CONTACT</div>
                  <div className="text email">EmailHere@email.com</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="text subtext">
          Copyright © 2022 Eternity Earn, All rights Reserved
        </div>
        <div className="linklist">
          <NavLink to="#">
            <CronosIcon className="cronos" />
          </NavLink>
          <NavLink to="#">
            <TelegramIcon />
          </NavLink>
          <NavLink to="#">
            <TwitterIcon />
          </NavLink>
          <NavLink to="#">
            <DiscordIcon />
          </NavLink>
          <NavLink to="#">
            <ArrowupIcon />
          </NavLink>
          <NavLink to="#">
            <FacebookIcon />
          </NavLink>
          <NavLink to="#">
            <InstagramIcon />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
