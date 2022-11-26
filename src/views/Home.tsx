import { useState } from 'react'
import '../App.css'
import NewUsersComp from '../components/NewUsersComp'
import EditUserComp from '../components/EditUserComp'
import Newsletters from '../components/NewsletterComp'
import useWindowDimensions from '../utils/useWindowDimensions'


function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'row', }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: width * 0.5 }} >
          <NewUsersComp />
          <EditUserComp />
        </div>
        <div style={{ width: width * 0.5 }}>
          <Newsletters />
        </div>
      </div>
    </div>
  )
}

export default Home
