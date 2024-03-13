import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import U1 from "~/assets/img/u1.jpg";
import U2 from "~/assets/img/u2.jpg";
import U3 from "~/assets/img/u3.jpg";
import U4 from "~/assets/img/u4.jpg";
import U5 from "~/assets/img/u5.jpg";
import {VerifiedAccountIcon} from "~/assets/icons.tsx";
import UserPreview from "~/pages/home/home-rightbar/user-preview";
import {useState} from "react";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {useContentMargin} from "~/store/dimensions/hooks.tsx";

export default function HomeRightbar() {
    const { width } = UseWindowDimensions();
    const contentMargin = useContentMargin();
    const users = [
        {
            username: "madhuridixitnene",
            avatar: U1
        },
        {
            username: "antogriezmann",
            avatar: U2
        },
        {
            username: "delilahbelle",
            avatar: U3
        },
        {
            username: "kyliejenner",
            avatar: U4
        },
        {
            username: "zendaya",
            avatar: U5
        }
    ];
    const links = ["Hakkında", "Yardım", "Basın", "API", "İş Fırsatları", "Gizlilik", "Koşullar", "Konumlar", "Dil", "Meta Verified"];
    const [showUserPreview, setShowUserPreview] = useState(false);

    const handleMouseOver = (index: number, isAvatar: boolean = true) => {
        if(width)
        {
            let userPreviewTranslateX = width - contentMargin, userPreviewTranslateY;
            if(!isAvatar)
            {
                userPreviewTranslateX = contentMargin + (userPreviewTranslateX - 1013) / 2 + 630 + 64 + 56
                userPreviewTranslateY = 184 + 60 * index;
            }
            else
            {
                userPreviewTranslateX = contentMargin + (userPreviewTranslateX - 1013) / 2 + 630 + 64
                userPreviewTranslateY = 205 + 60 * index;
            }
            document.documentElement.style.setProperty("--userPreview-translate-x", userPreviewTranslateX + "px");
            document.documentElement.style.setProperty("--userPreview-translate-y", userPreviewTranslateY + "px");
        }
        setShowUserPreview(true);
    }

    const handleMouseLeave = (event: any) => {
        if(event.relatedTarget.id !== "userPreview")
            setShowUserPreview(false);
    }

    return (
        <>
            <div className="w-[383px] pl-16">
                <div className="mt-9 flex flex-col">
                    <div className="px-4">
                        <div className="mr-1 w-full">
                            <div className="flex items-center">
                                <Link to={"ercansualp"} className="w-11 h-11">
                                    <img src={DefaultAvatar} alt="" className="w-full h-full rounded-full" />
                                </Link>
                                <Link to={"ercansualp"} className="ml-[11.5px] text-[#f5f5f5] font-semibold text-sm leading-[18px]">ercan_sualp</Link>
                                <div className="ml-auto text-[#0095f6] text-xs font-semibold leading-[18px] mr-[0.5px] cursor-pointer hover:text-[#e0f1ff]">Geçiş Yap</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 mb-2">
                        <div className="mx-4 flex flex-col">
                            <div className="pt-[1px] flex justify-between -ml-[0.6px]">
                                <span className="text-[#a8a8a8] font-semibold text-sm leading-[18px]">Senin için önerilenler</span>
                                <div className="text-[#f5f5f5] text-xs font-semibold leading-4 mt-px mr-[0.5px] cursor-pointer hover:opacity-50">Tümünü Gör</div>
                            </div>
                            <div className="py-2 flex flex-col">
                                {
                                    users.map((user, index) => (
                                        <div className="py-2 pl-1 flex items-center" key={index}>
                                            <Link to={"ercansualp"} className="w-11 h-11 mr-[11.5px]" onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}>
                                                <img src={user.avatar} alt="" className="w-11 h-11 rounded-full" />
                                            </Link>
                                            <div className="flex flex-col">
                                                <Link to={"ercansualp"} className="flex gap-x-1 items-center"  onMouseOver={() => handleMouseOver(index, false)} onMouseLeave={handleMouseLeave}>
                                                    <span className="text-[#f5f5f5] text-sm font-semibold leading-[18px]">{user.username}</span>
                                                    <VerifiedAccountIcon width={12} height={12} />
                                                </Link>
                                                <span className="text-[#a8a8a8] text-xs font-normal leading-4">Instagram tavsiye ediyor</span>
                                            </div>
                                            <div className="ml-auto text-[#0095f6] text-xs font-semibold leading-4 mt-0.5 mr-[0.5px] cursor-pointer hover:text-[#e0f1ff]">Takip Et</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="px-4 mb-2 mt-3">
                        <div className="pb-[38px] flex flex-col gap-y-4 text-[#737373]">
                            <ul className="mb-[3px] flex-wrap flex flex-row">
                                {
                                    links.map((title, index) => (
                                        <li key={index} className="after:content-['\00B7'] after:mx-[3px] after:h-[18px] flex after:mt-[3px] group">
                                            <Link to={"/"} className="h-[19px] group-hover:underline">
                                                <span className="text-xs font-normal leading-4">{title}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <span className="text-xs font-normal leading-4 uppercase">&copy; {new Date().getFullYear()} Instagram from Meta</span>
                        </div>
                    </div>
                </div>
            </div>

            { showUserPreview ? <UserPreview setShowUserPreview={setShowUserPreview} /> : null }
        </>
    )
}

{
    // OLD

    /*
    import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";

export default function HomeRightbar() {
    return (
        <div className="w-[383px] pl-16 mt-9 flex flex-col">
            <div className="px-4">
                <div className="mr-1 flex items-center w-full">
                    <Link to={"/"} className="w-11 h-11 mr-3">
                        <img src={DefaultAvatar} alt="" className="rounded-full w-full h-full" />
                    </Link>
                    <Link to={"/"} className="text-[#f5f5f5] font-semibold text-sm leading-[18px]">ercan_sualp</Link>
                    <div className="ml-auto text-[#0095f6] text-xs font-semibold leading-[18px]">Geçiş Yap</div>
                </div>
            </div>
            <div className="mt-6 mb-2">
                <div className="mx-4 w-full">
                    <div className="flex flex-col -ml-4 w-full">
                        <div className="py-1 px-4 flex justify-between items-center">
                            <span className="text-[#a8a8a8] font-semibold text-sm leading-[11px]">Senin için önerilenler</span>
                            <Link to={"/"} className="text-[#f5f5f5] text-xs font-semibold leading-[11px]">Tümünü Gör</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-1 mb-1">
                <div className="py-2 flex flex-col">
                    <div className="py-2 px-4 flex items-center">
                        <div className="w-14 h-11">
                            <div className="mr-3 w-11 h-11">
                                <Link to={"/"} className="w-full h-full">
                                    <img className="rounded-full w-full h-full" src={DefaultAvatar} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
     */
}