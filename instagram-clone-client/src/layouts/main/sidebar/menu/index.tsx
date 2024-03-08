import {
    ExploreIcon,
    HomeIcon,
    MessengerIcon,
    NewPostIcon,
    NotificationsIcon,
    ReelsIcon,
    SearchIcon
} from "~/assets/icons.tsx";
import {NavLink, Link} from "react-router-dom";
import classNames from "classnames";
import {setSidebarWidth} from "~/store/dimensions/actions.tsx";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {useState} from "react";
import NewPost from "~/components/new-post";
import HeadlessUIDialog from "~/components/headlessUIDialog";
import UserAvatar from "~/assets/img/user.jpg";
import MenuFooter from "~/layouts/main/sidebar/menu/menu-footer";

/*
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
*/

export default function Menu() {
    const sidebarWidth = useSidebarWidth();
    const { width, height } = UseWindowDimensions();
    const [sidebarItems, setSidebarItems] = useState([
        {
            title: "Ana Sayfa",
            active: true,
            url: "/",
            activeIcon: <HomeIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <HomeIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: false
        },
        {
            title: "Ara",
            active: false,
            activeIcon: <SearchIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <SearchIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: true
        },
        {
            title: "Keşfet",
            active: false,
            url: "explore",
            activeIcon: <ExploreIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <ExploreIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: false
        },
        {
            title: "Reels",
            active: false,
            url: "reels",
            activeIcon: <ReelsIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <ReelsIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: false
        },
        {
            title: "Mesajlar",
            active: false,
            url: "direct/inbox",
            activeIcon: <MessengerIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <MessengerIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: true
        },
        {
            title: "Bildirimler",
            active: false,
            activeIcon: <NotificationsIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />,
            passiveIcon: <NotificationsIcon width={24} height={24} active={false} className="group-hover:scale-105 transition-all" />,
            value: true
        }
    ]);

    const handleClick = (item: any, index: number = -1) => {
        // value değeri eğer false ise search butonu veya bildirimler butonu dışında sidebar'da başka herhangi bir item'e tıklanıldığında ekran genişliğini kontrol edip ona göre bir işlem gerçekleştirecek. Yok eğer true ise search veya bildirimler butonuna tıkladı demektir bu durumda da ekran genişliğini dikkate almadan sidebar genişliğini direkt olarak 73px'e ayarlayacaktır.

        const newSidebarItems = [...sidebarItems];
        newSidebarItems.map((item, index2) => item.active = index === index2 || index === -1);
        setSidebarItems(newSidebarItems);

        if(item.value)
        {
            setSidebarWidth(73);
            document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
        }
        else {
            if(width)
            {
                if(width >= 1920)
                {
                    setSidebarWidth(336);
                    document.documentElement.style.setProperty("--sidebar-width", 336 + "px");
                }
                else if(width >= 1264 && width < 1920)
                {
                    setSidebarWidth(245);
                    document.documentElement.style.setProperty("--sidebar-width", 245 + "px");
                }
                else if(width >= 768 && width < 1264)
                {
                    setSidebarWidth(73);
                    document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
                }
                else
                {
                    setSidebarWidth(0);
                    document.documentElement.style.setProperty("--sidebar-width", 0 + "px");
                }
            }
        }

        /*
        if(value)
        {
            setSidebarWidth(73);
            document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
        }
        else
        {
            if(width)
            {
                if(width >= 1920)
                {
                    setSidebarWidth(336);
                    document.documentElement.style.setProperty("--sidebar-width", 336 + "px");
                }
                else if(width >= 1264 && width < 1920)
                {
                    setSidebarWidth(245);
                    document.documentElement.style.setProperty("--sidebar-width", 245 + "px");
                }
                else if(width >= 768 && width < 1264)
                {
                    setSidebarWidth(73);
                    document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
                }
                else
                {
                    setSidebarWidth(0);
                    document.documentElement.style.setProperty("--sidebar-width", 0 + "px");
                }
            }
        }

         */
    }

    return (
        <div className="grow flex flex-col">
            {
                /*

                <NavLink to="/" className="h-14" onClick={() => handleClick(false)}>
                {({ isActive }) => (
                    <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                        <div className="flex gap-x-4 items-center">
                            <>
                                <HomeIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                {
                                    sidebarWidth > 73 ? (
                                        <span className={classNames("leading-5 text-base mt-0.5", {
                                            "font-bold": isActive,
                                            "font-normal": !isActive
                                        })}>Ana Sayfa</span>
                                    ) : ""
                                }
                            </>
                        </div>
                    </div>
                )}
            </NavLink>

            <div className="h-14 cursor-pointer" onClick={() => handleClick(true)}>
                <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                    <div className="flex gap-x-4 items-center">
                        <SearchIcon width={24} height={24} className="group-hover:scale-105 transition-all" />
                        {
                            sidebarWidth > 73 ? (
                                <span className={classNames("leading-5 text-base mt-0.5", {
                                    "font-bold": false,
                                    "font-normal": !false
                                })}>Ara</span>
                            ) : ""
                        }
                    </div>
                </div>
            </div>

            <NavLink to="explore" className="h-14" onClick={() => handleClick(false)}>
                {({ isActive }) => (
                    <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                        <div className="flex gap-x-4 items-center">
                            <>
                                <ExploreIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                {
                                    sidebarWidth > 73 ? (
                                        <span className={classNames("leading-5 text-base mt-0.5", {
                                            "font-bold": isActive,
                                            "font-normal": !isActive
                                        })}>Keşfet</span>
                                    ) : ""
                                }
                            </>
                        </div>
                    </div>
                )}
            </NavLink>

            <NavLink to="reels" className="h-14" onClick={() => handleClick(false)}>
                {({ isActive }) => (
                    <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                        <div className="flex gap-x-4 items-center">
                            <>
                                <ReelsIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                {
                                    sidebarWidth > 73 ? (
                                        <span className={classNames("leading-5 text-base mt-0.5", {
                                            "font-bold": isActive,
                                            "font-normal": !isActive
                                        })}>Reels</span>
                                    ) : ""
                                }
                            </>
                        </div>
                    </div>
                )}
            </NavLink>

            <NavLink to="direct/inbox" className="h-14" onClick={() => handleClick(true)}>
                {({ isActive }) => (
                    <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
                        <div className="flex gap-x-4 items-center">
                            <>
                                <MessengerIcon width={24} height={24} active={isActive} className="group-hover:scale-105 transition-all" />
                                {
                                    sidebarWidth > 73 ? (
                                        <span className={classNames("leading-5 text-base mt-0.5", {
                                            "font-bold": isActive,
                                            "font-normal": !isActive
                                        })}>Mesajlar</span>
                                    ) : ""
                                }
                            </>
                        </div>
                    </div>
                )}
            </NavLink>




                 */
            }

            {
                sidebarItems.map((item, index) =>
                    item.url ? (
                        <Link key={index} to={item.url} className={classNames({
                            "h-14": height && height >= 600,
                            "h-13": height && height < 600
                        })} onClick={() => handleClick(item, index)}>
                            <div className={classNames("h-12 p-3 transition-all hover:bg-[#ffffff1a] rounded-lg group", {
                                "my-1": height && height >= 600,
                                "my-0.5": height && height < 600
                            })}>
                                <div className="flex gap-x-4 items-center">
                                    <>
                                        { item.active ? item.activeIcon : item.passiveIcon }
                                        {
                                            sidebarWidth > 73 ? (
                                                <span className={classNames("leading-5 text-base mt-0.5", {
                                                    "font-bold": item.active,
                                                    "font-normal": !item.active
                                                })}>{item.title}</span>
                                            ) : ""
                                        }
                                    </>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div key={index} className={classNames("cursor-pointer", {
                            "h-14": height && height >= 600,
                            "h-13": height && height < 600
                        })} onClick={() => handleClick(item, index)}>
                            <div className={classNames("h-12 transition-all hover:bg-[#ffffff1a] rounded-lg group", {
                                "border border-[#dbdbdb] p-[11px]": item.active,
                                "p-3": !item.active,
                                "my-1": height && height >= 600,
                                "my-0.5": height && height < 600
                            })}>
                                <div className="flex gap-x-4 items-center">
                                    { item.active ? item.activeIcon : item.passiveIcon }
                                    {
                                        sidebarWidth > 73 ? (
                                            <span className={classNames("leading-5 text-base mt-0.5", {
                                                "font-bold": item.active,
                                                "font-normal": !item.active
                                            })}>{item.title}</span>
                                        ) : ""
                                    }
                                </div>
                            </div>
                        </div>
                    )
                )
            }

            <HeadlessUIDialog icon={<NewPostIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />} title="Oluştur">
                <NewPost />
            </HeadlessUIDialog>

            <NavLink to="ercansualp" className={classNames("group transition-all", {
                "h-14": height && height >= 600,
                "h-13": height && height < 600
            })}>
                {({ isActive }) => (
                    <div className={classNames("h-12 p-3 transition-all hover:bg-[#ffffff1a] rounded-lg group", {
                        "my-1": height && height >= 600,
                        "my-0.5": height && height < 600
                    })}>
                        <div className="flex gap-x-4 items-center">
                            <>
                                <img src={UserAvatar} alt="" width={24} height={24} className={classNames("rounded-full group-hover:scale-105 transition-all", {
                                    "border-2 border-[#f5f5f5]": isActive
                                })}/>
                                {
                                    sidebarWidth > 73 ? (
                                        <span className={classNames("leading-5 text-base mt-0.5", {
                                            "font-bold": isActive,
                                            "font-normal": !isActive
                                        })}>Profil</span>
                                    ) : ""
                                }
                            </>
                        </div>
                    </div>
                )}
            </NavLink>

            <MenuFooter />
        </div>
    )
}