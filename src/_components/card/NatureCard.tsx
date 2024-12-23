"use client"
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {useLocale} from "use-intl";
import {INatureCard} from "@/_type/data.display";
import {ScrollArea} from "@/components/ui/scroll-area";
import {ImageIcon} from "lucide-react";


export default function NatureCard({children, title, type, description, id}: Readonly<INatureCard>) {
    const route = useRouter()
    const t = useTranslations("Nature.card")
    const currentLocale = useLocale()
    return (
        <div className={"shadow-md rounded-lg w-full max-h-[600px] min-h-[510px] max-sm:min-h-[400px] h-full flex flex-col gap-10 max-md:gap-2"}>
            <div className={"w-full max-h-[50%] h-1/2 max-md:max-h-full max-md:h-[65%]"}>
                {children}
            </div>
            <div className={"flex flex-col space-y-4 px-6 pb-6 max-md:px-3 max-md:3"}>
                <div className={"flex flex-col space-y-2"}>
                    <h2 className={"text-gray-800/80 font-semibold text-lg"}>{title}</h2>
                    <h4 className={"text-gray-800/75 text-sm max-md:text-xs font-light"}>{type}</h4>
                </div>
                <div>
                    <ScrollArea className={"h-full max-h-[400px]"}>
                        <p className={"text-gray-800 max-md:text-sm line-clamp-3"}>
                            {description}
                        </p>
                    </ScrollArea>
                </div>
                <div className={"w-full flex flex-col items-end"}>
                    <Button type={"button"} onClick={()=>route.push(`/${currentLocale}/gallery/#${id}`)} className={"flex flex-row space-x-3 max-md:px-5 max-md:h-10"} size={"lg"}>
                        <span>
                            <ImageIcon/>
                        </span>
                        <span className={"text-lg max-md:text-base"}>
                            {t("button")}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}