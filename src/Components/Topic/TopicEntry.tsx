import React from 'react'
import { Entry } from '../../client/types'
import './styles.css'

interface Props {
    entry: Entry
}
export const TopicEntry: React.FC<Props> = ({entry}) => {
    return (
        <div className={'EntryContainer'}>
            {entry.data}
            <div className='byLine'>
                <p>{entry.createdBy}: {new Date(entry.updated).toDateString()}</p>
            </div>
        </div>)
}
