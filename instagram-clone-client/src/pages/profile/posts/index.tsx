import {Link} from "react-router-dom";
import ExamplePost from "~/assets/img/example_post.jpg";
import ExamplePost2 from "~/assets/img/example_post_2.jpg";
import {MouseEvent, ReactNode, useState} from "react";
import PostPreview from "~/pages/post-preview";

export default function Posts() {
    const posts: { postId: string, src: string|ReactNode }[] = [
        { postId: "C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw0", src: ExamplePost },
        { postId: "C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw1", src: ExamplePost },
        { postId: "C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw2", src: ExamplePost },
        { postId: "C4lMB1biHwFalOUgRiGzHolwkNJJctKDAoccxw3", src: ExamplePost2 }
    ]

    return (
        <div className="mb-7 grid gap-1 grid-cols-3">
            {
                posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))
            }
        </div>
    )
}

const Post = (props: { post: { src: string|ReactNode, postId: string } }) => {
    const { post } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.history.replaceState(null, "", `/p/${post.postId}`);
        setIsOpen(true);
    }

    return (
        <>
            <Link to={`/p/${post.postId}`} onClick={handleClick}>
                <img src={(post.src as unknown) as string} alt="" className="object-cover" />
            </Link>
            {
                isOpen ? <PostPreview isOpen={isOpen} setIsOpen={setIsOpen} /> : null
            }
        </>
    )
}