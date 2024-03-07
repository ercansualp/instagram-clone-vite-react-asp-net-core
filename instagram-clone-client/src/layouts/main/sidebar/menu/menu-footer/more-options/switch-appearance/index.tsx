import { Switch } from '@headlessui/react'

type props = {
    enabled: any,
    setEnabled: any
}

export default function SwitchAppearance(props: props) {
    const { enabled, setEnabled } = props;

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-[#0095f6]' : 'bg-[#dbdbdb]'
            } relative inline-flex items-center rounded-full w-[26px] h-[16px]`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
                className={`${
                    enabled ? 'translate-x-[0.675rem]' : 'translate-x-0.5'
                } inline-block h-[14px] w-[14px] transform rounded-full bg-white transition border border-[#e5e7eb]`}
            />
        </Switch>
    )
}