import Search from "~/layouts/main/sidebar-section/search";
import Notifications from "~/layouts/main/sidebar-section/notifications";

type props = {
    value: boolean // value değeri sidebar section içeriğini temsil eder. true ise içerik search false ise içerik bildirimler olacaktır
}

export default function SidebarSection(props: props) {
    const { value } = props;

    return (
        <div className="absolute top-0 left-[73px] h-full transition-all w-[397px] bg-black">
            <div className="border-r border-r-[#262626] py-2 rounded-e-2xl h-full">
                {
                    value ? <Search /> : <Notifications />
                }
            </div>
        </div>
    )
}