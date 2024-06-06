import DefaultAvatar from "~/assets/img/user.jpg";

export default function Message() {
    return (
        <div className="py-2 px-6 flex items-center gap-x-3">
            <div className="w-14 h-14 relative">
                <img src={DefaultAvatar} alt="" className="w-full h-full rounded-full" />
                <div className="w-[18px] h-[18px] absolute border-[3px] border-[#262626] bottom-0 right-0 rounded-full bg-[#1cd14f]" />
            </div>

            <div className="flex flex-col gap-y-1">
                <span className="text-[#f5f5f5] leading-[18px] text-sm font-normal">_ahmeter_234</span>
                <span className="text-[#a8a8a8] leading-4 font-normal text-xs">Şu an aktif</span>
            </div>
        </div>
    )
}