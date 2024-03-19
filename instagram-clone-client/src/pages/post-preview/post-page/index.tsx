import {BackArrowIcon, CommentIcon, HeartIcon, OtherOptionsIcon, SavedPostsIcon} from "~/assets/icons.tsx";
import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import ExamplePost from "~/assets/img/example_post.jpg";
import {useNavigate, useLocation} from 'react-router-dom';
import {ChangeEvent, useState} from "react";

type comment = {
    id: number,
    commentText: string,
    commentDate: string,
    commentAuthor: string,
    commentReplies?: commentReply[],
    showReplies?: boolean
}

type commentReply = {
    id: number,
    commentText: string,
    commentDate: string,
    commentAuthor: string,
    personRespondedTo: string
}

export default function PostPage() {
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <div className="mb-[50px] flex flex-col">
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
        <div className="border-b border-b-[#363636] !min-h-[45px] !h-[45px] px-4 flex items-center sticky top-0 left-0 bg-black z-50">
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

const PostComments = () => {
    const [comments, setComments] = useState<comment[]>([
        {
            id: 1,
            commentText: "ömvcnbmövcb",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            commentReplies: [
                { id: 1, commentText: "ömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcbömvcnbmövcb", commentDate: "57d", commentAuthor: "_ahmeter_234", personRespondedTo: "_ahmeter_234" },
                { id: 2, commentText: "ömvcnbmövcb", commentDate: "57d", commentAuthor: "_ahmeter_234", personRespondedTo: "_ahmeter_234" },
                { id: 3, commentText: "ömvcnbmövcb", commentDate: "57d", commentAuthor: "_ahmeter_234", personRespondedTo: "_ahmeter_234" }
            ],
            showReplies: false
        },
        {
            id: 2,
            commentText: "Dhsjsjdhdgdhsjwjwiuehdsjsjdhhdhdjsjdhddhsjsjakkssj",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 3,
            commentText: "Dhdhdhsjsjdh",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 4,
            commentText: "fdhjgkdf",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 5,
            commentText: "Sjsbsbsvsbbssvhssbvxvxvxhsjsmansnshfjddhdjdbbddhdjdhdhdhhsjsjsnxxb",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 6,
            commentText: "Sjdbshdjdjbxdhdjksksksksosisxhxbxbxnxnsmsmmsksksksjsjssbvsvdvsshjwkwwkkurhhfgfbdbbxcbxnjddkdjdhhfdhbdsjskksoeirhrhrbfndm",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 7,
            commentText: "Eiciebcebbgtkgkgkxkgkxtoxgkfdjdhdhhddhjdhjdsjdjdhdjdhdvdbbddhdjjdjcjdkeoeoriryrueopwwpueyrdhdjdhdhdhhdhdwjwkeooruryryryf",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 7,
            commentText: "Eiciebcebbgtkgkgkxkgkxtoxgkfdjdhdhhddhjdhjdsjdjdhdjdhdvdbbddhdjjdjcjdkeoeoriryrueopwwpueyrdhdjdhdhdhhdhdwjwkeooruryryryf",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 7,
            commentText: "Eiciebcebbgtkgkgkxkgkxtoxgkfdjdhdhhddhjdhjdsjdjdhdjdhdvdbbddhdjjdjcjdkeoeoriryrueopwwpueyrdhdjdhdhdhhdhdwjwkeooruryryryf",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
        {
            id: 7,
            commentText: "Eiciebcebbgtkgkgkxkgkxtoxgkfdjdhdhhddhjdhjdsjdjdhdjdhdvdbbddhdjjdjcjdkeoeoriryrueopwwpueyrdhdjdhdhdhhdhdwjwkeooruryryryf",
            commentDate: "57d",
            commentAuthor: "_ahmeter_234",
            showReplies: false
        },
    ]);

    return (
        <div className="mt-3 flex flex-col grow max-w-full overflow-y-auto overflow-x-hidden mb-20">
            {
                comments.map((comment: comment) => (
                    <Comment key={comment.id} comment={comment} comments={comments} setComments={setComments} />
                ))
            }
            <AddComment comments={comments} setComments={setComments} />
        </div>
    )
}

const Comment = (props: { comment: comment, comments: comment[], setComments: (value: comment[]) => void }) => {
    const { comment, comments, setComments } = props;

    const handleClick = () => {
        const newComments = [...comments];
        const currentComment = newComments?.find((c: comment) => c.id === comment.id);
        if(currentComment)
            currentComment.showReplies = !currentComment.showReplies;
        setComments(newComments);
    }

    return (
        <div className="pl-2 py-3 flex min-h-[62px]">
            <CommentAuthorAvatar />
            <div className="flex flex-col gap-y-1 w-[calc(100%-84px)]">
                <div className="text-[#f5f5f5] text-sm leading-[18px]">
                    <CommentAuthor commentAuthor={comment.commentAuthor} />
                    &nbsp;
                    <CommentText commentText={comment.commentText} />
                </div>
                <div className="flex gap-x-3 text-[#a8a8a8] leading-4 text-xs mt-px">
                    <CommentDate commentDate={comment.commentDate} />
                    <AnswerComment />
                </div>
                {
                    comment.commentReplies && comment.commentReplies.length !== 0 ? (
                        <div className="flex pt-2 items-center gap-x-3">
                            <div className="w-[22px] h-px bg-[#555555]" />
                            <div className="text-[#a8a8a8] font-semibold text-xs leading-4" onClick={handleClick}>{comment.showReplies ? "Tüm yanıtları gizle" : `${comment.commentReplies.length} yanıtın tümünü gör`}</div>
                        </div>
                    ) : null
                }
                {
                    comment.commentReplies && comment.commentReplies.length !== 0 && comment.showReplies ? (
                        <div className="flex flex-col">
                            {
                                comment.commentReplies.map((reply: commentReply) => (
                                    <CommentReply key={reply.id} comment={reply} personRespondedTo={reply.personRespondedTo} />
                                ))
                            }
                        </div>
                    ) : null
                }
            </div>
            <LikeComment />
        </div>
    )
}

const CommentReply = (props: { comment: commentReply, personRespondedTo: string }) => {
    const { comment, personRespondedTo } = props;

    return (
        <div className="pl-2 py-3 flex min-h-[62px] relative">
            <CommentAuthorAvatar />
            <div className="flex flex-col gap-y-1 w-[calc(100%-40px)]">
                <div className="text-[#f5f5f5] text-sm leading-[18px]">
                    <CommentAuthor commentAuthor={comment.commentAuthor} />
                    &nbsp;
                    <Link to={personRespondedTo} className="text-[#e0f1ff] leading-[18px] text-sm font-normal">@{personRespondedTo}</Link>
                    <CommentText commentText={comment.commentText} />
                </div>
                <div className="flex gap-x-3 text-[#a8a8a8] leading-4 text-xs mt-px">
                    <CommentDate commentDate={comment.commentDate} />
                    <AnswerComment />
                </div>
            </div>
            <div className="absolute -right-11">
                <LikeComment />
            </div>
        </div>
    )
}

const CommentAuthor = (props: { commentAuthor: string }) => {
    const { commentAuthor } = props;

    return <Link to="ercansualp" className="font-semibold">{commentAuthor}</Link>
}

const CommentText = (props: { commentText: string }) => {
    const { commentText } = props;

    return <div className="font-normal max-w-[calc(100%)]" style={{ wordWrap: "break-word" }}>{commentText}</div>
}

const CommentDate = (props: { commentDate: string }) => {
    const { commentDate } = props;

    return <span className="font-normal">{commentDate}</span>
}

const CommentAuthorAvatar = () => {
    return (
        <Link to="ercansualp" className="mr-2 !h-[38px] !w-8">
            <img src={DefaultAvatar} alt="" className="rounded-full w-8 h-8"/>
        </Link>
    )
}

const LikeComment = () => {
    return (
        <div className="px-4 pb-2 text-[#8e8e8e] mt-[9px] ml-auto">
            <HeartIcon width={12} height={12} />
        </div>
    )
}

const AnswerComment = () => {
    return <button className="font-semibold">Yanıtla</button>
}

const AddComment = (props: { comments: comment[], setComments: (value: comment[]) => void }) => {
    const { comments, setComments } = props;
    const [comment, setComment] = useState<string|null>();

    const shareComment = () => {
        if(comment)
        {
            const newComments: comment[] = [...comments];
            newComments.unshift(
                { id: (comments.length + 1), commentText: comment, commentDate: "57d", commentAuthor: "_ahmeter_234" }
            );
            setComments(newComments);
            setComment(null);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if(event.target.value === undefined || event.target.value === null || event.target.value === "")
            setComment(null);
        else
            setComment(event.target.value);
    }

    return (
        <div className="min-h-20 flex items-center fixed bottom-[50px] left-0 bg-black w-full border-t border-t-[#555555]">
            <div className="py-2 gap-x-2 flex items-center w-full px-[18px]">
                <img src={DefaultAvatar} alt="" className="rounded-full w-8 h-8" />
                <textarea value={comment ? comment : ""} onChange={handleChange} aria-label="Yorum ekle..." placeholder="Yorum ekle..." autoComplete="off" autoCorrect="off" dir="" className="!max-h-20 bg-black text-[#f5f5f5] grow outline-none text-sm leading-[18px] font-normal resize-none overflow-y-auto"></textarea>
                {
                    comment ? <button className="mx-2 text-[#0095f6] text-sm leading-[18px] font-semibold" onClick={shareComment}>Paylaş</button> : null
                }
            </div>
        </div>
    )
}