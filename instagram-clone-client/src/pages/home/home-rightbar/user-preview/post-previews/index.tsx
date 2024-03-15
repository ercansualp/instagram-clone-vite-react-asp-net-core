import {Link} from "react-router-dom";
import ExamplePost from "~/assets/img/example_post.jpg";

type Post = {
    postUrl: string,
    postPath: string
}

export default function PostPreviews() {
    const posts: Post[] = [
        { postUrl: "ercansualp", postPath: ExamplePost },
        { postUrl: "ercansualp", postPath: ExamplePost },
        { postUrl: "ercansualp", postPath: ExamplePost }
    ];

    return (
        <div className="grid grid-cols-3 grid-flow-col gap-x-[3px]">
            {
                posts.map((post, index) => (
                    <Post key={index} postUrl={post.postUrl} postPath={(post.postPath as unknown) as string} />
                ))
            }
        </div>
    )
}

const Post = (props: { postUrl: string, postPath: string }) => {
    const { postUrl, postPath } = props;

    return (
        <>
            <Link to={postUrl} className="w-[120px] h-[120px]">
                <img src={postPath} alt="" className="w-full h-full" />
            </Link>
        </>
    )
}