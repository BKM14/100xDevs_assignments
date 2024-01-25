import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BusinessCard } from './components/BusinessCard'

function App() {

  return (
    <>
      <BusinessCard name="Balaji" description="A student learning web dev" interests={["Coding", "Walking", "Sailing"]} links={{
        "linkedin": "https://in.linkedin.com/",
        "instagram": "https://www.instagram.com/",
        "twitter": "https://twitter.com/",
        }}></BusinessCard>
    </>
  )
}

export default App
