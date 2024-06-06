import {DownArrowIcon, NewMessageIcon} from "~/assets/icons.tsx";
import {Link} from "react-router-dom";
import Message from "~/pages/messages/messages-sidebar/message";

export default function MessagesSidebar() {
    return (
        <div className="flex flex-col border-r border-r-[#262626] w-[398px] absolute bg-black top-0 left-0 z-40">
            <div className="px-6 pt-9 pb-3 flex justify-between items-center text-[#f5f5f5]">
                <button className="flex items-center gap-x-2">
                    <div className="leading-[25px] text-xl font-bold">ahmeter.233</div>
                    <div className="pt-1">
                        <DownArrowIcon width={12} height={12} className="rotate-180" />
                    </div>
                </button>
                <button className="p-2">
                    <NewMessageIcon width={24} height={24} />
                </button>
            </div>
            <div className="px-6 pt-[14px] pb-[10px] flex items-center justify-between">
                <h1 className="text-[#f5f5f5] leading-5 text-base font-bold">Mesajlar</h1>
                <Link to="/" className="text-[#a8a8a8] leading-[18px] font-semibold text-sm">İstekler</Link>
            </div>
            <div className="flex flex-col overflow-y-auto overflow-x-hidden grow">
                <Message />
                <Message />
            </div>
        </div>
    )
}