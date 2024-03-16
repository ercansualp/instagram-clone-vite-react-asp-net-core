import PostDialog from "~/pages/post-preview/post-dialog";
import PostPage from "~/pages/post-preview/post-page";

export default function PostPreview(props: { isOpen?: boolean, setIsOpen?: (value: boolean) => void }) {
    const { isOpen = false, setIsOpen } = props;

    if(isOpen && setIsOpen)
        return <PostDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    return <PostPage />
}