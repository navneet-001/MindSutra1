import { testimonials } from "../../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5 p-5 overflow-hidden">
      <div
        data-aos="zoom-out"
        className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-100"
      >
        What <span className="text-bright-sun-400">User</span> says about us?
      </div>

      <div className="flex justify-evenly gap-5 md-mx:flex-wrap mt-10">
        {testimonials.map((data, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="flex flex-col gap-3 w-[23%] md-mx:w-[48%] xs-mx:w-full border border-bright-sun-400 p-3 rounded-xl"
          >
            <div className="flex gap-3 items-center">
              

              <div>
                <div className="text-lg sm-mx:text-base xs-mx:text-sm text-mine-shaft-100 font-semibold">
                  {data.name}
                </div>

                <div className="text-sm text-yellow-400">
                  {"★".repeat(data.rating)}
                  {"☆".repeat(5 - data.rating)}
                </div>
              </div>
            </div>

            <div className="text-xs text-mine-shaft-300">
              {data.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
