import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

  const data = useLoaderData();
  const paramsId = useParams();
  const [details, setDetails] = useState([]);
  

    useEffect(()=>{
        const getDetailData = data.find(item=> item?.id === parseInt(paramsId?.id))
        setDetails(getDetailData)
    }, [data, paramsId.id])

  return (
    <div className="bg-secondary_color py-10">
      <div className="card lg:card-side bg-bg_nav_footer shadow-xl max-w-6xl mx-auto">
        <div className="w-1/2">
        <figure>
          <img
            src={details.image}
            alt="Album"
            className="w-full"/>
        </figure>
        </div>

        <div className="card-body w-1/2">
          <h2 className="card-title font-roboto text-card text-3xl">{details.event_name}</h2>
          <p className="text-white_color">{details.long_description}</p>   
          <div className="card-actions justify-between">
            <h1 className="bg-primary_color font-bold p-3 rounded-md font-roboto text-secondary_color">Price: {details.price}</h1>
            <button className="btn bg-primary_color font-roboto text-secondary_color hover:text-primary_color">Buy Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;