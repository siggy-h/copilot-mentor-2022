import appData from './data.json'
import { Category, KnowledgeData, Topic } from './types'

export const getData = (): KnowledgeData => {
    return appData
}

export const getCategory = (category: string): Category | undefined  => {
    return appData.categories.find((c) => c.name === category)
}

export const getTopic = (category: string, topic: string): Topic | undefined => {
    const c = getCategory(category)
    return c?.topics.find(t => t.name === topic)
}
