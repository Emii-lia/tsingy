"use client"
import UserAvatar from "@/_components/avatar/UserAvatar";
import { IFeedbackDialog} from "@/_type/data.display";
import {formatDistanceToNow} from "date-fns";
import {ScrollArea} from "@/components/ui/scroll-area";
import {CommentDialog} from "@/_components/dialog/CommentDialog";

export default function FeedbackComment({user, content, createdAt, images}: Readonly<IFeedbackDialog>) {
    const relativeDate = formatDistanceToNow(createdAt)
    return(
        <div className={"shadow-md rounded-lg w-full max-h-[250px] h-full flex flex-col gap-5 p-6 max-md:p-2 max-md:gap-3"}>
            <div className={"flex flex-row space-x-4 items-center max-md:space-x-1"}>
                <div>
                    <UserAvatar src={null} name={user}/>
                </div>
                <div className={`flex flex-col justify-center w-full ${(images!.length)>0?"space-y-0":"space-y-1"}`}>
                    <div className={"flex flex-row justify-between w-full"}>
                        <h1 className={"text-lg max-md:text-base max-sm:text-sm w-full  font-semibold text-gray-800/80"}>{user}</h1>
                        {
                            (images!.length > 0) &&
                            <CommentDialog user={user} createdAt={createdAt} content={content} images={images}/>
                        }
                    </div>
                   <h3 className={"text-gray-800/70 text-sm max-md:text-xs"}>{relativeDate}</h3>
                </div>
            </div>
            <ScrollArea className={"h-2/3 p-2"}>
                <div className={""}>
                    <p className={"text-gray-800/80 max-md:text-sm"}>{content}</p>
                </div>
            </ScrollArea>
        </div>
    )
}