import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import OurService from "../../Components/OurService/OurService";
import SupperClients from "../../Components/SupperClients/SupperClients";
import Sponsor from "../../Components/Sponsor/Sponsor";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className="bg-secondary_color py-4">
        <div className="max-w-6xl mx-3 md:mx-auto text-center">
          <h1 className="text-5xl font-roboto font-bold text-card">
            Our Services
          </h1>
          <p className="font-roboto text-white_color mb-3">We Provide the best services</p>
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

      <div className="bg-secondary_color pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-roboto font-bold text-card">
            Our Supper Clients
          </h1>
          <p className="font-roboto text-white_color mb-3">Our goal is always how to clients be happy</p>
            <div>
                <SupperClients></SupperClients>
            </div>
        </div>
      </div>

      <div className="bg-secondary_color py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-roboto font-bold text-card mb-3">
            Sponsorship
          </h1>
            <div>
                <Sponsor></Sponsor>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
