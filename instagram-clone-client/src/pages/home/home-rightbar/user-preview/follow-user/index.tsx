import {FollowUserIcon} from "~/assets/icons.tsx";

export default function FollowUser() {
    return (
        <div className="flex justify-center px-4">
            <button className="flex gap-x-2 items-center justify-center bg-[#1877f2] rounded-lg px-5 py-[7px] w-full h-[34px] hover:bg-[#0095f6]">
                <FollowUserIcon width={20} height={20} />
                <span className="leading-[18px] font-semibold text-sm">Takip Et</span>
            </button>
        </div>
    )
}