import DefaultAvatar from "~/assets/img/user.jpg";
import Avatar from "~/pages/profile/avatar";
import {Link} from "react-router-dom";
import {
    DiscoverNewPeopleIcon,
    DownArrowIcon,
    FeedIcon,
    MyTaggedPostsIcon,
    PostsIcon,
    SavedPostsIcon,
    SettingsIcon
} from "~/assets/icons.tsx";
import Followers from "~/pages/profile/followers";
import {ReactNode, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import classNames from "classnames";
import Posts from "~/pages/profile/posts";
import SavedPosts from "~/pages/profile/saved-posts";
import TaggedPosts from "~/pages/profile/tagged-posts";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import Feed from "~/pages/profile/feed";
import Loading from "~/routes/Loading.tsx";
import FindUserByUsername from "~/services/users-service.ts";
import NoUser from "~/pages/profile/no-user";

export default function Profile() {
    const { width } = UseWindowDimensions();
    const [value, setValue] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const { username, profileParam } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState();

    const handleClick = (value: boolean) => {
        setValue(value);
        setIsOpen(true);
    }

    useEffect(() => {
        if(username !== undefined)
            FindUserByUsername(username).then(user => {
                setUser(user);
                setLoading(false);
            });
    }, []);

    if(loading)
        return <Loading />
    else if(user && !user.isUserHave)
        return <NoUser />
    else
        return (
            <>
            <div className="flex flex-col">
                <div className={classNames("mx-auto max-w-[935px] mb-[30px] w-full flex flex-col", {
                    "px-5 pt-[30px]": width && width >= 768
                })}>
                    {
                        width && width < 768 ? (
                            <div className="border-b border-b-[#363636] px-4 flex items-center h-[45px]">
                                <Link to="/" className="mr-2 h-6 w-6">
                                    <SettingsIcon width={24} height={24} />
                                </Link>
                                <div className="grow flex justify-center items-center">
                                    <button className="flex items-center justify-center text-[#f5f5f5]">
                                        <span className="text-base font-semibold leading-5">{username}</span>
                                        <div className="p-2">
                                            <DownArrowIcon width={16} height={16} className="rotate-180" />
                                        </div>
                                    </button>
                                </div>
                                <div className="w-10 h-10 p-2">
                                    <DiscoverNewPeopleIcon width={24} height={24} />
                                </div>
                            </div>
                        ) : null
                    }
                    <header className={classNames("flex gap-x-[30px]", {
                        "mb-11": width && width >= 737,
                        "mb-6 py-5": width && width < 737,
                        "m-4 mb-6 !p-0": width && width < 736,
                        "!gap-x-7": width && width < 736
                    })}>
                        <Avatar avatar={(DefaultAvatar as unknown) as string} />
                        <div className="flex flex-col gap-y-5" style={{ flexGrow: 2 }}>
                            <div className={classNames("flex", {
                                "flex-col gap-y-5 h-full": width && width < 737,
                                "items-center": width && width >= 737,
                                "!gap-y-3": width && width < 736
                            })}>
                                <Link to={username}>
                                    <h1 className="text-[#f5f5f5] leading-[25px] text-xl font-normal">{username}</h1>
                                </Link>
                                <div className={classNames("flex gap-x-2", {
                                    "ml-5": width && width >= 737,
                                    "grow items-center": width && width < 737
                                })}>
                                    <Button>Profili düzenle</Button>
                                    <Button>Arşivi gör</Button>
                                </div>
                                {
                                    width && width >= 768 ? (
                                        <button className="ml-[5px] p-2">
                                            <SettingsIcon width={24} height={24} />
                                        </button>
                                    ) : null
                                }
                            </div>
                            {
                                width && width >= 737 ? (
                                    <>
                                        <ul className="flex gap-x-10">
                                            <li className="text-[#f5f5f5] text-base leading-[18px]">
                                                <span className="mr-1 font-semibold leading-[18px]">1</span>
                                                gönderi
                                            </li>

                                            <li className="text-[#f5f5f5] text-base leading-[18px]">
                                                <button onClick={() => handleClick(false)}>
                                                    <span className="mr-1 font-semibold leading-[18px]">1</span>
                                                    takipçi
                                                </button>
                                            </li>

                                            <li className="text-[#f5f5f5] text-base leading-[18px]">
                                                <button onClick={() => handleClick(true)}>
                                                    <span className="mr-1 font-semibold leading-[18px]">1</span>
                                                    takip
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="text-[#f5f5f5] text-sm font-normal leading-[18px] max-w-[715px]" style={{ overflowWrap: "break-word" }}>
                                            AAAAA
                                            <br/>
                                            BBBBB
                                            <br/>
                                            CCCCC
                                        </div>
                                    </>
                                ) : null
                            }
                        </div>
                    </header>
                    {
                        width && width < 737 ? (
                            <>
                                <div className={classNames("text-[#f5f5f5] text-sm font-normal leading-[18px]", {
                                    "px-4 pb-[21px]": width && width < 736
                                })} style={{ overflowWrap: "break-word" }}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
                                <div className="border-t border-t-[#262626] py-3 grid grid-cols-3 grid-flow-col">
                                    <div className="flex flex-col items-center text-sm leading-[18px]">
                                        <span className="text-[#f5f5f5] font-semibold">1</span>
                                        <span className="text-[#a8a8a8] font-normal">gönderi</span>
                                    </div>

                                    <div className="flex flex-col items-center text-sm leading-[18px]">
                                        <span className="text-[#f5f5f5] font-semibold">1</span>
                                        <span className="text-[#a8a8a8] font-normal">takipçi</span>
                                    </div>
                                    <div className="flex flex-col items-center text-sm leading-[18px]">
                                        <span className="text-[#f5f5f5] font-semibold">1</span>
                                        <span className="text-[#a8a8a8] font-normal">takip</span>
                                    </div>

                                </div>
                            </>
                        ) : null
                    }
                    <PostOptions />
                    {
                        !profileParam ?             <Posts /> :
                            profileParam === "saved" ?  <SavedPosts /> :
                                profileParam === "tagged" ? <TaggedPosts /> :
                                    <Feed />
                    }
                </div>
            </div>
            <Followers value={value} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
        )
}

const Button = (props: { children: string }) => {
    const { width } = UseWindowDimensions();
    const { children } = props;

    return (
        <button className={classNames("h-8 rounded-lg bg-[#363636] flex items-center justify-center text-[#f5f5f5] leading-[18px] font-semibold text-sm hover:bg-[#262626]", {
            "px-[0.81px]": width && width < 361,
            "px-4": width && width >= 361
        })}>
            {children}
        </button>
    )
}

const PostOptions = () => {
    const { width } = UseWindowDimensions();
    const { username } = useParams();
    const options: { title: string, url: string, value?: string, icon: string|ReactNode }[] = [
        { title: "gönderiler", url: `/${username}`, icon: <PostsIcon width={width && width >= 768 ? 12 : 24} height={width && width >= 768 ? 12 : 24} /> },
        { title: "", url: `/${username}/feed`, value: "feed", icon: <FeedIcon width={width && width >= 768 ? 12 : 24} height={width && width >= 768 ? 12 : 24} /> },
        { title: "kaydedilenler", url: `/${username}/saved`, value: "saved", icon: <SavedPostsIcon width={width && width >= 768 ? 12 : 24} height={width && width >= 768 ? 12 : 24} /> },
        { title: "etiketlenenler", url: `/${username}/tagged`, value: "tagged", icon: <MyTaggedPostsIcon width={width && width >= 768 ? 12 : 24} height={width && width >= 768 ? 12 : 24} /> }
    ];

    return (
        <div className={classNames("border-t border-[#262626]", {
            "border-b": width && width < 768,
            "grid grid-cols-4 grid-flow-col": width && width < 736,
            "flex justify-center items-center gap-x-[60px]": width && width >= 736
        })}>
            {
                options.map((option, index) => {
                    return option.value !== "feed" || width && width < 768 ? (
                        <PostOption key={index} title={option.title} url={option.url} value={option.value} icon={(option.icon as unknown) as string} />
                    ) : null
                })
            }
        </div>
    )
}

const PostOption = (props: { title: string, url: string, value?: string, icon: string }) => {
    const { width } = UseWindowDimensions();
    const { profileParam } = useParams();
    const { title, url, value, icon } = props;

    return (
        <Link
            to={url}
            className={classNames("uppercase border-t -mt-px gap-x-1.5 flex items-center justify-center", {
                "text-[#f5f5f5] border-t-[#f5f5f5]": profileParam === value || (!value && !profileParam),
                "text-[#a8a8a8] border-t-[#262626]": profileParam !== value,
                "!border-t-[#262626]": width && width < 768,
                "!text-[#0095f6]": (width && width < 768) && (profileParam === value || (!value && !profileParam)),
                "h-11": width && width < 736,
                "h-[52px]": width && width >= 736
            })}
        >
            {icon}
            { width && width >= 768 ? <span className="text-xs font-semibold leading-[18px]">{title}</span> : null }
        </Link>
    )
}
