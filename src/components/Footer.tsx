const links = [
    {
        name: "Privacy Policy",
        href: "/privacy"
    },
    {
        name: "Terms of Service",
        href: "/terms"
    },
    {
        name: "Contact Us",
        href: "/contact"
    },
]

export default function Footer({className} : {className?: string}) {
    const year = new Date().getFullYear();
    return(
        <footer className={`bg-[#333333] items-center flex justify-around mt-9 text-white py-6 ${className}`}>
            <div className="">
                &copy; {year} Med Bed Healing <br />Center. All rights reserved.
            </div>
            <div className="flex gap-6">
                {links.map((link, index) => (
                    <a key={index} className="hover:underline" href={link.href}> {link.name} </a>
                ))}
            </div>
        </footer>
    )
}