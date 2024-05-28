import TaitelHading from "../../../../Components/Taitel/TaitelHading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";

const Tastimonials = () => {
    const [revews, setRevews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/revew')
            .then(res => res.json())
            .then(data => setRevews(data))
    }, [])
    return (
        <section>
            <TaitelHading
                subTitel={'What Our Client Say'}
                hadding={'Testimonials'}
            ></TaitelHading>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    revews.map(revew => <SwiperSlide
                        key={revew._id}
                    >
                        <div className=" m-24 flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={revew.rating}
                                readOnly
                            />
                            <p className=" py-4">{revew.details}</p>
                            <h1 className="text-2xl font-medium">{revew.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Tastimonials;