import classNames from "classnames";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";
import {useSidebarSection} from "~/store/sidebar/hooks.tsx";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
    const sidebarWidth = useSidebarWidth();
    const sidebarSection = useSidebarSection();

    return (
        <div className={classNames("fixed top-0 left-0 h-screen w-[var(--sidebar-width)] transition-all", {
            "border-r border-r-[#262626]": sidebarWidth !== 0 && !sidebarSection
        })}>
            <div className="pt-2 px-3 pb-5 h-screen flex flex-col">
                <Logo />
                <Menu />
            </div>
        </div>
    )
}

/*

<div className={classNames("fixed top-0 left-0 h-screen w-[var(--sidebar-width)] transition-all", {
            "border-r border-r-[#262626]": sidebarWidth !== 0 && !sidebarSection
        })}>
            <div className="pt-2 px-3 pb-5 h-screen flex flex-col">
                <Logo />
                <Menu />
            </div>
        </div>



 */