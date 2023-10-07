import banner from "../../assets/image/banner.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:`url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-secondary_color bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="" data-aos="zoom-in">
            <h1 className="mb-5 text-5xl  text-white_color font-bold">Welcome to</h1>
            <h1 className="mb-5 text-7xl font-roboto font-bold text-primary_color">FM Management</h1>
            <p className="mb-5 max-w-2xl font-roboto text-white_color mx-auto">
            Elevate your corporate events to new heights with us! At FM Management, we specialize in crafting unforgettable experiences that leave a lasting impression. From meticulously planned conferences to dazzling product launches and everything in between, our expert team is here to turn your vision into reality. Explore our comprehensive event management services and discover how we can make your next corporate event truly exceptional.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
