"use client"
import Image from "next/image";
import {ReactNode, useEffect, useState} from "react";
import {INavLink} from "@/_constant/nav.links";
import Link from "next/link";
import {DropdownNav} from "@/_components/navigation/DropdownNav";
import {useLocale} from "use-intl";
    import {Navigation} from "@/_components/navigation/Navigation";

type NavbarProps = {
    children?:ReactNode
    logo:string
    name:string
    style?:string
    navLinks:INavLink[]
}
export const Navbar = ({children, name, logo, navLinks, style}:NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(scrollPosition >= window.innerHeight-110);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const currentLocale = useLocale()
    return(
        <nav className={`flex flex-row max-md:px-5 max-xl:px-10 max-md:w-screen max-md:py-3 max-md:h-24 ${style} ${isScrolled?"text-customGray-600/80 bg-white shadow-md": `${!style?"text-white/80 backdrop-blur-lg":""}`} fixed justify-between w-full px-20 py-5 top-0 z-50`}>
            <Link href={"/"+currentLocale+"/home"} className="flex flex-row space-x-3 w-1/5 items-center">
                <Image src={logo} alt={name} width={56} height={56} className={"max-md:w-10 max-md:h-10"}/>
                <h1 className="text-5xl max-md:text-3xl max-xl:text-4xl font-semibold font-dancing">{name}</h1>
            </Link>
            <div className="flex flex-row items-center w-3/5 max-xl:w-1/5 max-lg:hidden">
                <Navigation navLinks={navLinks} isScrolled={isScrolled}/>
            </div>
            <div className={"flex flex-row items-center justify-end"}>
                {
                    children &&
                    <div className="w-1/5 max-w-[20%] flex flex-row justify-end items-center">
                        {children}
                    </div>
                }
                <div className={"lg:hidden flex flex-col justify-center items-end"}>
                    <DropdownNav navLinks={navLinks}/>
                </div>
            </div>
        </nav>
    )
}