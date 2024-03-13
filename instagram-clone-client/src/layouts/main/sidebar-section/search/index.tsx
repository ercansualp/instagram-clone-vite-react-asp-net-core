import CancelIcon from "~/assets/img/instagram-icons.png";

export default function Search() {
    return (
        <div className="flex flex-col h-full">
            <div className="my-2 pt-3 pb-[30px] pl-6 pr-3.5">
                <span className="text[#f5f5f5] font-semibold text-2xl leading-[22px]">Ara</span>
            </div>
            <div className="flex flex-col">
                <div className="mx-4 mb-6">
                    <div className="relative">
                        <input type="text" className="px-4 py-[3px] text-[#f5f5f5] rounded-lg text-base font-normal h-10 bg-[#262626] outline-none w-full" placeholder="Ara" />
                        <div className="h-5 w-5 absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-no-repeat cursor-pointer" style={{ backgroundImage: `url("${CancelIcon}")`, backgroundPosition: "-318px -333px" }} />
                    </div>
                </div>
                <hr className="text-[#dadde1] bg-[#262626] h-px border-none" />
            </div>
        </div>
    )
}