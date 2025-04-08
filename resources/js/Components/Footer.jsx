import {
    faFacebook,
    faInstagram,
    faTiktok,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <>
            <section className="container px-20 mt-36 flex items-start justify-between">
                <img src="/assets/logo.svg" alt="" className="w-2/12" />

                <aside className="w-9/12">
                    <p className="text-sm font-light text-justify">
                        GizmoTech merupakan sebuah pusat perbelanjaan barang
                        elektronik yang berlokasi di Jl. PB Sudirman - Jember.
                        Gizmo menyediakan berbagai peralatan teknologi mulai
                        dari laptop, komputer, aksesoris komputer, hingga
                        peralatan rumah tangga seperti esin cuci, blender dan
                        lain-lain. Anda dapat menghubungi call center kami
                        dengan mengsisi formulir dibawah ini.
                    </p>

                    <form className="mt-5">
                        <label className="text-sm">
                            Nama Lengkap
                            <input
                                type="text"
                                className="w-full px-4 py-2 mt-1 border border-primary-gray/50 rounded mb-3"
                                placeholder="Masuhkkan nama anda"
                            ></input>
                        </label>
                        <label className="text-sm">
                            Pesan
                            <textarea
                                className="w-full px-4 py-2 mt-1 border border-primary-gray/50 rounded resize-none mb-3"
                                rows={5}
                                placeholder="Isi pesan anda"
                            />
                        </label>
                        <button className="px-4 py-2 cursor-pointer text-sm bg-primary-blue/80 hover:bg-primary-blue tracking-wider font-light text-white rounded-sm drop-shadow-md">
                            Kirim Pesan
                        </button>
                    </form>
                </aside>
            </section>

            <footer className="mt-16 container px-20">
                <section className="flex items-start justify-between">
                    <aside className="w-1/4">
                        <h3 className="text-3xl font-semibold tracking-widest">
                            GIZMOSTORE
                        </h3>
                    </aside>
                    <aside className="w-2/4 flex items-start justify-end gap-18">
                        <section>
                            <h5 className="text-md font-semibold">LAYANAN</h5>

                            <div className="flex flex-col items-start gap-2 mt-5">
                                <Link href="/">Beranda</Link>
                                <Link href="/">Produk</Link>
                                <Link href="/">Kategori</Link>
                                <Link href="/">Karir</Link>
                            </div>
                        </section>
                        <section>
                            <h5 className="text-md font-semibold">
                                KONTAK KAMI
                            </h5>

                            <div className="flex flex-col items-start gap-2 mt-5">
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        className="me-2"
                                    />
                                    +62 812 3456 7890
                                </a>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="me-2"
                                    />
                                    Gizmotech
                                </a>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        className="me-2"
                                    />
                                    gizmotech_store
                                </a>
                                <a href="">
                                    <FontAwesomeIcon
                                        icon={faTiktok}
                                        className="me-2"
                                    />
                                    gizmotech_store
                                </a>
                            </div>
                        </section>
                    </aside>
                </section>

                <hr className="mt-10 mb-5 border border-primary-gray/50" />

                <p className="mb-5 text-sm font-light">
                    Dibuat dengan cinta oleh Rull Studio
                </p>
            </footer>
        </>
    );
};

export default Footer;
