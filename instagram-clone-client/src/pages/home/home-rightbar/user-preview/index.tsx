import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";

export default function UserPreview(props: { setShowUserPreview: any }) {
    const { setShowUserPreview } = props;

    return (
        <div onMouseLeave={() => setShowUserPreview(false)} className="absolute top-0 left-0 translate-x-[var(--userPreview-translate-x)] translate-y-[var(--userPreview-translate-y)] h-full w-[195px]">
            <div id="userPreview" className="relative w-full h-full">
                <div className="absolute top-2 left-0 py-4 bg-black w-[calc(100% - 391px)] h-[338px] shadow-[0_0_23px_rgba(255,255,255,0.2)] flex flex-col gap-y-4">
                    <div className="px-4 flex gap-x-4 items-center">
                        <Link to={"ercansualp"} className="w-14 h-14">
                            <img src={DefaultAvatar} alt="" className="rounded-full w-14 h-14" />
                        </Link>
                        <div className="flex flex-col gap-y-1">
                            <Link to={"ercansualp"} className="text-[#f5f5f5] ">kayaa.recepp</Link>
                            <div>Recep Kaya</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// transform: translate(1327px, 205px)
// w-391px ,


// 0 0 23px rgba(255,255,255, .2)