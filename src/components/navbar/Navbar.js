import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import './Navbar.css'
import DropDown from './DropDown'

export default function Navbar() {
  const [isScrolled,setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  };
  const onMouseEnter = () => setDropdown(true)
  const onMouseLeave = () => setDropdown(false)
  return (
    <div className= {isScrolled ? "navbarScrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className='netflixLogo' />
            <span className='navSpan'>Homepage</span>
            <span className='navSpan'>Series</span>
            <span className='navSpan'>Movies</span>
            <span className='navSpan'>New and Popular</span>
            <span className='navSpan'>My List</span>
        </div>
        <div className="right">
            <Search className='navbarRightIcon'/>
            <span>KID</span>
            <Notifications className='navbarRightIcon'/>
            <img src="https://m.media-amazon.com/images/I/61mFim9J5xL._SY450_.jpg" alt="" className='profilePicture'/>
            <ArrowDropDown className='navbarRightIcon' onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}/>
            {dropdown && <DropDown/>}
        </div>
      </div>
    </div>
  )
}
