import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Projects from './components/Projects'
import ProjectCards from './components/ProjectCards'
import FrontPage from './components/FrontPage'
import SkillsandLanguages from './components/SkillsandLanguages'


function App(){

  return(
    <>
    <div className='scroll-smooth'>
    <Header></Header>
    <FrontPage></FrontPage>
    <Projects></Projects>
    <ProjectCards></ProjectCards>
    <SkillsandLanguages></SkillsandLanguages>
    </div>
    <div className="mt-50">
      <p className='flex text-1xl text-gray-800 font-light mb-2'>This website was made entirely by me! I used React, TailwindCSS, and HTML.</p>
    </div>
    </>
  );
  
}

export default App;