import Swal from "sweetalert2";

const Special = () => {

    const handleBtn = (name) =>{
        Swal.fire(
            "successfully Enter",
            `Welcome to our ${name} membership team`,
            "success"
            );
    }

  return (
    <div className="bg-secondary_color py-10">
      <div className="max-w-6xl mx-auto ">
        <div className=" mb-5">
          <h1 className="font-roboto text-card font-bold text-4xl text-center">
            Our Membership System
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-evenly">

          <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl p-8 shadow-md shadow-card">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-roboto font-bold text-2xl uppercase text-primary_color antialiased">
                Gold
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-roboto text-7xl text-card">
                <span className="mt-2 text-4xl">$</span>29
                <span className="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div className="p-0 text-white_color">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    5 team members
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    200+ components
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    40+ built-in pages
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    1 year free updates
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={()=>handleBtn("GOLD")}
                className="block w-full select-none rounded-lg bg-primary_color py-3 px-7 text-center align-middle font-roboto text-sm font-bold uppercase text-secondary_color shadow-md transition-all hover:scale-[1.02]"
                type="button"
                data-ripple-dark="true"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl p-8 shadow-md shadow-card">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-roboto font-bold text-2xl uppercase text-primary_color antialiased">
                Platinum
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-roboto text-7xl text-card">
                <span className="mt-2 text-4xl">$</span>50
                <span className="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div className="p-0 text-white_color">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    5 team members
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    200+ components
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    40+ built-in pages
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    1 year free updates
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={()=> handleBtn("PLATINUM")}
                className="block w-full select-none rounded-lg bg-primary_color py-3 px-7 text-center align-middle font-roboto text-sm font-bold uppercase text-secondary_color shadow-md transition-all hover:scale-[1.02]"
                type="button"
                data-ripple-dark="true"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl p-8 shadow-md shadow-card">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-roboto font-bold text-2xl uppercase text-primary_color antialiased">
                Diamond
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-roboto text-7xl text-card">
                <span className="mt-2 text-4xl">$</span>80
                <span className="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div className="p-0 text-white_color">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    5 team members
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    200+ components
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    40+ built-in pages
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    1 year free updates
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                  </span>
                  <p className="block font-roboto text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
              <button
              onClick={()=> handleBtn("DIAMOND")}
                className="block w-full select-none rounded-lg bg-primary_color py-3 px-7 text-center align-middle font-roboto text-sm font-bold uppercase text-secondary_color shadow-md transition-all hover:scale-[1.02]"
                type="button"
                data-ripple-dark="true"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
