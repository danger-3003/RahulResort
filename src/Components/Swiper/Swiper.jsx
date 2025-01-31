import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCard from "../Swiper/SwiperCard";

// import required modules
import { Pagination } from "swiper/modules";

import Room1 from "../../assets/Rooms/DeluxAC.jpg";
import Room2 from "../../assets/Rooms/DeluxRoomNAC.jpg";
import Room3 from "../../assets/Rooms/PremiumSuit.jpg";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=""
            >
                <SwiperSlide>
                    <SwiperCard
                        image={Room1}
                        link={
                            "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                        }
                        title={"DELUXE AC ROOM"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        image={Room2}
                        link={
                            "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                        }
                        title={"DELUXE AC ROOM"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard
                        image={Room2}
                        link={
                            "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                        }
                        title={"DELUXE AC ROOM"}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
