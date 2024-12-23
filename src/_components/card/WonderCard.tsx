import {IWonderCard} from "@/_type/data.display";
import MapButton from "@/_components/button/MapButton";
import {useState} from "react";
import CanvasMap from "@/_components/map/CanvasMap";
import {useTranslations} from "next-intl";
import {ScrollArea} from "@/components/ui/scroll-area";

export const WonderCard = ({children, title, description, subtitle, position}:IWonderCard)=>{
    const [isMap, setIsMap] = useState<boolean>(false)
    const t = useTranslations("Wonder")
    const toggleMap = ()=>{
        setIsMap(isMap=>!isMap)
    }
    return(
        <div className={"shadow-md rounded-lg w-full max-h-[600px] min-h-[510px] max-sm:min-h-[400px] h-full flex flex-col justify-between gap-10 max-md:gap-2"}>
            <div className={"w-full max-h-[50%] h-64 max-md:max-h-[10rem] max-md:h-[40%]"}>
                {
                isMap ?
                <section className={"w-full h-[18.5rem] z-10 max-md:h-[15rem]"}>
                    <CanvasMap center={position} zoom={10} position={position}/>
                </section>:
                <div className={"w-full h-[16rem] z-10 max-md:h-[7rem]"}>
                    {children}
                </div>
                }
            </div>
            <div className={"flex flex-col justify-end space-y-4 px-6 pb-6 max-md:px-3 max-md:3 max-h-[50%] max-md:h-[60%]"}>
                <div className={"flex flex-col space-y-2"}>
                    <h2 className={"text-gray-800/80 font-semibold text-lg"}>{title}</h2>
                    <h4 className={"text-gray-800/75 text-sm max-md:text-xs font-light"}>{subtitle}</h4>
                </div>
                <ScrollArea className={"h-2/5 max-md:h-4/5 p-2"}>
                    <div className={""}>
                        <p className={"text-gray-800 max-md:text-sm"}>
                            {description}
                        </p>
                    </div>
                </ScrollArea>
                <div className={"w-full flex flex-col items-end"}>
                    <MapButton isMap={isMap} label={!isMap ? t("cards.button.map") : t("cards.button.pictures")}
                               onClick={() => toggleMap()}/>
                </div>
            </div>
        </div>
    )
}