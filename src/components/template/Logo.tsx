export default function Logo () {
    return (
     <div className="bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-red-400 mb-0.5"/>
        <div className="flex">
            <div className="h-3 w-3 rounded-full bg-yellow-400 mr-0.5"/>
            <div className="h-3 w-3 rounded-full bg-green-400 ml-0.5"/>
        </div>
     </div>   
    )
}