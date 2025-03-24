import Link from "next/link"

const links = [
    {
        name: 'Home', href: '/components/pages/home'
    },
    {
        name: 'Sales', href: '/components/pages/sales'
    }
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="flex h-[48px] items-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-medium text-white 
                               hover:bg-blue-500 hover:text-white transition-all duration-200 ease-in-out md:justify-start md:px-4"
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
}
