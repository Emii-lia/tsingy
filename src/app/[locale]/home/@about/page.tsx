"use client"
import SectionTitle from "@/_components/typography/SectionTitle";
import CanvasMap from "@/_components/map/CanvasMap";
import IconStat from "@/_components/stat/IconStat"
import {CalendarIcon, CircleDollarSignIcon, Clock3Icon } from "lucide-react";
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import {useTranslations} from "next-intl";
import L from "leaflet";

export default function About() {
    const center:L.LatLngExpression = [-18.9127, 44.7904]
    const globalCenter:L.LatLngExpression = [-18.9127, 46.8904]
    const zoom:number = 5
    const t = useTranslations("About")
    return(
        <SectionWrapper>
            <SectionTitle>
                {t("title")}
            </SectionTitle>
            <div className={"flex flex-row space-x-8 h-[60vh] max-xl:h-[100vh] max-xl:justify-end max-xl:flex-col-reverse max-xl:space-x-0 max-xl:gap-6"}>
                <div className={"max-w-1/2 w-1/2 max-sm:h-1/2 h-full flex flex-col space-y-5 justify-between max-sm:justify-normal max-xl:max-w-full max-xl:w-full"}>
                    <div className={"max-w-full flex flex-col space-y-3"}>
                        <h2 className={"text-lg text-gray-800/80 font-semibold"}>Description:</h2>
                        <p className={"text-gray-800/75 text-justify max-sm:text-sm"}>{t("text")}</p>
                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <h2 className={"text-lg text-gray-800/80 font-semibold"}>{t("header2")}:</h2>
                        <div className={"flex flex-col space-y-2 justify-between"}>
                            <IconStat icon={<Clock3Icon size={36} className={"max-md:text-sm"}/>}>
                                {t("time")}
                            </IconStat>
                            <IconStat icon={<CalendarIcon size={36} className={"max-md:text-sm"}/>}>
                                {t("days")}
                            </IconStat>
                        </div>
                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <h2 className={"text-lg text-gray-800/80 font-semibold"}>{t("header3")}:</h2>
                        <div className={"flex flex-col space-y-2 justify-between"}>
                            <IconStat icon={<CircleDollarSignIcon size={36} className={"max-md:text-sm"}/>}>
                                {" $5.2 " + t("kid") + " $11.3 " + t("adult")}
                            </IconStat>
                            <IconStat icon={<CircleDollarSignIcon size={36} className={"max-md:text-sm"}/>}>
                                {"$32 "+t("guide")}
                            </IconStat>

                        </div>
                    </div>
                </div>
                <section className={"w-[45%] h-full max-xl:w-full max-xl:h-[80vh] max-sm:h-1/3 z-10"}>
                    <CanvasMap center={globalCenter} zoom={zoom} position={center}/>
                </section>
            </div>
            <span className={"h-0"} id={"event"}></span>
        </SectionWrapper>
    )
}