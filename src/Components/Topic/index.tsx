import React from 'react'
import { useParams } from 'react-router-dom'
import { getTopic } from '../../client'
import { Topic } from '../../client/types'
import { TopicEntry } from './TopicEntry'

export const TopicDetail: React.FC = () => {
    const {category, topic: topicParam} = useParams()
    const [topic, setTopics] = React.useState<Topic | undefined>()

    React.useEffect(() => {
        if(!category || !topicParam) return

        const data = getTopic(category, topicParam)

        if(data) {
            setTopics(data)
        }

    }, [category, setTopics, topicParam])

    return (
        <div>
            <h2>{topic?.title}</h2>
            <p>{topic?.description}</p>
            {topic?.entries && topic.entries.map(entry => <TopicEntry key={`${topic.name}_${entry.created}`} entry={entry}/> ) }
            <button>+ Add New</button>
        </div>
    )
}
