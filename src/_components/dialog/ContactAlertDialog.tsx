import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {useTranslations} from "next-intl";
import React from "react";
import {SendIcon} from "lucide-react";

export function ContactAlertDialog({handleSubmit}: Readonly<{
    handleSubmit: () => Promise<void>
}>) {
    const t = useTranslations("Contact.alert.submit")
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button type={"button"} size={"lg"} className={"text-lg flex flex-row gap-4"}>
                    <span>
                        <SendIcon size={20}/>
                    </span>
                    <span>
                        {t("submit")}
                    </span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className={"max-md:w-[320px] max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-[80%] max-md:-translate-y-1/2"}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{t("title")}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {t("description")}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className={"flex max-md:flex-col max-md:gap-1"}>
                    <AlertDialogAction onClick={()=>handleSubmit()}>{t("yes")}</AlertDialogAction>
                    <AlertDialogCancel>{t("no")}</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
