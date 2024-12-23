"use client"
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import SectionTitle from "@/_components/typography/SectionTitle";
import {useTranslations} from "next-intl";
import FeedbackComment from "@/_components/card/FeedbackComment";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import Autoplay from "embla-carousel-autoplay";
import {Input} from "@/components/ui/input";
import sticker from '../../../../assets/binoculars.png'
import Image from "next/image";
import {FileInput} from "@/_components/form/file.input";
import {FeedbackDto} from "@/_type/feedback.dto";
import {useFetchFeedback, useSubmitFeedback} from "@/hooks/feedback.hooks";
import {useToast} from "@/components/ui/use-toast";
import {FeedbackAlertDialog} from "@/_components/dialog/FeedbackAlertDialog";
import {Skeleton} from "@/components/ui/skeleton";

export default function Feedback() {
    const t = useTranslations("Feedback");
    const {toast} = useToast()
    const [feedbacks, setFeedbacks] = useState<FeedbackDto[]>()
    const {data, isSuccess, isLoading} = useFetchFeedback()
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )
    const [files, setFiles] = useState<File[]>([]);
    const [email, setEmail] = useState<string>();
    const [content, setContent] = useState<string>();
    const {mutate:submitFeedback, isSuccess: isSubSuccess, isError:isSubError} = useSubmitFeedback()

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) =>{
        setContent(e.target.value)
    }
    const handleSubmit = async ()=>{
        const feedback = new FormData()
        feedback.append("feedback_sender", email!)
        feedback.append("feedback_content", content!)
        for (const file of files){
            feedback.append("pictures", file)
        }
        submitFeedback(feedback)
        setContent("")
        setEmail("")
        setFiles([])
    }
    useEffect(() => {
        if (isSubSuccess){
            toast({
                description: "Feedback submitted successfully. Waiting to be approved.",
                className: "bg-secondary text-white text-xl font-semibold",
            })
        }
        if (isSubError){
            toast({
                description: "Failed to submit feedback.",
                variant: "destructive"
            })
        }
    }, [isSubError, isSubSuccess, toast]);
    const handleFileChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setFiles([...files,...Array.from(e.target.files!)])
    }
    const removeFile = (index:number)=>{
        setFiles(files.filter((_,i)=> i !== index))
    }
    useEffect(()=>{
        setFeedbacks(data?.data)
    },[data, isSuccess])
    return(
        <SectionWrapper id={"feedback"}>
            <SectionTitle>{t("title")}</SectionTitle>
            <div className={"flex flex-col gap-12 w-full max-md:gap-8"}>
                {
                    !isLoading ?
                        <Carousel
                            plugins={[plugin.current]}
                            className={"w-full h-full p-6 max-md:p-0"}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent className={"p-6 max-md:p-1 w-full"}>
                                {
                                    feedbacks?.map((feedback: FeedbackDto, index) => (
                                        <CarouselItem className={"2xl:basis-1/3 lg:basis-1/2"} key={index}>
                                            <FeedbackComment user={feedback.feedback_sender}
                                                             createdAt={feedback.feedback_date}
                                                             content={feedback.feedback_content} key={index}
                                                             images={feedback.pictures!}/>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <CarouselPrevious className={"max-md:hidden"}/>
                            <CarouselNext className={"max-md:hidden"}/>
                        </Carousel> :
                        <div className={"flex flex-row justify-between gap-10 w-full h-full"}>
                            <Skeleton className={"w-full h-[200px] bg-gray-500/70"}/>
                            <Skeleton className={"w-full h-[200px] bg-gray-500/70"}/>
                            <Skeleton className={"w-full h-[200px] bg-gray-500/70"}/>
                        </div>
                }
                <div
                    className={"w-full flex flex-row justify-evenly max-lg:flex-col max-lg:gap-3 items-center max-lg:justify-start"}>
                    <Image src={sticker} alt={sticker.src} width={420} height={420} className={"max-md:w-48 max-md:h-48 max-xl:w-72 max-xl:h-72"}/>
                    <form className={"w-1/2 max-xl:w-3/4 max-lg:w-full rounded-lg bg-gray-50 shadow-md border-[1px] border-gray-300/40 p-5 flex flex-col gap-4"}>
                        <div className={"py-3 flex flex-col gap-2"}>
                            <h1 className={"text-gray-800/80 text-xl font-semibold"}>{t("form.title")}</h1>
                            <p className={"text-gray-800/70 text-sm"}>{t("form.description")}</p>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <Input value={email} name={"email"} placeholder={t("form.email_pl")} onChange={handleEmailChange}/>
                            <textarea value={content} onChange={handleContentChange} name={"content"} placeholder={t("form.content_pl")} className={"flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}/>
                            <FileInput previewed={"before"} handleFileChange={handleFileChange} removeFile={(removeFile)} files={files}/>
                        </div>
                        <div className={"w-full flex flex-col items-end"}>
                            <FeedbackAlertDialog handleSubmit={handleSubmit}/>
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    )
}