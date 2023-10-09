import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
AOS.init();

const OurService = ({ oneData }) => {
  const { id, image, description, event_name } = oneData;

  return (
    <div data-aos="zoom-in">
      <div>
        <div className="border-2 bg-bg_nav_footer border-card rounded-lg shadow">
          <div className="">
            <img src={image} alt="" className="rounded-t-lg h-72 w-full" />
          </div>
          <div className="p-5">
              <h1 className="mb-2 text-2xl font-roboto font-bold tracking-tight text-card">
                {event_name}
              </h1>
            <p className="mb-3 text-white_color font-normal font-roboto">
              {description}
            </p>
            <Link to={`/details/${id}`} 
            className="btn bg-primary_color hover:text-primary_color text-secondary_color font-roboto font-medium">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

OurService.propTypes = {
  oneData: PropTypes.object,
};

export default OurService;
