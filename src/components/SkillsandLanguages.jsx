import { SiDart, SiFlutter, SiJavascript, SiPython, SiRhinoceros, SiGithub, SiReact } from 'react-icons/si';

function SkillsandLanguages(){
    return(
        <>
        <div className="flex justify-center mt-50 font-extrabold text-5xl">
            <h1 id="projects"className=" items-center">skills and programs</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-15 mt-15 mb-15 px-4 ">
            <SiPython className='text-blue-400 text-8xl hover:animate-spin'></SiPython>
            <SiJavascript className='text-blue-400 text-8xl hover:animate-spin'></SiJavascript>
            <SiReact className='text-blue-400 text-8xl hover:animate-spin'></SiReact>
            <SiDart className='text-blue-400 text-8xl hover:animate-spin'></SiDart>
            <SiFlutter className='text-blue-400 text-8xl hover:animate-spin'></SiFlutter>
            <SiRhinoceros className='text-blue-400 text-8xl hover:animate-spin'></SiRhinoceros>
            <SiGithub className='text-blue-400 text-8xl hover:animate-spin'></SiGithub>
            
                        
        </div>
        <div className="flex flex-wrap justify-center mt-50 font-extrabold text-5xl">
            <h1 id="projects"className=" items-center">languages</h1>
        </div>
        <div className='flex mt-15 justify-evenly mb-15'>
            <h1 className='text-8xl'>🇺🇸</h1>
            <h1 className='text-8xl'>🇨🇱</h1>
            <h1 className='text-8xl'>🇰🇷</h1>
        </div>
        <div className="flex justify-center text-gray-700 text-base text-1xl">
            <h1 id="projects"className=" items-center">(native in English and Spanish, Korean limited working proficiency)</h1>
        </div>
        </>
    )
}

export default SkillsandLanguages;