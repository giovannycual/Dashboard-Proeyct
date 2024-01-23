import React from 'react'
import {Link} from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data.ts"
const Menu=()=> {
  return (
    <div className='menu'>
      {menu.map((item)=>(
      <div className='item' key={item.id}>
        <span className='tittle'>{item.title}</span>
        {item.listItems.map((listItem)=>(
          <Link to="/" className='listItem' key={listItem.id}>
          <img src={listItem.icon} alt="" />
          <span className='listItemTittle'>{listItem.title}</span>
        </Link>
        ))}
      </div>
    ))}
    </div>
    
  )
}

export default Menu