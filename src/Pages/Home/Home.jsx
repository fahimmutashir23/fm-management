import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import OurService from "../../Components/OurService/OurService";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className="bg-secondary_color py-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-roboto font-bold text-card">
            Our Services
          </h1>
          <p className="font-roboto mb-3">We Provide the best services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {
            data.map((oneData) => (<OurService 
                key={oneData.id}
                 oneData={oneData}
                ></OurService>))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
