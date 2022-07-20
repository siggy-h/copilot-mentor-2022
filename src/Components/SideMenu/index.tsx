import React from 'react'
import {NavLink} from 'react-router-dom'
import './SideMenu.css'

export type MenuItem = {
    link: string,
    title: string
}

interface Props {
    menuItems: MenuItem[]
}

export const SideMenu: React.FC<Props> = ({menuItems}) => {
    return (
        <div className='SideMenu'>
            <ul>
                {menuItems.map( (item, index) =>
                    <li key={index}>
                        <NavLink to={item.link}
                            className={({isActive}) =>
                                isActive
                                    ? 'SideMenuListItemActive'
                                    : 'SideMenuListItem'
                            }>
                            <div className='menuCard'>{item.title}</div>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}
