import ExampleImage from "~/assets/img/example_post.jpg";
import ExampleVideo from "~/assets/video/example_video.mp4";
import DefaultAvatar from "~/assets/img/user.jpg";
import {useState} from "react";
import {BackArrowIcon} from "~/assets/icons.tsx";

interface props {
    posts: FileList|null
}

export default function SharePost(props: props) {
    const { posts } = props;
    const [selected, setSelected] = useState<number>(0);

    return (
        <div className="flex h-full">
            <div className="w-[calc(100%-340px)] h-full relative">
                {
                    selected !== 0 ? (
                        <div onClick={() => setSelected(selected-1)} className="absolute cursor-pointer top-1/2 left-0 bg-[#1a1a1acc] translate-y-1/2 m-2 p-2 flex justify-center items-center rounded-full z-50 hover:opacity-70 transition-all">
                            <BackArrowIcon width={16} height={16} className="-rotate-90" />
                        </div>
                    ) : null
                }
                {
                    posts !== null && posts[selected].type === "video/mp4" ? (
                        <video
                            src={ExampleVideo}
                            className="w-full h-full object-cover"
                            autoPlay={true}
                            loop={true}
                        />
                    ) : (
                        <img className="w-full bg-cover" src={ExampleImage} alt="" />
                    )
                }
                {
                    posts !== null && selected !== posts.length - 1 ? (
                        <div onClick={() => setSelected(selected+1)} className="absolute cursor-pointer top-1/2 right-0 bg-[#1a1a1acc] translate-y-1/2 m-2 p-2 flex justify-center items-center rounded-full z-50 hover:opacity-70 transition-all">
                            <BackArrowIcon width={16} height={16} className="rotate-90" />
                        </div>
                    ) : null
                }
            </div>
            <div className="border-l border-l-[#363636] grow flex flex-col">
                <div className="mx-4 mt-[18px] mb-[14px] flex items-center gap-x-3">
                    <div className="w-7 h-7">
                        <img src={DefaultAvatar} alt="" className="w-full h-full rounded-full" />
                    </div>
                    <span className="text-[#f5f5f5] text-sm font-semibold">__fsociety_.01</span>
                </div>

                <div className="">
                    <textarea cols={30} rows={10} placeholder="Açıklama yaz..." className="outline-none w-full bg-transparent resize-none px-4">

                    </textarea>
                </div>
            </div>
        </div>
    )
}
