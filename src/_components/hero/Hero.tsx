"use client"
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import HeaderStat from "@/_components/stat/HeaderStat";
import {useTranslations} from "next-intl";

export const Hero = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [showStat, setShowStat] = useState<boolean>(false);
    const t = useTranslations("Hero")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const scroll = window.scrollY>0
            setIsScrolled(scrollPosition >= window.innerHeight-110); // Adjust as needed
            setShowStat(scroll)
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = () => {
        setIsScrolling(true);

        const scrollTop = window.scrollY;
        const targetPosition = window.innerHeight+70;
        const scrollDuration = 300;

        const startTime = performance.now();

        function step() {
            const progress = (performance.now() - startTime) / scrollDuration;
            const easedProgress = easeInOutQuad(progress);

            window.scrollTo(0, scrollTop + (targetPosition - scrollTop) * easedProgress);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setIsScrolling(false);
            }
        }

        step();
    };

    return(
        <header className={`hero h-screen w-full max-md:space-y-6 max-md:w-screen relative flex flex-col `}>
            <div className="backdrop-brightness-[.75] w-full h-full flex flex-col items-start justify-center">
                <div className="text-white py-6 ml-14 pl-5 w-[48%] max-xl:w-4/5 max-2xl:w-3/5 max-lg:w-11/12 max-md:w-11/12 max-lg:max-w-screen-md max-lg:mx-2 max-lg:pl-2 space-y-8">
                    <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl font-semibold max-md:w-11/12">{t("welcome")} <br/> <span
                        className={"text-cyan-400"}>Tsingy</span> {t("preposition")} Bemaraha</h1>
                    <p className="text-2xl max-md:text-lg max-md:w-11/12">{t("p")}</p>
                    <Button type="button" size={"lg"} onClick={handleSmoothScroll} disabled={isScrolling}>
                        {t("button")}
                    </Button>
                </div>
            </div>
            <div
                className={`w-full h-fit absolute -bottom-20 max-md:-bottom-14 flex flex-col justify-center items-center transition-all ${showStat ? "md:translate-y-0" : "md:translate-y-44"}`}>
                <HeaderStat/>
            </div>
            <span className={"h-0"} id={"about"}></span>
        </header>
    )
}
const easeInOutQuad = function (t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};