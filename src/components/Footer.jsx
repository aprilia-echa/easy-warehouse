import {
    Instagram,
    Youtube,
    Music2,
} from "lucide-react";

export default function Footer() {
    return (
        <footer
            id="kontak"
            className="w-full bg-[#f5f5f5] pt-28 overflow-hidden">

            {/* CTA BOX */}
            <div className="max-w-[1200px] mx-auto px-8 relative z-10">
                <div className="bg-gradient-to-r from-red-600 to-red-900 rounded-[18px] px-[30px] py-[35px] flex items-center justify-between shadow-xl">

                    {/* TEXT */}
                    <h2 className="text-white uppercase font-bold text-[25px] max-w-[760px]">
                        TARGETKAN PERTUMBUHAN MAKSIMAL?
                        <br />
                        RAIH DENGAN FULFILLMENT CERDAS.
                    </h2>

                    {/* BUTTON */}
                    <button className="bg-white text-red-700 text-[17px] font-semibold px-10 py-2 rounded-[10px] shadow-md hover:scale-105 transition-all duration-300">
                        Hubungi Kami
                    </button>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="bg-[#ececec] mt-[-45px] pt-32 pb-12">
                <div className="max-w-[1400px] mx-auto px-10">

                    {/* GRID */}
                    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-20">

                        {/* LEFT SIDE */}
                        <div>

                            {/* LOGO */}
                            <div className="flex items-start gap-4">

                                <img
                                    src="/logos/logo.png"
                                    alt="logo"
                                    className="w-[45px] object-contain"
                                />

                                <div className="mt-1">
                                    <h2 className="text-[20px] font-bold leading-none text-[#1f1f1f]">
                                        EASY
                                    </h2>

                                    <p className="text-[20px] leading-none text-[#a50000]">
                                        WAREHOUSE
                                    </p>
                                </div>

                            </div>

                            {/* DESC */}
                            <p className="mt-2 text-[15px] leading-[1.5] text-[#555] max-w-[390px]">
                                Solusi pergudangan cerdas yang
                                <br />
                                memberdayakan bisnis di era digital melalui
                                <br />
                                visibilitas data dan otomatisasi sensorik.
                            </p>

                            {/* SOCIAL */}
                            <div className="flex items-center gap-5 mt-10">

                                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                                    <Music2 size={20} className="text-[#555]" />
                                </div>

                                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                                    <Youtube size={20} className="text-[#555]" />
                                </div>

                                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f7f7f7] flex items-center justify-center shadow-sm">
                                    <Instagram size={20} className="text-[#555]" />
                                </div>

                            </div>

                            {/* CONTACT */}
                            <div className="flex gap-44 mt-24">

                                <div className="flex items-center gap-3">
                                    <p className="text-[15px] text-[#666] whitespace-nowrap">
                                        Phone number
                                    </p>

                                    <p className="text-[15px] font-medium text-[#222] whitespace-nowrap">
                                        1-800-201-1019
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <p className="text-[15px] text-[#666] whitespace-nowrap">
                                        Email
                                    </p>

                                    <p className="text-[15px] font-medium text-[#222] whitespace-nowrap">
                                        RapierSupport@gmail.com
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* COLUMN 1 */}
                        <div className="pt-4">
                            <h3 className="text-[18px] font-bold text-[#222] mb-6">
                                PRODUK
                            </h3>

                            <ul className="text-[15px] text-[#7a7a7a]">
                                <li>
                                    <a
                                        href="#fitur"
                                        className="hover:text-red-700 cursor-pointer transition-all">
                                        Fitur Utama
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="pt-4">
                            <h3 className="text-[18px] font-bold text-[#222] mb-6">
                                PERUSAHAAN
                            </h3>

                            <ul className="text-[15px] text-[#7a7a7a]">
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:text-red-700 cursor-pointer transition-all">
                                        Tentang Kami
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* COLUMN 3 */}
                        <div className="pt-4">
                            <h3 className="text-[18px] font-bold text-[#222] mb-6">
                                LEGAL
                            </h3>

                            <ul className="text-[15px] text-[#7a7a7a]">

                                <li>
                                    <a
                                        href="#faq"
                                        className="hover:text-red-700 cursor-pointer transition-all"
                                    >
                                        FAQ
                                    </a>
                                </li>

                                <li className="py-6">
                                    <a
                                        href="#footer"
                                        className="hover:text-red-700 cursor-pointer transition-all"
                                    >
                                        Kontak Kami
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="mt-14 pt-8 border-t border-[#dddddd]">
                        <p className="text-[11px] text-[#a1a1a1]">
                            2026 EasyWarehouse. Digitalizing your inventory Management.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}