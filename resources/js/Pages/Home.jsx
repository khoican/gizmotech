import { Link } from "@inertiajs/react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            <main className="flex flex-col items-center justify-center">
                <main className="container mt-32">
                    <h1 className="text-center text-lg uppercase font-semibold tracking-widest">
                        Harga Miring
                    </h1>
                    <p className="text-center text-xs font-normal -mt-1">
                        miliki produk kami dengan harga lebih dari 50% lebih
                        murah
                    </p>

                    <section className="flex gap-5 overflow-x-auto ps-20 pe-6 py-6 no-scrollbar">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <Link className="h-auto min-w-1/6 p-2 rounded-sm flex items-center justify-center gap-1 text-white bg-primary-blue/60">
                            <p>Lihat Selengkapnya</p>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </section>
                </main>

                <main className="container mt-20 px-20">
                    <h1 className="text-lg uppercase font-semibold tracking-widest">
                        Produk Lainnya
                    </h1>
                    <p className="text-xs font-normal -mt-1">
                        nikmati berbelanja dengan berbagai promo menarik
                    </p>

                    <ProductList />
                </main>

                <Footer />
            </main>
        </>
    );
};

export default Home;
