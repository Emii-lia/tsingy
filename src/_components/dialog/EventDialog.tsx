import { Button } from "@/components/ui/button"
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {useTranslations} from "next-intl";
import {BellIcon} from "lucide-react";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useAddToNotifications} from "@/hooks/event.hooks";
import {AddNotificationDto} from "@/_type/event.dto";
import {toast} from "@/components/ui/use-toast";


export function NotifyEmailDialog({event_id}: Readonly<{ event_id: string }>) {
    const t = useTranslations("Event.dialog")
    const {mutate:addToNotification, isSuccess, isError} = useAddToNotifications(event_id)
    const [email, setEmail] = useState<string>("")
    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handleSubmit = ()=>{
        const notif:AddNotificationDto = {
            client_email:email!
        }
        addToNotification(notif)
        setEmail("")
    }
    useEffect(() => {
        if (isSuccess){
            toast({
                description: "You've been registered to this event and will be notified in the future.",
                className: "bg-secondary text-white text-xl font-semibold",
            })
        }
        if (isError){
            toast({
                description: "There is an error during the registration.",
                variant: "destructive",
                className:"text-xl"
            })
        }
    }, [isError, isSuccess]);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" size={"lg"} variant={"default"} className={"flex flex-row space-x-3 max-md:h-10 max-md:px-6"}>
                    <span>
                        <BellIcon size={22} className={"max-md:text-sm"}/>
                    </span>
                    <span className={"text-lg max-md:text-sm"}>{t("button.trigger.not_interested")}</span>
                </Button>

            </DialogTrigger>
            <DialogContent className="md:max-w-[425px] max-md:w-[320px] max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-[80%] max-md:-translate-y-1/2">
                <DialogHeader>
                    <DialogTitle>{t("title")}</DialogTitle>
                    <DialogDescription>
                        {t("description")}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="">
                        Email
                    </label>
                    <Input id="name" className="" type={"email"} placeholder={t("placeholder")} onChange={handleEmailChange} value={email}/>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" onClick={handleSubmit}>{t("button.save")}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
