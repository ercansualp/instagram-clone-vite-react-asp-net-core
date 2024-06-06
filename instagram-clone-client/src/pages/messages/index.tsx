import MessagesSidebar from "~/pages/messages/messages-sidebar";

export default function Messages() {
    return (
        <div className="flex relative">
            <MessagesSidebar />
            <div className="grow"></div>
        </div>
    )
}