import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

{
    /*
    Old

    import {ReactNode, useState} from "react";
import {Dialog} from "@headlessui/react";

type props = {
    icon: ReactNode,
    children: ReactNode
}

export default function HeadlessUIDialog(props: props) {
    const { icon, children } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="w-12 h-12 p-3">
                {icon}
            </button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6]">
                    <Dialog.Panel className="rounded-xl bg-[#262626]">
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}



     */

}


/*

import {ReactNode, useState} from "react";
import {Dialog} from "@headlessui/react";
import classNames from "classnames";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";

type props = {
    icon: ReactNode,
    children: ReactNode,
    title: string|null,
    onClick: () => void|null
}

export default function HeadlessUIDialog(props: props) {
    const { icon, children, title = null, onClick = null } = props;
    const [isOpen, setIsOpen] = useState(false);
    const sidebarWidth = useSidebarWidth();

    const handleClick = () => {
        if(onClick)
            onClick();
        setIsOpen(true);
    }

    return (
        <>
            {
                title === null && sidebarWidth <= 73 ? (
                    <button onClick={() => setIsOpen(true)} className="w-12 h-12 p-3">
                        {icon}
                    </button>
                ) : (
                    <button onClick={handleClick} className="w-full flex items-center h-12 p-3 gap-x-4">
                        {icon}
                        {
                            sidebarWidth > 73 ? (
                                <span className="leading-5 text-base mt-0.5 font-normal">{title}</span>
                            ) : ""
                        }
                    </button>
                )
            }
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6]">
                    <Dialog.Panel className="rounded-xl bg-[#262626]">
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

 */



import {ReactNode, useState} from "react";
import {Dialog} from "@headlessui/react";
import classNames from "classnames";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";

type props = {
    icon: ReactNode,
    children: ReactNode,
    title?: string|null,
}

export default function HeadlessUIDialog(props: props) {
    const { icon, children, title = null } = props;
    const [isOpen, setIsOpen] = useState(false);
    const sidebarWidth = useSidebarWidth();
    const { height } = UseWindowDimensions();

    return (
        <>
            {
                title ? (
                    <div onClick={() => setIsOpen(true)} className={classNames("h-12 p-3 transition-all hover:bg-[#ffffff1a] rounded-lg group", {
                        "my-1": height && height >= 600,
                        "my-0.5": height && height < 600
                    })}>
                        <button className="w-full flex gap-x-4 h-12">
                            {icon}
                            {
                                sidebarWidth !== 73 ? (
                                    <span className="leading-5 text-base mt-[3px] font-normal">{title}</span>
                                ) : null
                            }
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setIsOpen(true)} className="w-12 h-12 p-3">
                        {icon}
                    </button>
                )
            }

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6]">
                    <Dialog.Panel className="rounded-xl bg-[#262626]">
                        {children}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}