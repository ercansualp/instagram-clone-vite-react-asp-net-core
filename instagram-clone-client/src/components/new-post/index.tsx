import {useRef, useState} from "react";
import {BackArrowIcon2} from "~/assets/icons.tsx";
import SelectFilesContent from "~/components/new-post/select-files-content";
import SharePostScreen from "~/components/new-post/share-post";
import SharePost from "~/services/posts-services.tsx";
import PostSharing from "~/components/new-post/post-sharing";

export default function NewPost() {
    const [posts, setPosts] = useState<FileList | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [postShare, setPostShare] = useState<null|boolean>(null);

    const resetFiles = () => {
        setPosts(null)
        if(fileInputRef.current !== null)
            fileInputRef.current.value = '';
    }

    const sharePostFunc = async () => {
        setPostShare(false);
        const formData = new FormData();

        // Dosyaları Files isimli key altına eklemek
        if(posts !== null)
            for (let i = 0; i < posts.length; i++) {
                formData.append('files', posts[i]);
            }

        // Diğer bilgileri FormData'ya eklemek
        formData.append('description', "açıklama 1");
        formData.append('closeComments', false);
        formData.append('hideLikeAndViewCount', false);

        await SharePost(formData);
        setPostShare(true);
    }

    return (
        <div className="rounded-xl flex flex-col w-[1032px] text-[#f5f5f5] h-[735px]">
            <div className="flex items-center border-b border-b-[#363636] h-[43px]">
                {
                    posts && postShare === null ? (
                        <button className="ml-2 p-2" onClick={resetFiles}>
                            <BackArrowIcon2 width={24} height={24} />
                        </button>
                    ) : null
                }
                <h1 className="text-base font-semibold mx-auto">
                    {
                        postShare === null ? "Yeni gönderi oluştur" :
                        postShare ?          "Gönderi paylaşıldı" :
                                             "Paylaşım"
                    }
                </h1>
                {
                    posts && postShare === null ? (
                        <div className="p-4">
                            <span onClick={sharePostFunc} className="text-[#0095f6] text-sm font-semibold cursor-pointer hover:text-[#e0f1ff]">Paylaş</span>
                        </div>
                    ) : null
                }
            </div>

            {
                postShare === null && !posts ? <SelectFilesContent setPosts={setPosts} fileInputRef={fileInputRef} /> :
                          postShare === null ? <SharePostScreen posts={posts} /> :
                                               <PostSharing postShare={postShare} />
            }
        </div>
    )
}
