import React from 'react'
import Button from './Button'
import {Link} from 'react-scroll';
import { isMobile } from 'react-device-detect'
import Flip from 'react-reveal/Flip';


import '../scss/Pages/Header.scss'



class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, active:false, buttonSrc: "/images/open.png" };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  toggleMenu(){
    this.setState({ show: !this.state.show });
    if(this.state.buttonSrc==="/images/close.png"){
      this.setState({ buttonSrc: "/images/open.png" });
    }else{
      this.setState({ buttonSrc: "/images/close.png" });
    }
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  closeMenu(){
    this.setState({ show: false });
    this.setState({ buttonSrc: "/images/open.png" });
    document.body.style.overflowY = "scroll";
  }
  render(){
  return (
    <>
      {isMobile? 
        <>
          <button onClick={this.toggleMenu} className="menu__button">
            <img src={this.state.buttonSrc} alt=""/>
          </button>
        </>
        : null}
      {isMobile? 
        <Flip left when={this.state.show}>
      <nav>
          <Link to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={this.closeMenu} className="nav__item">Home</Link>
          <Link to="info"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={this.closeMenu} className="nav__item">Templates</Link>
          <Link to="team"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={this.closeMenu} className="nav__item">Team</Link>
          <Link to="cta"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500} onClick={this.closeMenu} className="nav__item">Help</Link>
          <Button onClick={this.closeMenu} type={'header'}/>
      </nav> </Flip>:
      <nav>
          <Link to="home"
            spy={true}
            smooth={true}
            offset={-110}
            duration= {500}  className="nav__item">Home</Link>
          <Link to="info"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}  className="nav__item">Templates</Link>
          <Link to="team"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}  className="nav__item">Team</Link>
          <Link to="cta"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}  className="nav__item">Help</Link>
          <Button type={'header'}/>
      </nav>
      }
    </>
  )}
}

export default Nav
