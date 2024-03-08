import {Popover} from "@headlessui/react";
import classNames from "classnames";
import {
    BackArrowIcon,
    ChangeAppearanceIcon,
    MoreOptionsIcon,
    MovementsIcon,
    RecordedIcon,
    ReportAProblemIcon,
    SettingsIcon, ThemeIcon, ThreadsIcon
} from "~/assets/icons.tsx";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {useState} from "react";
import MoreOptionsItem from "~/layouts/main/sidebar/menu/menu-footer/more-options/more-options-item";
import SwitchAppearance from "~/layouts/main/sidebar/menu/menu-footer/more-options/switch-appearance";
import ReportAProblemDialog from "~/layouts/main/sidebar/menu/menu-footer/more-options/report-a-problem-dialog";

export default function Threads() {
    const sidebarWidth = useSidebarWidth();
    const { height } = UseWindowDimensions();
    const [changeAppearance, setChangeAppearance] = useState(false);
    const moreOptionsItems = [
        {
            url: "accounts/edit",
            title: "Ayarlar",
            icon: <SettingsIcon width={18} height={18} />
        },
        {
            url: "your_activity/interactions/likes/",
            title: "Hareketlerin",
            icon: <MovementsIcon width={18} height={18} />
        },
        {
            url: "ercansualp/saved",
            title: "Kaydedilenler",
            icon: <RecordedIcon width={18} height={18} />
        },
        {
            title: "Görünümü değiştir",
            icon: <ChangeAppearanceIcon width={18} height={18} />,
            onClick: () => setChangeAppearance(true)
        },
        {
            title: "Bir sorun bildir",
            icon: <ReportAProblemIcon width={18} height={18} />,
            onClick: () => setIsOpen(true)
        },
        {
            divider: "big",
        },
        {
            title: "Threads",
            icon: <ThreadsIcon width={18} height={18} />,
            url: "https://www.threads.net"
        },
        {
            title: "Hesap Değiştir",
        },
        {
            divider: "small",
        },
        {
            title: "Çıkış yap",
        }
    ]
    const [enabled, setEnabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    /*   <div className="h-1.5 -mx-2 my-2 bg-[#5555554d]" />   */
    /*   <div className="h-[0.5px] -mx-2 my-2 bg-[#55555580]" />   */

    return (
        <>
            <Popover className="relative">
                {({ open }) => (
                    /* Use the `open` state to conditionally change the direction of the chevron icon. */
                    <>
                        <Popover.Button className="w-full outline-none" style={{ height: height && height >= 600 ? 56 : 52 }}>
                            <div className={classNames("h-12 p-3 transition-all hover:bg-[#ffffff1a] rounded-lg group", {
                                "my-1": height && height >= 600
                            })}>
                                <div className="flex gap-x-4 items-center">
                                    <>
                                        <MoreOptionsIcon width={24} height={24} active={open} className="group-hover:scale-105 transition-all" />
                                        {
                                            sidebarWidth > 73 ? (
                                                <span className={classNames("leading-5 text-base mt-0.5", {
                                                    "font-bold": open,
                                                    "font-normal": !open
                                                })}>Daha fazla</span>
                                            ) : ""
                                        }
                                    </>
                                </div>
                            </div>
                        </Popover.Button>

                        <Popover.Panel className={classNames("transition-all z-10 fixed left-0 top-0 w-[266px] bg-[#262626] rounded-2xl flex flex-col", {
                            "p-2": !changeAppearance
                        })} style={{ transform: sidebarWidth && sidebarWidth !== 73 ? `translate(12px, ${height && height - 76}px) translate(0px, -100%)` : `translate(60px, ${height && height - 20}px) translate(0px, -100%)` }}>
                            {
                                !changeAppearance ? moreOptionsItems.map((item, index) => (
                                    <MoreOptionsItem key={index} item={item} />
                                )) : (
                                    <div className="flex flex-col">
                                        <div className="border-b border-b-[#555555] p-4 flex gap-x-3 items-center">
                                            <div onClick={() => setChangeAppearance(false)} className="-m-1.5 h-6 w-6 flex items-center justify-center cursor-pointer">
                                                <BackArrowIcon className="text-[#737373]" width={12} height={12} style={{ transform: "rotate(270deg)" }} />
                                            </div>
                                            <div className="grow text-base font-semibold leading-5">
                                                Görünümü değiştir
                                            </div>
                                            <ThemeIcon width={18} height={18} />
                                        </div>

                                        <div className="p-2">
                                            <div onClick={() => setEnabled(!enabled)} className="hover:bg-[#ffffff1a] transition-all rounded-lg p-4 flex justify-between items-center cursor-pointer">
                                                <span className="font-normal text-sm leading-[18px] text-[#f5f5f5]">Karanlık modu</span>
                                                <SwitchAppearance enabled={enabled} setEnabled={setEnabled} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Popover.Panel>
                    </>
                )}
            </Popover>

            <ReportAProblemDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

{
    /*
    <Link to={"/"} className="p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <SettingsIcon width={18} height={18} />
    <span>Ayarlar</span>
</Link>

<Link to={"/"} className="p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <MovementsIcon width={18} height={18} />
    <span>Hareketlerin</span>
</Link>

<Link to={"/"} className="p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <RecordedIcon width={18} height={18} />
    <span>Kaydedilenler</span>
</Link>

<div className="cursor-pointer p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <ChangeAppearanceIcon width={18} height={18} />
    <span>Görünümü değiştir</span>
</div>

<div className="cursor-pointer p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <ReportAProblemIcon width={18} height={18} />
    <span>Bir sorun bildir</span>
</div>

<div className="h-1.5 -mx-2 my-2 bg-[#5555554d]" />

<div className="cursor-pointer p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <span>Hesap Değiştir</span>
</div>

<div className="h-[0.5px] -mx-2 my-2 bg-[#55555580]"></div>

<div className="cursor-pointer p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
    <span>Çıkış yap</span>
</div>
     */
}