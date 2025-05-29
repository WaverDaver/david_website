
function Header(){

    

    return(
        <header className="flex justify-between items-center p-5 text-white outline-1 outline-gray-200 mb-8 bg-sky-100">
            <div className=" text-2xl font-extrabold text-black  hover:text-blue-400">
                David.
            </div>
        
        <nav>
            <ul className="flex space-x-6 text-black">
                <li><a href="#projects" className=" hover:text-blue-400 text-gray-800">Projects</a></li>
                <li><a href="https://www.linkedin.com/in/david-ahn-03493a342/"className="scroll-smooth hover:text-blue-400 text-gray-800" rel="noopener no referrer" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/WaverDaver" className=" hover:text-blue-400 text-gray-800" rel="noopener no referrer" target="_blank">Github</a></li>
            </ul>
        
        
        </nav>



        </header>
    );
}


export default Header;