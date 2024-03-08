import ExamplePostImage from "~/assets/img/example_post_image.jpeg";

export default function PostImage() {
    return (
        <img className="rounded" style={{ width: "calc(-2px + min(470px, 100vw)))" }} src={ExamplePostImage} alt="" >

        </img>
    )
}