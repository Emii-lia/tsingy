"use client"
import { navLinks} from "@/_constant/nav.links";
import {Skeleton} from "@/components/ui/skeleton";

export const NavbarSk = () => {
    return(
        <nav className={`flex flex-row max-md:px-5 max-xl:px-10 max-md:w-screen max-md:py-3 max-md:h-24 fixed justify-between w-full px-20 py-5 top-0 z-50`}>
            <div className="flex flex-row space-x-3 w-1/5 items-center">
                <Skeleton className={" bg-gray-500/70 w-[56px] h-[56px] max-md:w-10 max-md:h-10 rounded-lg"}/>
                <Skeleton className={" bg-gray-500/70 w-28 h-4"}/>
            </div>
            <div className="flex flex-row items-center justify-between w-3/5 max-xl:w-1/5 max-lg:hidden">
                {
                    navLinks.map((_, index:number)=>(
                        <Skeleton className={" bg-gray-500/70 h-4 w-24"} key={index}/>
                    ))
                }
            </div>
            <div className={"flex flex-row items-center justify-end"}>
                <Skeleton className={" bg-gray-500/70 w-8 h-4"}/>
                <div className={"lg:hidden flex flex-col justify-center items-end"}>
                    <Skeleton className={" bg-gray-500/70 w-6 h-6"}/>
                </div>
            </div>
        </nav>
    )
}