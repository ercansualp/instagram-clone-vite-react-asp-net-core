import {PostMoreOptionsIcon, VerifiedAccountIcon} from "~/assets/icons.tsx";
import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";

export default function PostHeader() {
    return (
        <div className="pl-1 pb-3 flex items-center">
            <div className="mr-3 w-8 h-8">
                <Link to={"ercansualp"}>
                    <img src={DefaultAvatar} alt="" width={32} height={32} className="rounded-full" />
                </Link>
            </div>
            <div className="grow flex items-center">
                <Link to={"ercansualp"} className="text-sm font-semibold leading-[18px] text-[#f5f5f5]">ercansualp</Link>
                <div className="ml-1">
                    <VerifiedAccountIcon width={12} height={12} />
                </div>
                <div className="mx-1 text-[#a8a8a8]">•</div>
                <Link to={"/"} className="text-[#a8a8a8] leading-[18px] text-sm font-normal">2g</Link>
            </div>
            <div className="ml-2 w-6 h-6">
                <button>
                    <PostMoreOptionsIcon width={24} height={24} />
                </button>
            </div>
        </div>
    )
}

