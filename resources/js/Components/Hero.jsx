const Hero = () => {
    return (
        <header className="flex items-start justify-center">
            <div className="container px-20 flex items-start justify-between">
                <aside className="w-[60%] mt-20">
                    <p className="text-lg font-medium mb-10 ml-2">
                        Promo Awal Tahun
                    </p>
                    <h1 className="text-8xl font-extrabold">
                        DISKON <span className="text-primary-blue">20%</span>
                    </h1>
                    <p className="text-lg tracking-widest font-light ml-2 mb-10">
                        Khusus untuk pelanggan baru
                    </p>

                    <a
                        href="#product"
                        className="px-6 py-3 bg-primary-blue/80 hover:bg-primary-blue text-lg tracking-wider font-light text-white rounded-sm drop-shadow-md"
                    >
                        Belanja Sekarang
                    </a>
                </aside>
                <aside className="w-[35%]">
                    <img
                        src="/assets/heroImage.svg"
                        alt=""
                        className="w-full rotate-[70deg] mt-10"
                    />
                </aside>
            </div>
        </header>
    );
};

export default Hero;
