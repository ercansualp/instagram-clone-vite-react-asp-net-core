import {Dialog} from "@headlessui/react";
import {CloseIcon} from "~/assets/icons.tsx";

type props = {
    isOpen: any,
    setIsOpen: any
}

export default function ReportAProblemDialog(props: props) {
    const { isOpen, setIsOpen } = props;

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex items-center justify-center bg-[#000000a6]">
                <Dialog.Panel className="rounded-xl w-[440px] h-[334px] bg-transparent"> {/* overflow-y-auto max-h-[calc(100%-40px)]  */}
                    <div className="flex flex-col m-5 bg-[#262626] h-[294px] rounded-xl">
                        <div className="relative border-b border-b-[#363636] !h-[43px] flex items-center justify-center text-[#f5f5f5] text-base leading-5 font-semibold">
                            <span>Bir sorun bildir</span>
                            <div className="w-[50px] h-full absolute right-0 top-0 flex items-center justify-center">
                                <button onClick={() => setIsOpen(false)}>
                                    <CloseIcon width={18} height={18} className="text-[#f5f5f5]" />
                                </button>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col gap-y-4">
                            <textarea className="p-1.5 border border-[#363636] text-base font-normal leading-[18px] h-32 resize-y bg-transparent text-[#f5f5f5] outline-none" placeholder="Lütfen olabildiğince fazla bilgi ekle..."></textarea>
                            <div className="flex justify-between">
                                <button className="px-4 h-8 flex items-center justify-center bg-[#0095f6] rounded-lg text-white text-sm leading-[18px] font-semibold hover:bg-[#1877f2]">Şikayet gönder</button>

                                <button className="px-4 h-8 flex items-center justify-center bg-[#555555b3] rounded-lg text-[#f5f5f5] text-sm leading-[18px] font-semibold hover:bg-[#1877f2]">Dosya ekle</button>
                            </div>
                            <span className="text-[#a8a8a8] font-normal text-xs leading-4">
                            Instagram kullanıcı adın ve tarayıcı bilgilerin otomatik olarak şikayetine eklenecektir.
                        </span>
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}