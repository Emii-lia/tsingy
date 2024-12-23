import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ImageIcon } from "lucide-react";
import React from "react";
import UserAvatar from "@/_components/avatar/UserAvatar";
import {IFeedbackDialog} from "@/_type/data.display";
import {formatDistanceToNow} from "date-fns";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";


export function CommentDialog({user, content, createdAt, images}: Readonly<IFeedbackDialog>) {
    const relativeDate = formatDistanceToNow(createdAt)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" size={"icon"} variant={"ghost"} className={"h-8 w-8"}>
                    <ImageIcon size={24} className={"max-md:text-sm text-gray-800/75"}/>
                </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[650px] max-md:w-[320px] max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-[50%] max-md:-translate-y-1/2">
                <DialogHeader>
                    <DialogTitle>
                        <div className={"flex flex-row space-x-4 items-center max-md:space-x-1"}>
                            <div>
                                <UserAvatar src={null} name={user}/>
                            </div>
                            <div className={"flex flex-col space-y-1 justify-center"}>
                                <h1 className={"text-lg max-md:text-base max-sm:text-sm w-full font-semibold text-gray-800/80"}>{user}</h1>
                                <h3 className={"text-gray-800/70 text-sm max-md:text-xs max-md:text-left"}>{relativeDate}</h3>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogDescription className={""}>
                        <ScrollArea className={"h-11/12 p-2"}>
                            <div className={""}>
                                <p className={"text-gray-800/80 max-md:text-sm max-md:text-left"}>{content}</p>
                            </div>
                        </ScrollArea>
                    </DialogDescription>
                </DialogHeader>
                <Carousel className={"w-full h-full relative"}>
                    <CarouselContent>
                        {
                            images?.map((image, index) => (
                                <CarouselItem key={index} className={"w-full"}>
                                    <img src={image.picture_url} alt={image.picture_title}
                                           className={"object-cover w-full h-full max-h-[250px] max-md:max-h-[400px] rounded-t-lg"}/>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className={`absolute top-1/2 left-0 ${images?.length!>1?"":"hidden"}`}/>
                    <CarouselNext className={`absolute top-1/2 right-0 ${images?.length!>1?"":"hidden"}`}/>
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}
