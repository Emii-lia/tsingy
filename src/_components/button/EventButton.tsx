import {Button} from "@/components/ui/button";
import {StarIcon, StarOff} from "lucide-react";
import React from "react";

type EventButtonProps = {
    onClick:() => void
    label:string
    interested:boolean
}
export default function EventButton({onClick, label, interested}: Readonly<EventButtonProps>) {
    return(
        <Button type="button" size={"lg"} onClick={onClick} variant={"outline"} className={"flex flex-row space-x-3"}>
            <span>
                {
                    interested?
                        <StarIcon className={"text-card"}/>:
                        <StarOff/>
                }
            </span>
            <span className={"text-lg"}>{label}</span>
        </Button>
    )
}