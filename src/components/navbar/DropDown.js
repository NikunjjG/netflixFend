import React, { useState } from 'react'
import './DropDown.css'
import { MenuItems } from './MenuItems'

export default function DropDown() {
    const [click, setClick] = useState(false)

    const handleClick = ()=> setClick(!click)
  return (
    <div>
      <ul onClick={handleClick}
      className = {click?'dropdownMenu Clicked':'dropdownMenu'}>
        {MenuItems.map((item,index) => {
            return(
                <li key={index}>
                    <span className={item.cName}>
                        {item.title}
                    </span>
                </li>
            )
        })}
      </ul>
    </div>
  )
}
