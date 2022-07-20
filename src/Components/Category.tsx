import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getCategory } from '../client'
import { SideMenu } from './SideMenu'
import { topicsMenu } from './constants'
import './styles.css'

export const Category: React.FC = ()  => {
    const params = useParams()
    const {category} = params

    const data = getCategory(category ?? '')

    const menu = data ? data.topics.map(t => ({
        link: t.name,
        title: t.title
    })) : topicsMenu

    return (
        <div className='Container'>
            <SideMenu menuItems={menu}/>
            <div className='CategoryContainer'>
                <h1>
                    {data?.title }
                </h1>
                <p>{data?.description}</p>
                <Outlet/>
            </div>
        </div>
    )
}
