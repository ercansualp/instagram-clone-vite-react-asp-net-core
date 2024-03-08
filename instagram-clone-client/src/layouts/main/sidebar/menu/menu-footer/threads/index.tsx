import {Link} from "react-router-dom";
import {ThreadsIcon} from "~/assets/icons.tsx";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";

export default function Threads() {
    const sidebarWidth = useSidebarWidth();

    return (
        <Link to="https://www.threads.net" className="h-14">
            <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group flex justify-between items-center group transition-all">
                <div className="flex gap-x-4 items-center">
                    <>
                        <ThreadsIcon width={24} height={24} active={true} className="group-hover:scale-105 transition-all" />
                        {
                            sidebarWidth !== 73 ? (
                                <span className="leading-5 text-base mt-0.5 font-normal">Threads</span>
                            ) : null
                        }
                    </>
                </div>
                <svg aria-label="" className="group-hover:opacity-100 opacity-0 transition-all" fill="#8e8e8e" height={16} role="img" viewBox="0 0 24 24" width={16}><title></title><path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path></svg>
            </div>
        </Link>
    )
}

/*






 */