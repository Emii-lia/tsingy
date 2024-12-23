import {A11y, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image, {StaticImageData} from "next/image";

export default function WonderCardSlide({top}: Readonly<{ top: StaticImageData[] }>){
    return(
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
        >
            {
                top.map((subTop,index) => (
                    <SwiperSlide key={index} style={{display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:20}}>
                        <Image src={subTop} alt={subTop.src} className={"object-cover"}/>
                    </SwiperSlide>
                ))

            }
        </Swiper>
    )
}