"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {INavLink} from "@/_constant/nav.links";
import {useLocale} from "use-intl";
import {useTranslations} from "next-intl";


export function Navigation({navLinks, isScrolled}: Readonly<{ navLinks: INavLink[], isScrolled: boolean }>) {
    const currentLocale = useLocale()
    const t = useTranslations("Hero.menu")
    return (
        <NavigationMenu className={"w-full"}>
            <NavigationMenuList className={"space-x-5 max-xl:space-x-1"}>
                    {
                        navLinks.map((navLink:INavLink, index:number)=>(
                            <NavigationMenuItem key={index}>
                                {
                                    navLink.subLink?
                                    <>
                                        <NavigationMenuTrigger className={`text-lg max-xl:text-base ${!isScrolled? " bg-transparent":" text-gray-800/70"}`}>{t(navLink.label)}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="flex flex-col space-y-4 p-4 md:w-[300px] lg:w-[400px] xl:w-[600px] text-gray-800/70">
                                                {
                                                    navLink.subLink.map((sub:INavLink, i:number) => (
                                                        <ListItem href={"/"+currentLocale+"/"+sub.to} key={i}>
                                                            {t(sub.label)}
                                                        </ListItem>
                                                    ))
                                                }
                                            </ul>
                                        </NavigationMenuContent>
                                    </>:
                                    <Link href={"/"+currentLocale+"/"+navLink.to} legacyBehavior passHref>
                                        <NavigationMenuLink className={!isScrolled? "xl:text-lg bg-transparent block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/35 hover:text-accent-foreground focus:bg-accent/35 focus:text-accent-foreground":" xl:text-lg text-gray-800/70 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}>
                                            {t(navLink.label)}
                                        </NavigationMenuLink>
                                    </Link>
                                }
                            </NavigationMenuItem>
                        ))
                    }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = ({href, children}:{href:string, children:React.ReactNode}) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                    href={href}
                >
                    <div className="font-medium leading-none">{children}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}