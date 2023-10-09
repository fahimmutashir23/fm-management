
import sponsor_1 from "../../assets/image/sponsor_1.png"
import sponsor_2 from "../../assets/image/sponsor_2.png"
import sponsor_3 from "../../assets/image/sponsor_3.png"
import sponsor_4 from "../../assets/image/sponsor_4.png"
import sponsor_5 from "../../assets/image/sponsor_5.png"
import sponsor_6 from "../../assets/image/sponsor_6.png"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Sponsor = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-14 bg-bg_nav_footer rounded-2xl justify-center items-center py-5 mx-5">
                <a href="#" data-aos = "zoom-in"><img src={sponsor_1} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
                <a href="#" data-aos = "zoom-in"><img src={sponsor_2} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
                <a href="#" data-aos = "zoom-in"><img src={sponsor_3} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
                <a href="#" data-aos = "zoom-in"><img src={sponsor_4} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
                <a href="#" data-aos = "zoom-in"><img src={sponsor_5} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
                <a href="#" data-aos = "zoom-in"><img src={sponsor_6} alt="" className="w-16 md:w-24 hover:scale-[1.75] transition 1s" /></a>  
            </div>
        </div>
    );
};

export default Sponsor;