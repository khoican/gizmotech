import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = () => {
    return (
        <div className="lg:w-[17rem] 2xl:w-[20rem] flex-none relative">
            <section className="absolute top-0 w-auto p-2 bg-primary-blue text-sm font-light text-white rounded-br-md">
                <p>Diskon 58%</p>
            </section>
            <img
                src="/assets/image.jpg"
                alt=""
                className="object-cover h-[200px] w-full"
            />
            <section className="p-2">
                <h3 className="text-lg font-semibold capitalize">
                    Nama Product
                </h3>

                <p className="text-xs font-light mt-1 capitalize">
                    Kategori Produk
                </p>
                <div className="w-full flex items-center gap-1 mt-1">
                    <div className="w-[14px] h-[14px] bg-black border border-black rounded-full"></div>
                    <div className="w-[14px] h-[14px] bg-white border border-black rounded-full"></div>
                </div>
            </section>
            <section className="w-full flex items-end justify-between mt-3">
                <a
                    href="https://wa.me.6281234567890?text=Halo%20saya%20ingin%20membeli%20produk%20ini"
                    className="flex items-center gap-2 px-4 py-2 w-auto bg-primary-blue tracking-wider font-light text-white"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className="text-xs">Pesan Via WA</p>
                </a>

                <div className="text-end">
                    <p className="text-xs line-through text-red-700 opacity-80">
                        RP. 10.000.000
                    </p>
                    <p className="text-lg leading-none font-medium">
                        RP. 4.800.000
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ProductCard;
