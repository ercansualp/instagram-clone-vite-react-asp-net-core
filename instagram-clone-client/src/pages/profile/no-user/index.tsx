import {Link} from "react-router-dom";

export default function NoUser() {
    return (
        <div className="p-10 flex flex-col items-center gap-y-10">
            <div className="font-semibold text-2xl">Üzgünüz, bu sayfaya ulaşılamıyor.</div>
            <div className="text-base font-normal">
                Tıkladığın bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir.
                <Link to="/" className="text-[#e0f1ff] font-normal text-base ml-1">Instagram'a geri dön.</Link>
            </div>
        </div>
    )
}
