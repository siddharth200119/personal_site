import { useState } from "react";
import Chatbar from "../widgets/chatbar";

export default function HomeScreen() {
    const [isChatActive, setIsChatActive] = useState(false);

    const handleChatActivate = () => {
        setIsChatActive(true);
    };

    return (
        <div className={`w-full min-h-dvh bg-gray-950 flex flex-col ${isChatActive ? 'items-stretch' : 'items-center justify-center'}`}>
            {!isChatActive && (
                <div className="flex items-center flex-col mt-32 lg:mt-56 text-gray-600">
                    <h1 className="font-bold text-2xl lg:text-5xl mb-2">SIDDHARTH RAMNANI</h1>
                    <h3 className="font-semibold text-md lg:text-2xl">“Jack Of All, Master Of Some”</h3>
                    <div className="lg:min-h-20 min-h-10"></div>
                </div>
            )}
            <Chatbar isChatActive={isChatActive} onChatActivate={handleChatActivate} />
        </div>
    );
}