import {ExploreIcon, HomeIcon, ReelsIcon, SearchIcon} from "~/assets/icons.tsx";
import MenuItem from "~/layouts/main/sidebar/menu/menu-item";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

const menuItems = [
    {
        title: "Ana Sayfa",
        url: "/",
        activeIcon: <HomeIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
        passiveIcon: <HomeIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />
    },
    {
        title: "Keşfet",
        url: "explore",
        activeIcon: <ExploreIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
        passiveIcon: <ExploreIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />
    },
    {
        title: "Reels",
        url: "reels",
        activeIcon: <ReelsIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
        passiveIcon: <ReelsIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />
    }
]

export default function Menu() {
    return (
        <div className="grow flex flex-col">
            <div className="h-14">
                <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                    <NavLink to="/" className="flex gap-x-4 items-center">
                        {({ isActive }) => (
                            <>
                                <HomeIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                <span className={classNames("leading-5 text-base mt-0.5", {
                                    "font-bold": isActive,
                                    "font-normal": !isActive
                                })}>Ana Sayfa</span>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>

            <div className="h-14">
                <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                    <button className="flex gap-x-4 items-center">
                        <SearchIcon width={24} height={24} className="group-hover:scale-105 transition-all" />
                        <span className={classNames("leading-5 text-base mt-0.5", {
                            "font-bold": false,
                            "font-normal": !false
                        })}>Ara</span>
                    </button>
                </div>
            </div>

            <div className="h-14">
                <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                    <NavLink to="explore" className="flex gap-x-4 items-center">
                        {({ isActive }) => (
                            <>
                                <ExploreIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                <span className={classNames("leading-5 text-base mt-0.5", {
                                    "font-bold": isActive,
                                    "font-normal": !isActive
                                })}>Keşfet</span>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>

            <div className="h-14">
                <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                    <NavLink to="reels" className="flex gap-x-4 items-center">
                        {({ isActive }) => (
                            <>
                                <ReelsIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                <span className={classNames("leading-5 text-base mt-0.5", {
                                    "font-bold": isActive,
                                    "font-normal": !isActive
                                })}>Reels</span>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}