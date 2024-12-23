import {Separator} from "@/components/ui/separator";
import {useTranslations} from "next-intl";

export default function HeaderStat(){
    const t = useTranslations("Hero")
    return(
        <div className={"flex flex-row space-x-10 max-md:space-x-3 shadow-md rounded-lg bg-white p-10 max-md:p-4 max-md:m-2"}>
            <div className={"flex flex-col space-y-4 items-center max-md:space-y-2 text-center"}>
                <h1 className={"text-gray-800/80 font-semibold text-3xl max-md:text-lg"}>85%</h1>
                <h3 className={"text-gray-800/80 text-lg max-md:text-sm"}>{t("1h3")}</h3>
            </div>
            <Separator orientation="vertical" className={"h-20 max-md:h-16"}/>
            <div className={"flex flex-col space-y-4 items-center max-md:space-y-2 text-center"}>
                <h1 className={"text-gray-800/80 font-semibold text-3xl max-md:text-lg"}>+200.000</h1>
                <h3 className={"text-gray-800/80 text-lg max-md:text-sm"}>{t("2h3")}</h3>
            </div>
            <Separator orientation="vertical" className={"h-20 max-md:h-16"}/>
            <div className={"flex flex-col space-y-4 items-center max-md:space-y-2 text-center"}>
                <h1 className={"text-gray-800/80 font-semibold text-3xl max-md:text-lg"}>{t("h1")}</h1>
                <h3 className={"text-gray-800/80 text-lg max-md:text-sm"}>{t("3h3")}</h3>
            </div>
        </div>
    )
}