import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BookingCard = ({ data }) => {
  return (
    <div className="bg-secondary_color py-8" data-aos="flip-up">
      <div className="max-w-6xl mx-auto">
        <div className="border-2 bg-bg_nav_footer  border-card rounded-lg shadow">
          <div className="">
            <img
              src={data?.image}
              alt=""
              className="rounded-t-lg h-72 w-full"
            />
          </div>
          <div className="p-5">
            <h1 className="mb-2 text-2xl font-roboto font-bold tracking-tight text-card">
              {data.event_name}
            </h1>
            <p className="mb-3 text-white_color font-normal font-roboto">
              {data.description}
            </p>
            <Link
              to={`/details/${data.id}`}
              className="btn bg-primary_color hover:text-primary_color text-secondary_color font-roboto font-medium"
            >
              <AiOutlineArrowRight></AiOutlineArrowRight>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BookingCard.propTypes = {
  data: PropTypes.object,
};

export default BookingCard;
