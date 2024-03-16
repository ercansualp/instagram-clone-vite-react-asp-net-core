import {HomeIcon, MessengerIcon, ReelsIcon, SearchIcon} from "~/assets/icons.tsx";
import FooterItem from "~/layouts/main/footer/footer-item";
import HeadlessUIDialog from "~/components/headlessUIDialog";
import NewPost from "~/components/new-post";
import {NavLink} from "react-router-dom";
import UserAvatar from "~/assets/img/user.jpg";
import classNames from "classnames";
import {ReactNode} from "react";

type footerItem = {
    url: string,
    activeIcon: string|ReactNode,
    passiveIcon: string|ReactNode
}

const footerItems: footerItem[] = [
    {
        url: "/",
        activeIcon: <HomeIcon width={24} height={24} active={true} />,
        passiveIcon: <HomeIcon width={24} height={24} active={false} />
    },
    {
        url: "explore",
        activeIcon: <SearchIcon width={24} height={24} active={true} />,
        passiveIcon: <SearchIcon width={24} height={24} active={false} />
    },
    {
        url: "reels",
        activeIcon: <ReelsIcon width={24} height={24} active={true} />,
        passiveIcon: <ReelsIcon width={24} height={24} active={false} />
    },
    {
        url: "direct/inbox",
        activeIcon: <MessengerIcon width={24} height={24} active={true} />,
        passiveIcon: <MessengerIcon width={24} height={24} active={false} />
    }
];

export default function Footer() {
    return (
        <div className="h-[50px] fixed bottom-0 left-0 w-full bg-black">
            <div className="h-[49px] border-t border-t-[#363636] flex flex-row justify-evenly">
                <div className="flex justify-evenly w-full">
                    {
                        footerItems.map((item: footerItem, index: number) => (
                            item.url && item.url ? <FooterItem key={index} item={item} /> : (
                                <HeadlessUIDialog icon={item.activeIcon}>
                                    <NewPost />
                                </HeadlessUIDialog>
                            )
                        ))
                    }
                    <NavLink to={"ercansualp"} className="w-12 h-12 p-3">
                        {({ isActive }) => (
                            <img src={UserAvatar} alt="" width={25.2} height={25.2} className={classNames("rounded-full", {
                                "border-2 border-[#f5f5f5]": isActive
                            })}/>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}