"use client"
import {Skeleton} from "@/components/ui/skeleton";


export default function CardType2Sk() {
    return (
        <div className={"shadow-md rounded-lg w-full max-h-[600px] min-h-[510px] max-sm:min-h-[400px] h-full flex flex-col gap-10 max-md:gap-2"}>
            <div className={"w-full max-h-[50%] h-1/2 max-md:max-h-full max-md:h-[65%]"}>
                <Skeleton className={"bg-gray-500/70 h-[300px] w-full"}/>
            </div>
            <div className={"flex flex-col space-y-4 px-6 pb-6 max-md:px-3 max-md:3"}>
                <div className={"flex flex-col space-y-2"}>
                    <Skeleton className={"bg-gray-500/70 w-28 h-4"}/>
                    <Skeleton className={"bg-gray-500/70 w-24 h-2"}/>
                </div>
                <div className={"h-full max-h-[500px] flex flex-col gap-2"}>
                    <Skeleton className={"bg-gray-500/70 w-11/12 h-3"}/>
                    <Skeleton className={"bg-gray-500/70 w-11/12 h-3"}/>
                    <Skeleton className={"bg-gray-500/70 w-5/6 h-3"}/>
                </div>
                <div className={"w-full flex flex-col items-end"}>
                    <Skeleton className={"bg-gray-500/70 w-28 h-12"}/>
                </div>
            </div>
        </div>
    )
}