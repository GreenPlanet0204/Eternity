import React from "react"
import { LogoIcon } from "../../icons"
import Menu from "./Menu/Menu"

const Header = () => {
  return(
    <div className="header-container">
<header className="header">
      <div className="logo">
        <LogoIcon/>
      </div>
      <div className="logo-title">
        Eternity Earn
      </div>
      <Menu/>
      <div className="tool">
        <div className="whitepaper">Whitepaper</div>
        <button className="blue-btn btn">Launch Dapp</button>
      </div>
        
    </header>
    </div>
    
  )
}

export default Header;