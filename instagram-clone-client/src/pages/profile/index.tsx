import DefaultAvatar from "~/assets/img/user.jpg";
import Avatar from "~/pages/profile/avatar";
import {Link, NavLink} from "react-router-dom";
import {MyTaggedPostsIcon, PostsIcon, SavedPostsIcon, SettingsIcon} from "~/assets/icons.tsx";
import Followers from "~/pages/profile/followers";
import {ReactNode, useState} from "react";
import { useParams } from 'react-router-dom';
import classNames from "classnames";
import Posts from "~/pages/profile/posts";
import SavedPosts from "~/pages/profile/saved-posts";
import TaggedPosts from "~/pages/profile/tagged-posts";

export default function Profile() {
    const [value, setValue] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const { username, profileParam } = useParams();

    const handleClick = (value: boolean) => {
        setValue(value);
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="mx-auto pt-[30px] px-5 max-w-[935px] mb-[30px] w-full flex flex-col">
                    <header className="mb-11 flex gap-x-[30px]">
                        <Avatar avatar={(DefaultAvatar as unknown) as string} />
                        <div className="flex flex-col gap-y-5" style={{ flexGrow: 2 }}>
                            <div className="flex items-center">
                                <Link to={"ercansualp"}>
                                    <h1 className="text-[#f5f5f5] leading-[25px] text-xl font-normal">ahmeter.233</h1>
                                </Link>
                                <div className="ml-5 flex gap-x-2">
                                    <Button>Profili düzenle</Button>
                                    <Button>Arşivi gör</Button>
                                </div>
                                <button className="ml-[5px] p-2">
                                    <SettingsIcon width={24} height={24} />
                                </button>
                            </div>
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
                        </div>
                    </header>
                    <PostOptions profileParam={profileParam} />
                    {
                        !profileParam ?             <Posts /> :
                        profileParam === "saved" ?  <SavedPosts /> :
                                                    <TaggedPosts />
                    }
                </div>
            </div>
            <Followers value={value} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

const Button = (props: { children: string }) => {
    const { children } = props;

    return (
        <button className="px-4 h-8 rounded-lg bg-[#363636] flex items-center justify-center text-[#f5f5f5] leading-[18px] font-semibold text-sm hover:bg-[#262626]">
            {children}
        </button>
    )
}

const PostOptions = (props: { profileParam: string|null|undefined }) => {
    const { profileParam } = props;
    const options: { title: string, url: string, value?: string, icon: string|ReactNode }[] = [
        { title: "gönderiler", url: "/ercansualp", icon: <PostsIcon width={12} height={12} /> },
        { title: "kaydedilenler", url: "/ercansualp/saved", value: "saved", icon: <SavedPostsIcon width={12} height={12} /> },
        { title: "etiketlenenler", url: "/ercansualp/tagged", value: "tagged", icon: <MyTaggedPostsIcon width={12} height={12} /> }
    ];

    return (
        <div className="border-t border-t-[#262626] flex justify-center items-center gap-x-[60px]">
            {
                options.map((option, index) => (
                    <PostOption key={index} profileParam={profileParam} title={option.title} url={option.url} value={option.value} icon={(option.icon as unknown) as string} />
                ))
            }
        </div>
    )
}

const PostOption = (props: { profileParam: string|null|undefined, title: string, url: string, value?: string, icon: string }) => {
    const { profileParam, title, url, value, icon } = props;
    console.log("aa: ", profileParam);
    return (
        <Link
            to={url}
            className={classNames("uppercase border-t -mt-px h-[52px] flex items-center justify-center gap-x-1.5", {
                "text-[#f5f5f5] border-t-[#f5f5f5]": profileParam === value || (!value && !profileParam),
                "text-[#a8a8a8] border-t-[#262626]": profileParam !== value
            })}
        >
            {icon}
            <span className="text-xs font-semibold leading-[18px]">{title}</span>
        </Link>
    )
}