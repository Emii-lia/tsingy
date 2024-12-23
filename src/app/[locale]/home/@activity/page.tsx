"use client"
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import SectionTitle from "@/_components/typography/SectionTitle";
import {useTranslations} from "next-intl";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import ActivityCard from "@/_components/card/ActivityCard";
import {useFetchActivity} from "@/hooks/activity.hooks";
import {useEffect, useState} from "react";
import {ActivityDto} from "@/_type/activity.dto";
import CardType1Sk from "@/_components/skeleton/card/CardType1Sk";

export default function Activity() {
    const t = useTranslations("Activity")
    const [activities, setActivities] = useState<ActivityDto[]>()
    const { data, isSuccess, isLoading } = useFetchActivity()
    if (isSuccess) {
        console.log(data)
    }
    useEffect(()=>{
        setActivities(data?.data)
    },[isSuccess])
    const display = ()=>{
        switch (activities?.length) {
            case 0:
                return "hidden"
            case 1:
                return ""
            case 2:
                return "md:basis-1/2"
            default:
                return "lg:basis-1/3 md:basis-1/2"
        }
    }
    return(
        <SectionWrapper>
            <SectionTitle>{t("title")}</SectionTitle>
            <div className={"flex flex-row gap-5 max-md:p-6"}>
                {
                    !isLoading?
                    <Carousel className={"w-full h-full"}>
                        <CarouselContent className={"p-6 max-md:p-1"}>
                            {
                                activities?.map((activity:ActivityDto , index) => (
                                    <CarouselItem className={display()} key={index}>
                                        <ActivityCard title={activity.activity_name}
                                                      description={activity.activity_description}>
                                            <Image src={activity.pictures!.length!=0?activity.pictures![0].picture_url:""} alt={activity.pictures!.length!=0?activity.pictures![0].picture_title:""}
                                                   className={"object-cover h-full max-h-full w-full rounded-xl"} width={380} height={320}/>
                                        </ActivityCard>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious className={activities?.length!<=3?"hidden":""}/>
                        <CarouselNext className={activities?.length!<=3?"hidden":""}/>
                    </Carousel>:
                    <div className={"flex flex-row gap-10 w-full h-full justify-center"}>
                        <CardType1Sk/>
                        <CardType1Sk/>
                        <CardType1Sk/>
                    </div>
                }
            </div>
            <span className={"h-0"} id={"getInTouch"}></span>
            <span className={"h-0"} id={"contact"}></span>
        </SectionWrapper>
    )
}