import {BackArrowIcon, CommentIcon, HeartIcon, OtherOptionsIcon, SavedPostsIcon} from "~/assets/icons.tsx";
import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import ExamplePost from "~/assets/img/example_post.jpg";
import {useNavigate, useLocation} from 'react-router-dom';

export default function PostPage() {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="mb-[50px] flex flex-col h-[calc(100vh-50px)]">
            <Header title={!currentUrl.includes("comments") ? "Gönderi" : "Yorumlar"} />
            {
                !currentUrl.includes("comments") ? <Post /> : <PostComments />
            }
        </div>
    )
}

const Header = (props: { title: string }) => {
    const { title } = props;
    const navigate = useNavigate();

    return (
        <div className="border-b border-b-[#363636] !h-[45px] px-4 flex items-center">
            <button className="w-8 h-6" onClick={() => navigate(-1)}>
                <BackArrowIcon width={24} height={24} className="-rotate-90" />
            </button>
            <h1 className="text-[#f5f5f5] text-base font-semibold leading-[18px] grow justify-center flex mr-8">{title}</h1>
        </div>
    )
}

const Post = () => {
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
                        <button>
                            <CommentIcon width={24} height={24} />
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

const PostComments = () => {
    return (
        <div className="mt-3 flex flex-col grow overflow-x-hidden overflow-y-auto">
            <Comment commentText="ömvcnbmövcb" commentDate="57d" commentAuthor="_ahmeter_234" />
            <Comment commentText="fdhjgkdf" commentDate="57d" commentAuthor="_ahmeter_234" />
            <Comment commentText="fdhjgkdf" commentDate="57d" commentAuthor="_ahmeter_234" />
            <Comment commentText="fdhjgkdf" commentDate="57d" commentAuthor="_ahmeter_234" />
            <Comment commentText="fdhjgkdf" commentDate="57d" commentAuthor="_ahmeter_234" />
            <Comment commentText="fdhjgkdf" commentDate="57d" commentAuthor="_ahmeter_234" />
        </div>
    )
}

const Comment = (props: { commentText: string, commentDate: string, commentAuthor: string }) => {
    const { commentText, commentDate, commentAuthor } = props;

    return (
        <div className="pl-2 py-3 flex h-[62px]">
            <Link to="ercansualp" className="mr-2 h-[38px] w-8">
                <img src={DefaultAvatar} alt="" className="rounded-full w-8 h-8" />
            </Link>
            <div className="flex flex-col gap-y-1 grow">
                <div className="flex text-[#f5f5f5] text-sm leading-[18px]">
                    <Link to="ercansualp" className="font-semibold">{commentAuthor}</Link>
                    &nbsp;
                    <div className="font-normal">{commentText}</div>
                </div>
                <div className="flex gap-x-3 text-[#a8a8a8] leading-4 text-xs mt-px">
                    <span className="font-normal">{commentDate}</span>
                    <button className="font-semibold">Yanıtla</button>
                </div>
            </div>
            <div className="px-4 pb-2 text-[#8e8e8e] mt-[9px]">
                <HeartIcon width={12} height={12} />
            </div>
        </div>
    )
}