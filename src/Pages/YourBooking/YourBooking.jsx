import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingCard from "../../Components/BookingCard/BookingCard";

const YourBooking = () => {

  const allData = useLoaderData();
  const [bookingData, setBookingData] = useState([]);
  

  useEffect(()=>{
    const getStore = localStorage.getItem("booking");

    if(getStore?.length > 0){
      const bookingList = allData.filter(data => getStore.includes(data.id));
      setBookingData(bookingList)
    }
  },[allData])

  const handleDelete = () =>{
    localStorage.clear("booking")
    setBookingData([ ])
  }

  return (
    <div className="bg-secondary_color py-4">
      <div className="max-w-6xl mx-auto text-center min-h-screen">
        <h1 className="text-4xl font-roboto font-bold text-card">
          Your booking
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {  
                bookingData?.map(data => <BookingCard key={data.id} data={data}></BookingCard>)
            }
        </div>
        {
          bookingData.length == 0? <p className="mt-5 font-roboto text-white_color text-2xl">empty booking</p> :
          <div onClick={handleDelete}
        className="btn bg-primary_color hover:text-primary_color text-secondary_color font-roboto font-medium">Delete all Booking</div>
        }
      </div>
    </div>
  );
};

export default YourBooking;
