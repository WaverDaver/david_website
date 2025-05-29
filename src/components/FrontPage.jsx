import pfp from "../assets/aa163198-800c-43df-a5eb-b6f7df0d88592.JPG"

function FrontPage(){

    return(
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 py-16 ">
      <div className='text-center lg:text-left max-w-xl'>
      <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4'>hi, my name is David!</h1>
      <p className='text-lg sm:text-xl text-gray-400 font-light'>coder, 3d modeler, reader, avid gym-goer</p>
      </div>
        <div className=' justify-center items-left w-[400px] h-[390px]'>
        <img src={pfp} className="w-[350px] aspect-square rounded-full object-cover object-[50% 30%] shadow-lg transtion-transform hover:shadow-xl hover:scale-105 duration-500 cursor-pointer" alt="LinkedIn Profile" />
        </div>
    </div>
    )
}

export default FrontPage;