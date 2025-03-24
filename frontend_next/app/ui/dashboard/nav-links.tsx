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
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 color:#000"
                    >
                    </Link>
                );
            })}
        </>
    )
}