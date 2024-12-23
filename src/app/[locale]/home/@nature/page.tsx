"use client"
import SectionWrapper from "@/_components/wrapper/SectionWrapper";
import SectionTitle from "@/_components/typography/SectionTitle";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import NatureCard from "@/_components/card/NatureCard";
import Image from "next/image";
import {useEffect, useState} from "react";
import {SpeciesDto} from "@/_type/species.dto";
import {useFetchSpecies} from "@/hooks/species.hooks";
import CardType2Sk from "@/_components/skeleton/card/CardType2Sk";

export default function Nature({params:{locale}}: Readonly<{ params: { locale: string } }>){
    const [natures, setNatures] = useState<SpeciesDto[]>()
    const {data, isSuccess, isLoading} = useFetchSpecies()
    if (isSuccess) console.log(data)
    useEffect(()=>{
        setNatures(data?.data)
    },[isSuccess])
    return(
        <SectionWrapper>
            <SectionTitle id={"todo"}>Nature</SectionTitle>
            <div className={"max-md:p-6"}>
                {
                    !isLoading?
                    <Carousel className={"w-full h-full relative"}>
                        <CarouselContent className={"p-6 max-md:p-1"}>
                            {
                                natures?.map((nature: SpeciesDto, index:number) => (
                                    <CarouselItem className={"xl:basis-1/3 md:basis-1/2"} key={index}>
                                        <NatureCard id={nature.pictures?.length!=0?nature.pictures![0].picture_title:""} title={nature.specie_name} type={nature.specie_type} description={nature.specie_description}>
                                            <Image src={nature.pictures? nature.pictures[0].picture_url:""} alt={nature.pictures? nature.pictures[0].picture_title:""} className={"object-cover w-full h-full max-h-[300px] max-md:max-h-[500px] rounded-t-lg"} width={380} height={300}/>
                                        </NatureCard>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious className={natures?.length!>3?"":"hidden"}/>
                        <CarouselNext className={natures?.length!>3?"":"hidden"}/>
                    </Carousel>:
                    <div className={"flex flex-row justify-between gap-10 w-full h-full"}>
                        <CardType2Sk/>
                        <CardType2Sk/>
                        <CardType2Sk/>
                    </div>
                }
            </div>
            <span className={"h-0"} id={"topAttractions"}></span>
        </SectionWrapper>
    )
}