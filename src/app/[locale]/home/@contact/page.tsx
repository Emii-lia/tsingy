"use client"
import {Input} from "@/components/ui/input";
import {useTranslations} from "next-intl";
import {ChangeEvent, useEffect, useState} from "react";
import {ContactDto} from "@/_type/contact.dto";
import {useSubmitContact} from "@/hooks/contact.hooks";
import {toast} from "@/components/ui/use-toast";
import {ContactAlertDialog} from "@/_components/dialog/ContactAlertDialog";

export default function Contact() {
    const t = useTranslations("Contact")
    const [userEmail, setUserEmail] = useState<string>()
    const [content, setContent] = useState<string>()
    const {mutate:submitContact, isSuccess, isError} = useSubmitContact()
    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }
    const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const handleSubmit = async ()=>{
        const contact:ContactDto = {
            user_email:userEmail!,
            contact_content:content!
        }
        submitContact(contact)
        setContent("")
        setUserEmail("")
    }
    useEffect(() => {
        if (isSuccess){
            toast({
                description: "We received your message. You will receive an answer as soon as possible.",
                className: "bg-secondary text-white text-xl font-semibold",
            })
        }
        if (isError){
            toast({
                description: "Failed to submit your message.",
                variant: "destructive",
                className:"text-xl"
            })
        }
    }, [isError, isSuccess]);
    return(
       <div className={"contact w-full h-[50vh] max-h-[60vh] p-0"}>
           <div className={"w-full h-full flex flex-row justify-between items-center p-7 max-md:p-4 backdrop-brightness-75"}>
               <h1 className={"text-7xl font-semibold text-white flex flex-col space-y-4 max-md:hidden max-xl:text-6xl max-lg:text-5xl"}>
                   <span>
                       {t("wonder")}<br/>
                   </span>
                   <span>
                       {`${t("of")} Madagascar`}
                   </span>
               </h1>
               <form className={"w-1/3 max-md:w-full max-lg:w-1/2 rounded-lg bg-gray-50 shadow-md border-[1px] border-gray-300/40 p-5 flex flex-col gap-4"}>
                   <div className={"py-3 flex flex-col gap-2"}>
                       <h1 className={"text-gray-800/80 text-xl font-semibold"}>{t("title")}</h1>
                       <p className={"text-gray-800/70 text-sm"}>{t("description")}</p>
                   </div>
                   <div className={"flex flex-col gap-3 relative"}>
                       <Input name={"email"} placeholder={t("email_pl")} value={userEmail} onChange={handleEmailChange}/>
                       <textarea name={"content"} placeholder={t("content_pl")} value={content} onChange={handleContentChange}
                                 className={"flex h-44 max-md:h-32 max-h-52 min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}/>
                   </div>
                   <div className={"w-full flex flex-col items-end"}>
                       <ContactAlertDialog handleSubmit={handleSubmit}/>
                       <span className={"h-0"} id={"feedback"}></span>
                   </div>
               </form>
           </div>
       </div>
    )
}