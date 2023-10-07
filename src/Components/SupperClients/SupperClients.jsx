import { useEffect, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import SwiperBtn from "./SwiperBtn";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SupperClients = () => {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    fetch("/clientsData.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, A11y]}
        
        loop={true}
        breakpoints={{
            570: {slidesPerView: 1, spaceBetween: 50},
            768: {slidesPerView: 1, spaceBetween: 10},
            1152: {slidesPerView: 3, spaceBetween: 50}
        }}
      >
        {data?.map((oneData) => (
          <SwiperSlide key={oneData.id} classNameName="p-2">
            <Link classNameName="rounded-2xl relative">

              <div className="relative flex md:w-96 flex-col rounded-xl bg-bg_nav_footer bg-clip-border text-primary_color shadow-md hover:scale-[1.05] transition 1s">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl shadow-lg">
                  <img src={oneData?.photo} className="h-full w-full"/>
                </div>
                <div className="p-6 text-center">
                  <h4 className="mb-2 block font-roboto text-3xl font-semibold leading-snug tracking-normal antialiased">
                    {oneData?.name}
                  </h4>
                  <div className="block text-xl font-roboto text-white_color font-medium leading-relaxed antialiased">
                    <p className="text-base text-card">Company Name :</p>
                   <a href="#">{oneData?.company}</a>
                  </div>
                </div>
                <div className="flex justify-center gap-7 p-6 pt-2">
                  <a
                    href="#facebook"
                    className="block text-xl font-normal leading-relaxed text-white_color">
                    <FaFacebook></FaFacebook>
                  </a>
                  <a
                    href="#twitter"
                    className="block text-xl font-normal leading-relaxed text-white_color"
                  >
                    <FaTwitter></FaTwitter>
                  </a>
                  <a
                    href="#instagram"
                    className="block text-xl font-normal leading-relaxed text-white_color"
                  >
                    <FaInstagram></FaInstagram>
                  </a>
                </div>
              </div>
              
            </Link>
          </SwiperSlide>
        ))}
        <SwiperBtn></SwiperBtn>
      </Swiper>
    </div>
  );
};

export default SupperClients;
