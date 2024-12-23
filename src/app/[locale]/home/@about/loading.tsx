import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import SectionTitleSk from "@/_components/skeleton/title/SectionTitleSk";
import {Skeleton} from "@/components/ui/skeleton";

export default function AboutSk() {
    return(
        <SectionWrapper>
            <SectionTitleSk/>
            <div
                className={"flex flex-row space-x-8 h-[60vh] max-xl:h-[100vh] max-xl:justify-end max-xl:flex-col-reverse max-xl:space-x-0 max-xl:gap-6"}>
                <div
                    className={"max-w-1/2 w-1/2 max-sm:h-1/2 h-full flex flex-col space-y-5 justify-between max-sm:justify-normal max-xl:max-w-full max-xl:w-full"}>
                    <div className={"max-w-full flex flex-col space-y-3"}>
                        <Skeleton className={"bg-gray500/70 w-44 h-7"}/>
                        <div className={"flex flex-col space-y-2"}>
                            <Skeleton className={"bg-gray500/70 w-1/2 h-5"}/>
                            <Skeleton className={"bg-gray500/70 w-1/2 h-5"}/>
                            <Skeleton className={"bg-gray500/70 w-2/5 h-5"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <Skeleton className={"bg-gray500/70 w-44 h-7"}/>
                        <div className={"flex flex-col space-y-2 justify-between"}>
                            <Skeleton className={"bg-gray500/70 w-1/2 h-36"}/>
                            <Skeleton className={"bg-gray500/70 w-1/2 h-36"}/>
                        </div>
                    </div>
                    <div className={"flex flex-col space-y-3"}>
                        <Skeleton className={"bg-gray500/70 w-44 h-7"}/>
                        <div className={"flex flex-col"}>
                            <Skeleton className={"bg-gray500/70 w-1/2 h-36"}/>
                        </div>
                    </div>
                </div>
                <Skeleton className={"bg-gray500/70 w-[45%] h-full max-xl:w-full max-xl:h-[80vh] max-sm:h-1/3 z-10"}/>
            </div>
        </SectionWrapper>
    )
}