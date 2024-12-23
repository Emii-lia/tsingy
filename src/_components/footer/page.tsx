"use client"
import {Separator} from "@/components/ui/separator";
import {INavLink, navLinks} from "@/_constant/nav.links";
import Link from "next/link";
import {Facebook, Instagram, PhoneIcon, Twitter} from "lucide-react";
import {useTranslations} from "next-intl";
import {useLocale} from "use-intl";

export default function Footer(){
    const t = useTranslations("Footer")
    const currentLocale = useLocale()
    return(
        <div className={" py-5 px-52 bg-light w-full h-44 max-lg:px-6 max-lg:py-2 max-lg:items-center max-xl:px-16 max-xl:h- max-2xl:px-36 max-2xl:py-2 max-xl:py-8 flex flex-col justify-center gap-3"}>
            <div className={"flex flex-row justify-between px-4 max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:px-2"}>
                <div className="flex flex-row items-center gap-10 max-lg:hidden w-3/4">
                    {
                        navLinks.map((link: INavLink, index: number) => (
                            <Link href={"/"+currentLocale+"/"+link.to} key={index} className="flex flex-row gap-4">
                                {
                                    link.icon &&
                                    <span>
                                        {link.icon}
                                    </span>
                                }
                                <span className="text-gray-800/70 max-xl:text-sm">
                                    {t("menu."+link.label)}
                                </span>
                            </Link>
                        ))
                    }
                </div>
                <div className={"flex flex-row items-center space-x-5"}>
                    <Link className={"no-underline text-gray-700/80"} href={""}>
                        <PhoneIcon/>
                    </Link>
                    <Link href="" className={"no-underline text-gray-700/80"}>
                        <Instagram/>
                    </Link>
                    <Link href="" className={"no-underline text-gray-700/80"}>
                        <Facebook/>
                    </Link>
                    <Link href="" className={"no-underline text-gray-700/80"}>
                        <Twitter/>
                    </Link>
                </div>
            </div>
            <Separator className={"bg-gray-600/30"}/>
            <div className={"px-4 flex flex-row justify-between max-lg:flex-col max-lg:justify-start max-lg:items-center max-lg:space-y-6 max-lg:px-2"}>
                <p className={"text-sm text-gray-800/75 max-lg:text-center"}>&#169;{new Date().getFullYear()} {t("copyright")} in_it</p>
                <div className={"flex flex-row gap-6 text-gray-800/75 max-lg:gap-2"}>
                    <Link href={""} className={"text-sm max-lg:text-xs"}>
                        {t("terms")}
                    </Link>
                    <Link href={""} className={"text-sm max-lg:text-xs"}>
                        {t("privacy")}
                    </Link>
                    <Link href={""} className={"text-sm max-lg:text-xs"}>
                        {t("cookies")}
                    </Link>
                </div>
            </div>
        </div>
    )
}