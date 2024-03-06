import classNames from "classnames";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";
import {useSidebarSection} from "~/store/sidebar/hooks.tsx";

export default function Sidebar() {
    const sidebarWidth = useSidebarWidth();
    const sidebarSection = useSidebarSection();

    return (
        <div className={classNames("fixed top-0 left-0 h-screen w-[var(--sidebar-width)]", {
            "border-r border-r-[#262626]": sidebarWidth !== 0 && !sidebarSection
        })}>
            Sidebar
        </div>
    )
}