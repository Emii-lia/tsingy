import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MenuIcon} from "lucide-react";
import {INavLink} from "@/_constant/nav.links";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {useLocale} from "use-intl";

export function DropdownNav({navLinks}: Readonly<{ navLinks: INavLink[] }>) {
    const t = useTranslations("Hero.menu")
    const currentLocale = useLocale()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size={"icon"}>
                    <MenuIcon size={32}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 max-sm:w-52 flex flex-col gap-3">
                {
                    navLinks.map((navLink:INavLink, index:number) =>(
                        <div key={index}>
                            {
                                navLink.subLink?
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className={"text-lg py-1"}>{t(navLink.label)}</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                {
                                                    navLink.subLink.map((sub:INavLink, i:number) =>(
                                                        <DropdownMenuItem key={i}>
                                                            <Link href={"/"+currentLocale+"/"+sub.to}>
                                                                {
                                                                    sub.icon &&
                                                                    <span>
                                                                        {sub.icon}
                                                                    </span>
                                                                                        }
                                                                    <span className="text-lg">
                                                                        {t(sub.label)}
                                                                    </span>
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    ))
                                                }
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>:
                                    <DropdownMenuItem className={"py-1"}>
                                        <Link href={"/"+currentLocale+"/"+navLink.to}>
                                            {
                                                navLink.icon &&
                                                <span>
                                                    {navLink.icon}
                                                </span>
                                            }
                                            <span className="text-lg">
                                                {t(navLink.label)}
                                            </span>
                                        </Link>
                                    </DropdownMenuItem>
                            }
                        </div>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
