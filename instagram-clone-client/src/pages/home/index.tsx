import {useState} from "react";
import classNames from "classnames";
import ExampleStory from "~/assets/img/example_story.jpg";

export default function Home() {
    const [content, setContent] = useState(true);

    if(content)
        return (
            <div className="flex justify-center pt-[22px] min-h-full">
                <div className="max-w-[630px] w-full flex flex-col">
                    <div className="mt-2 h-[49px] flex gap-x-3">
                        <button className={classNames("leading-5 text-base font-bold", {
                            "text-[#f5f5f5]": content,
                            "text-[#737373]": !content
                        })}>Senin için</button>
                        <button className={classNames("leading-5 text-base font-bold", {
                            "text-[#f5f5f5]": !content,
                            "text-[#737373]": content
                        })}>Takip ettiklerin</button>
                    </div>
                    <hr className="bg-[#262626] h-px border-none" />
                    <div className="mb-6 h-[101px]">
                        <div className="py-2 flex">
                            <div className="w-[66px] h-[85px]">
                                <div className="w-16 h-[84px] flex flex-col">
                                    <div className="w-[66px] h-[66px] flex items-center justify-center">
                                        <img width={56} height={56} className="rounded-full" src={ExampleStory} alt=""/>
                                    </div>
                                    <span className="truncate font-normal text-xs leading-4">alessiasmusic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[383px] pl-16"></div>
            </div>
        )
    return (
        <>
            fsdfdsa
        </>
    )
}