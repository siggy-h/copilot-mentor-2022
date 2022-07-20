import React from 'react'
import { SideMenu } from './SideMenu'
import { getData } from '../client'
import logo from '../logo.svg'
import './styles.css'

export const Home: React.FC = ()  => {

    const appData = getData()

    const menu = appData.categories.map(c => ({
        link: c.name,
        title: c.title
    }))
    return (
        <div className='Container'>
            <SideMenu menuItems={menu}/>
            <div className='Content'>
                <img src={logo} className="logo" alt="logo" />
                Home contents
            </div>
        </div>
    )
}
