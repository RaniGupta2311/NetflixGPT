const VideoTitle=({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[16%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-md w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-80">▶ Play</button>
                <button className="mx-2 bg-gray-700 p-4 px-12 text-xl text-white bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;