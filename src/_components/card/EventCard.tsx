"use client"
import {IEventCard} from "@/_type/data.display";
import {NotifyEmailDialog} from "@/_components/dialog/EventDialog";
import {Badge} from "@/components/ui/badge";
import {DatePickerRange} from "@/_components/calendaar/DatePickerRange";

export default function EventCard({description, name, endDate, startDate, tags, event_id}: Readonly<IEventCard>) {
    return (
        <div className={"shadow-md rounded-lg w-full max-h-[600px] h-full flex flex-col justify-between gap-5 p-6 bg-accent max-md:p-3 max-md:gap-3"}>
            <div className={"flex flex-col space-y-2"}>
                <h2 className={"text-gray-800/80 font-semibold text-lg"}>{name}</h2>
                <DatePickerRange startDate={startDate} endDate={endDate} disabled/>
            </div>
            <div>
                <p className={"text-gray-800 max-md:text-sm"}>
                    {description}
                </p>
            </div>
            <div className={"md:space-x-3 lg:space-x-1"}>
                {
                    tags.map((tag,index) =>(
                        <Badge variant={"outline"} key={index}>
                            {tag.tag_name}
                        </Badge>
                    ))
                }
            </div>
            <div className={"w-full flex flex-col items-end"}>
                <NotifyEmailDialog event_id={event_id} />
            </div>
        </div>
    )
}