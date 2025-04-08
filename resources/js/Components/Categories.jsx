import { Link } from "@inertiajs/react";

const Categories = () => {
    return (
        <section className="w-1/4 flex flex-col">
            <Link
                href="/categories"
                className="text-sm font-normal min-w-full px-6 py-2 rounded-t-sm border border-primary-gray hover:bg-primary-gray/20"
            >
                Kategori
            </Link>
            <Link
                href="/categories"
                className="text-sm font-normal min-w-full px-6 py-2 border-x border-primary-gray hover:bg-primary-gray/20"
            >
                Kategori
            </Link>
            <Link
                href="/categories"
                className="text-sm font-normal min-w-full px-6 py-2 rounded-b-sm border border-primary-gray hover:bg-primary-gray/20"
            >
                Kategori
            </Link>
        </section>
    );
};

export default Categories;
