import { useEffect, useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import SwiperBtn from "./SwiperBtn";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SupperClients = () => {
  const [data, setData] = useState();

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
            1152: {slidesPerView: 3.5, spaceBetween: 50}
        }}
      >
        {data?.map((oneData) => (
          <SwiperSlide key={oneData.id} className="p-2">
            <div className="rounded-2xl relative">

              <div className="flex flex-col rounded-xl bg-bg_nav_footer text-primary_color shadow-md hover:scale-[1.05] transition 1s max-w-min px-4">

                <div className="mx-auto mt-4 h-60 w-64 overflow-hidden rounded-xl shadow-lg ">
                  <img src={oneData?.photo} className="h-60 w-64"/>
                </div>
                <div className="p-4 text-center">
                  <h4 className="mb-2 font-roboto text-2xl font-semibold ">
                    {oneData?.name}
                  </h4>
                  <div className=" text-xl font-roboto text-white_color font-medium leading-relaxed antialiased">
                    <p className="text-base text-card">Company Name :</p>
                   <a href="#">{oneData?.company}</a>
                  </div>
                </div>
                <div className="flex justify-center gap-5 pb-6">
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
              
            </div>
          </SwiperSlide>
        ))}
        <SwiperBtn></SwiperBtn>
      </Swiper>
    </div>
  );
};

export default SupperClients;
