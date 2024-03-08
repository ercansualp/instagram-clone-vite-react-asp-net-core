import PostImage from "~/pages/home/post/post-content/post-image";

export default function PostContent() {
    return (
        <div className="grow" style={{ width: "calc(-2px + min(470px, 100vw)))" }}>
            <PostImage />
        </div>
    )
}

/*

img
calc(-2px + min(470px, 100vw)))
(468 - 319.469     468 - 361.062     468 - 468   468 - 504.641    468 - 468    468 - 466   468 - 510.578      468 - 550.375

video (468 - 585     468 468
calc(-2px + min(470px, 100vw)))


 */