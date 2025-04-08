import { Link } from "@inertiajs/react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductList = () => {
    return (
        <section className="mt-6 flex items-start gap-5">
            <Categories />

            <div className="w-3/4 grid grid-cols-3 gap-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <Link className="h-auto min-w-1/6 p-2 rounded-sm flex items-center justify-center gap-1 text-white bg-primary-blue/60">
                    <p>Lihat Selengkapnya</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
        </section>
    );
};

export default ProductList;
