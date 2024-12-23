"use client"
import SectionTitle from "@/_components/typography/SectionTitle";
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import {useTranslations} from "next-intl";
import EventCard from "@/_components/card/EventCard";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {useEffect, useState} from "react";
import {EventDto} from "@/_type/event.dto";
import {useFetchEvents} from "@/hooks/event.hooks";
import CardType1Sk from "@/_components/skeleton/card/CardType1Sk";

export default function Event() {
    const t = useTranslations("Event")
    const [events, setEvents] = useState<EventDto[]>()
    const {data, isSuccess, isLoading, isError} = useFetchEvents()
    if (isSuccess) {console.log(data?.data)}
    useEffect(() => {
        setEvents(data?.data)
    }, [data, isSuccess]);
    return(
        <>
            {
                isError?
                <div>

                </div>:
                <SectionWrapper>
                    <SectionTitle>{t("title")}</SectionTitle>
                    <div className={"max-md:p-6"}>
                        {
                            !isLoading?
                            <Carousel className={"w-full h-full relative"}>
                                <CarouselContent className={"p-6 max-md:p-1"}>
                                    {
                                        events?.map((event: EventDto, index) => (
                                            <CarouselItem className={"xl:basis-1/3 md:basis-1/2"} key={index}>
                                                <EventCard event_id={event.event_id} name={event.event_name} description={event.event_description}
                                                           startDate={event.event_start_date} endDate={event.event_end_date} tags={event.tags}
                                                           />
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                                <CarouselPrevious className={events?.length!>3?"":"hidden"}/>
                                <CarouselNext className={events?.length!>3?"":"hidden"}/>
                            </Carousel>:
                            <div className={"flex flex-row gap-10 w-full h-full justify-center"}>
                                <CardType1Sk/>
                                <CardType1Sk/>
                                <CardType1Sk/>
                            </div>
                        }
                    </div>
                    <span className={"h-0"} id={"nature"}></span>
                </SectionWrapper>
            }
        </>
    )
}