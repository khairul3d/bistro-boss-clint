import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import TaitelHading from '../../../Components/Taitel/TaitelHading';

const Swaiper = () => {
    return (
     <section>
     <TaitelHading
     subTitel={"From 11.00Am to 10.00Pm "}
     hadding={"Order Online"}
     ></TaitelHading>
     
     <h1>{""}</h1>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h2 className=' text-4xl ml-12 -mt-12 uppercase text-white'>salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" />
        <h2 className=' text-4xl ml-12 -mt-12 uppercase text-white'>pizza</h2>

        </SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" />
        <h2 className=' text-4xl ml-12 -mt-12 uppercase text-white'>soups</h2>

        </SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" />
        <h2 className=' text-4xl ml-12 -mt-12 uppercase text-white'>desserts</h2>

        </SwiperSlide>
        <SwiperSlide><img src={slider5} alt="" />
        <h2 className=' text-4xl ml-12 -mt-12 uppercase text-white'>salads</h2>

        </SwiperSlide>
        
      </Swiper>
     </section>
    );
};

export default Swaiper;