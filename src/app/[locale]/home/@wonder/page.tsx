"use client"
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import SectionTitle from "@/_components/typography/SectionTitle";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {WonderCard} from "@/_components/card/WonderCard";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {LandscapeDto} from "@/_type/landscape.dto";
import {useFetchLandscape} from "@/hooks/landscape.hooks";
import CardType2Sk from "@/_components/skeleton/card/CardType2Sk";

export default function Wonder({params:{locale}}: Readonly<{ params: { locale: string } }>) {
    const [landscapes, setLandscapes] = useState<LandscapeDto[]>()
    const t = useTranslations("Wonder")
    const {data, isSuccess, isLoading} = useFetchLandscape()

    if (isSuccess){
        console.log(data?.data)
    }
    useEffect(()=>{
        setLandscapes(data?.data)
    },[isSuccess])
    return(
        <SectionWrapper id={"topAttractions"}>
            <SectionTitle>  {t("title")}</SectionTitle>
            <div className={"w-full max-h-[70vh] max-md:p-6"}>
                {
                    !isLoading ?
                        <Carousel>
                            <CarouselContent className={"p-6 max-md:p-1"}>
                                {
                                    landscapes?.map((top: LandscapeDto, index) => (
                                        <CarouselItem className={"lg:basis-1/3 sm:basis-1/2"} key={index}>
                                            <WonderCard position={[top.landscape_locationX!, top.landscape_locationY!]} title={top.landscape_name}
                                                        subtitle={top.landscape_type}
                                                        description={top.landscape_description}>
                                                <Carousel className={"w-full h-full relative"}>
                                                    <CarouselContent>
                                                        {
                                                            top.pictures?.map((subTop, index) => (
                                                                <CarouselItem key={index} className={"w-full"}>
                                                                    <Image src={subTop.picture_url}
                                                                           alt={subTop.picture_url}
                                                                           className={"object-cover h-full max-h-[300px] max-md:max-h-[250px] max-md:h-[200px] w-full rounded-t-lg"}
                                                                           width={380} height={300}/>
                                                                </CarouselItem>
                                                            ))
                                                        }
                                                    </CarouselContent>
                                                    <CarouselPrevious className={"absolute top-1/2 left-0"}/>
                                                    <CarouselNext className={"absolute top-1/2 right-0"}/>
                                                </Carousel>
                                            </WonderCard>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <CarouselPrevious className={"md:hidden"}/>
                            <CarouselNext className={"md:hidden"}/>
                        </Carousel> :
                        <div className={"flex flex-row justify-between gap-10 w-full h-full"}>
                            <CardType2Sk/>
                            <CardType2Sk/>
                            <CardType2Sk/>
                        </div>
                }
            </div>
            <span className={"h-0"} id={"activities"}></span>
        </SectionWrapper>
    )
}