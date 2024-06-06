import Search from "~/layouts/main/sidebar-section/search";
import Notifications from "~/layouts/main/sidebar-section/notifications";
import {useClickAway} from "react-use";
import {useRef} from "react";
import {setSidebarSection} from "~/store/sidebar/actions.tsx";

type props = {
    value: boolean // value değeri sidebar section içeriğini temsil eder. true ise içerik search false ise içerik bildirimler olacaktır
}

export default function SidebarSection(props: props) {
    const { value } = props;
    const ref = useRef(null);

    useClickAway(ref, () => {
        setSidebarSection(false);
    });

    return (
        <div ref={ref} className="absolute top-0 left-[73px] h-full transition-all w-[397px] bg-black z-50">
            <div className="border-r border-r-[#262626] py-2 rounded-e-2xl h-full">
                {
                    value ? <Search /> : <Notifications />
                }
            </div>
        </div>
    )
}