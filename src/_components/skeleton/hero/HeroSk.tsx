"use client"
import {useEffect, useState} from "react";
import {Skeleton} from "@/components/ui/skeleton";

export const HeroSk = () => {
    const [showStat, setShowStat] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY>0
            setShowStat(scroll)
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <header className={`h-screen w-full max-md:space-y-6 max-md:w-screen relative flex flex-col `}>
            <div className="backdrop-brightness-[.75] w-full h-full flex flex-col items-start justify-center">
                <div className="text-white py-6 ml-14 pl-5 w-[48%] max-xl:w-4/5 max-2xl:w-3/5 max-lg:w-11/12 max-md:w-11/12 max-lg:max-w-screen-md max-lg:mx-2 max-lg:pl-2 space-y-8">
                    <Skeleton className={"h-6 w-64"}/>
                    <Skeleton className={"h-6 w-80"}/>
                    <Skeleton className={"h-4 w-80"}/>
                    <Skeleton className={"h-4 w-80"}/>
                    <Skeleton className={"h-11 w-28"}/>
                </div>
            </div>
            <div
                className={`w-full h-fit absolute -bottom-20 max-md:-bottom-14 flex flex-col justify-center items-center transition-all ${showStat ? "md:translate-y-0" : "md:translate-y-44"}`}>
                <Skeleton className={"w-80 h-52"}/>
            </div>
            <span className={"h-0"} id={"about"}></span>
        </header>
    )
}
const easeInOutQuad = function (t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};