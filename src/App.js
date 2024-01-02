import React from 'react'
import { AppContext } from './Context/ContextApi'
import Header from "./Components/Header"
import Feed from "./Components/Feed"
import LeftNav from "./Components/LeftNav"
import LeftNavMenuItem from "./Components/LeftNavMenuItem"
import SearchResult from "./Components/SearchResult"
import SearchResultVideo from "./Components/SearchResultVideo"
import VideoCard from "./Components/VideoCard"
import VideoDetails from "./Components/VideoDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />}/>  {/* exact means default load priority components */}
            <Route path='/searchResult/:searchQuery' element={<SearchResult />}/>
            <Route path='/video/:id' element={<VideoDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App