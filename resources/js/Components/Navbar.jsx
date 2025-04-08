import {
    faFacebook,
    faInstagram,
    faTiktok,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <header className="w-full bg-primary-gray text-white flex items-center justify-center">
                <div className="container px-20 py-4 flex items-center justify-between">
                    <a
                        href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya"
                        className="flex items-center gap-2 font-extralight text-sm"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        +62 812 3456 7890
                    </a>

                    <aside className="flex items-center justify-end text-sm font-extralight tracking-wider gap-4">
                        <p>Ikuti Kami</p>
                        <a href="#" className="">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </aside>
                </div>
            </header>
            <nav className="sticky top-0 flex items-center justify-center drop-shadow-md bg-white z-50">
                <div className="container px-20 py-4 flex items-center justify-between">
                    <img src="/assets/logoType.svg" alt="" className="h-14" />

                    <aside className="flex items-center gap-5 tracking-wider text-sm font-normal">
                        <Link href="/">Beranda</Link>
                        <Link href="/">Produk</Link>
                        <Link href="/">Kategori</Link>
                    </aside>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
