import {Skeleton} from "@/components/ui/skeleton";
export default function SectionTitleSk() {
    return(
        <div className={"w-full flex flex-row justify-center items-center"}>
            <Skeleton className={"bg-gray-500/70 w-64 h-6"}/>
        </div>
    )
}