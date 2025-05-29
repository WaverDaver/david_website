import boleta_img from "../assets/boleta_software.png"
import quotter_img from "../assets/QUOTTER.png"
import book_o_mend_img from "../assets/book-o-mend-cover-photo.png"
import bus_stop_img from "../assets/designbusphoto.png"
import furniture_img from "../assets/furnitureproj.png"
import fidget_toy_img from "../assets/fidget_toy_ing.png"


function Cards({title, description, photo, photo_description, program1, program2, program3, link, linkimage}){
    return(
        <a href={link} target="_blank" rel="noopener no referrer">
        <div className="max-w-sm h-[500px] rounded overflow-hidden shadow-lg transtion-transform hover:shadow-xl hover:scale-105 duration-500 cursor-pointer">
            <a href={linkimage} target="_blank" rel="noopener no referrer"><img className="object-contain h-60 w-full " src={photo} alt={photo_description}></img></a>
  <div className="px-6 py-4 flex-grow">
    <a href={link}className="font-bold text-xl mb-2 hover:text-blue-400">{title}</a>
    <p className="text-gray-700 text-base">
    {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {program1 && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{program1}</span>
    )}
    {program2 && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{program2}</span>
    )}
    {program3 && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{program3}</span>
    )}
  </div>
  
</div>
</a>
    )
}


function ProjectCards(){

    return(
        <>
        <div className="flex flex-wrap mt-15 justify-evenly">
        <Cards title="book-o-mender" description="A full stack web app that recommends users similar books to ones they have already read." photo={book_o_mend_img}
            program1="ReactJS" program2="HTML" program3="Python3"link="https://github.com/WaverDaver/book-o-mend" linkimage="https://github.com/WaverDaver/book-o-mend"></Cards>
            <Cards title="Boleta Software" 
            description="A desktop app for macos and windows that helps businesses manage and print their receipts and tickets."
            photo= {boleta_img} photo_description = "gui_view" program1="Dart" program2="Flutter Framework"
            link="https://github.com/WaverDaver/boleta_software" linkimage="https://github.com/WaverDaver/boleta_software"
            ></Cards>
            <Cards title="Quotter" description="A mobile app for iOS and android that gives you random quotes. There are over 90000 quotes to chose from, and can be randomly be picked depending on their category."
            photo={quotter_img} photo_description="Quotter_view" program1="Dart" program2="Flutter Framework" link="https://github.com/WaverDaver/Quotter" linkimage="https://github.com/WaverDaver/Quotter"></Cards>
        </div>
        <div className="flex flex-wrap mt-15 justify-evenly">

            
        </div>


        <div className="flex justify-center mt-15 font-extrabold text-5xl">
            <h1 id="projects"className=" items-center">3d modeling/cad projects</h1>
        </div>

        <div className="flex flex-wrap mt-15 justify-evenly">
        
        <Cards title="Santiago Bus Stop Design" description="For 1 year, created a 54 page report on design strategies for the best way to redesign the current Santiago Red Movilidad bus stops. All done by me. Click me to find out more!"
        program1="Rhinoceros 3D" program2="Material Science Concepts" photo={bus_stop_img} link="https://drive.google.com/drive/folders/11vN197oLjwp9b9vrqoqI4pp0A18vSHek?usp=sharing"></Cards>
        <Cards title="Furniture Project" description="Designed a piece of furniture based on Contemporary Design." 
        program1="Rhinoceros 3D" photo={furniture_img} link="https://drive.google.com/drive/folders/1e9FSmXGDUzNEK4Ipp2aDD8dxb9DhwZ3f?usp=sharing"></Cards>
        <Cards title="Fidget Toy Project" description="Designed and 3D printed a custom fidget toy for a customer. Learned all about Design Principles and the importance of user feedback." 
        program1="Rhinoceros 3D" program2="Design Principles" photo={fidget_toy_img} link="https://drive.google.com/file/d/1iblON4_3SZVt4rf4qI5hOlYpQvXcDGCs/view?usp=sharing" ></Cards>



        </div>

        
        
        </>
    )
}



export default ProjectCards;