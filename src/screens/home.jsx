import Chatbar from "../widgets/chatbar"

export default function(){
    return(
        <div className="w-full min-h-dvh bg-gray-950 flex justify-center">
            <div className="flex items-center flex-col mt-32 lg:mt-56 text-gray-600">
                <h1 className="font-bold text-2xl lg:text-5xl mb-2">SIDDHARTH RAMNANI</h1>
                <h3 className="font-semibold text-md lg:text-2xl">“Jack Of All, Master Of Some”</h3>
                <div className="lg:min-h-20 min-h-10"></div>
                <Chatbar />
            </div>
        </div>
    )
}