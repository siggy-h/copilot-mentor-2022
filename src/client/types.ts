export type KnowledgeData = {
    categories: Category[]
}

export type Category = {
    name: string // iaa, message_center
    title: string // IAA, Message Center
    description?: string
    topics: Topic[]
}

export type Topic = {
    name: string // tips, common_mistakes
    title: string // Tips, Common Mistakes
    description?: string
    entries: Entry[]
}

// ie. a Tip
export type Entry = {
    data: string // TBD, for now input from text area
    createdBy: string // a user, for now just a string name
    created: string
    updated: string
}

