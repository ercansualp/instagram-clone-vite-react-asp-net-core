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