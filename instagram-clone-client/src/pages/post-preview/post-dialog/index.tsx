import {Dialog} from "@headlessui/react";
import {Link, useNavigate} from "react-router-dom";
import ExamplePost from "~/assets/img/example_post.jpg";
import DefaultAvatar from "~/assets/img/user.jpg";
import {OtherOptionsIcon} from "~/assets/icons.tsx";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import classNames from "classnames";

type props = {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

export default function PostDialog(props: props) {
    const { width, height } = UseWindowDimensions();
    const { isOpen, setIsOpen } = props;
    const navigate = useNavigate();

    const handleClose = () => {
        setIsOpen(false);
        navigate("/ercansualp");
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6]">
                <Dialog.Panel> {/* overflow-y-auto max-h-[calc(100%-40px)]  */}
                    <div className="flex">
                        <div className="grow aspect-square bg-black min-h-[450px] flex justify-center flex-col overflow-hidden shrink pointer-events-auto relative" style={{ maxWidth: (height ? height - 48 : 0), maxHeight: (height ? height - 48 : 0), flexBasis: (height ? height - 48 : 0) }}>
                            <div className="flex flex-col relative items-stretch">
                                <div className="pb-[100%] overflow-hidden relative ">
                                    <img src={ExamplePost} alt="" className="object-cover w-full h-full absolute top-0 left-0" />
                                </div>
                            </div>
                        </div>
                        <div className={classNames("bg-red-400 flex flex-col !min-w-[405px]", {
                            "!w-[500px]": width && width >= 1380,
                            "!w-[405px]": width && width <= 1285
                        })} style={{ width: (width && (width > 1285) && (width < 1380)) ? width- 807 : 0 }}>

                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

const PostHeader = () => {
    return (
        <div className="border-b border-l border-[#262626] rounded flex items-center">
            <div className="pl-4 py-3.5 pr-1 flex items-center gap-x-3.5 text-[#f5f5f5] w-full">
                <Link to={"ercansualp"}>
                    <img src={DefaultAvatar} alt="" className="h-8 w-8 rounded-full" />
                </Link>
                <div className="grow">
                    <Link to={"ercansualp"} className="p-0.5 text-sm font-semibold leading-[18px]">ahmeter.233</Link>
                </div>
                <div className="pr-2 w-10 h-10">
                    <button className="p-2">
                        <OtherOptionsIcon width={24} height={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

/*
<div className="flex max-h-[897px]">
    <div className="max-w-[897px] min-h-[450px] h-full w-full">
        <img src={ExamplePost} alt="" className="object-cover h-full" />
    </div>
    <div className="bg-black flex flex-col">
        <PostHeader />
    </div>
</div>
*/