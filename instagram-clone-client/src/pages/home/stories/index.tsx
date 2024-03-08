import ExampleStory from "~/assets/img/example_story.jpg";

export default function Stories() {
    return (
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
    )
}