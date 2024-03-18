import {Link, useNavigate} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import {CommentIcon, HeartIcon, OtherOptionsIcon, SavedPostsIcon} from "~/assets/icons.tsx";
import ExamplePost from "~/assets/img/example_post.jpg";

export default function Post() {
    return (
        <div className="flex flex-col">
            <PostHeader />
            <PostContent />
            <PostActions />
        </div>
    )
}

const PostHeader = () => {
    return (
        <div className="flex items-center min-h-14 text-[#f5f5f5]">
            <header className="pl-3 pr-1 flex gap-x-3.5 grow">
                <Link to="ercansualp">
                    <img src={DefaultAvatar} alt="" className="rounded-full w-8 h-8" />
                </Link>
                <div className="py-1.5 text-sm font-semibold leading-[18px] p-0.5">ahmeter.233</div>
            </header>
            <div className="py-2 pl-2 mr-3">
                <OtherOptionsIcon width={24} height={24} />
            </div>
        </div>
    )
}

const PostContent = () => {
    return <img src={ExamplePost} alt="" className="w-full" />
}

const PostActions = () => {
    const navigate = useNavigate();

    return (
        <div className="px-4 pb-4 pt-1.5 flex flex-col text-[#a8a8a8] font-normal">
            <div className="mt-1 flex items-center justify-between text-[#f5f5f5]">
                <div className="flex">
                    <div className="w-10 h-10 p-2 pl-0">
                        <button>
                            <HeartIcon width={24} height={24} />
                        </button>
                    </div>

                    <div className="w-10 h-10 p-2 pl-0">
                        <button onClick={() => navigate("comments")}>
                            <CommentIcon width={24} height={24}/>
                        </button>
                    </div>
                </div>
                <button>
                    <SavedPostsIcon width={24} height={24} />
                </button>
            </div>
            <div className="text-sm leading-4 mt-px" onClick={() => navigate("comments")}>
                <span className="mr-1">3</span>
                yorumun tümünü gör
            </div>
            <span className="text-xs leading-4 mt-[7px]">1 gün önce</span>
        </div>
    )
}