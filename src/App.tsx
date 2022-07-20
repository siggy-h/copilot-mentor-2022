import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { KnowledgeApp } from './Components/KnowledgeApp'
import { Home } from './Components/Home'
import { Category } from './Components/Category'
import { TopicDetail } from './Components/Topics/Topic'

const App:React.FC = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<KnowledgeApp />}>
                    {/* www.myKnowledgeApp/ */}
                    <Route index element={<Home />} />
                    {/* www.myKnowledgeApp/IAA */}
                    <Route path=':category' element={<Category /> }>
                        {/* www.myKnowledgeApp/IAA/Tips */}
                        <Route path=":topic" element={<TopicDetail />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
