import { jobCategory } from "../../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5 overflow-hidden">

      {/* Heading */}
      <div
        data-aos="zoom-out"
        className="text-4xl text-center font-semibold md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl mb-3 text-gray-100"
      >
        Browse <span className="text-orange-400">Job</span> Category
      </div>

      {/* Sub heading */}
      <div
        data-aos="zoom-out"
        className="text-lg sm-mx:text-base xs-mx:text-sm mb-10 mx-auto text-gray-400 text-center w-1/2 sm-mx:w-11/12"
      >
        Got skills? Let's put them to work. Browse jobs that fit you and kickstart your career!
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-5">
          {
            jobCategory.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  data-aos="zoom-out"
                  className="flex flex-col items-center w-64 sm-mx:w-56 xs-mx:w-48 gap-2
                  border border-orange-400 p-5 rounded-xl
                  hover:cursor-pointer hover:shadow-lg
                  transition duration-300 ease-in-out bg-gray-900"
                >
                  <div className="p-2 bg-orange-300 rounded-full">
                    <img
                      className="h-8 w-8 sm-mx:h-6 sm-mx:w-6 xs-mx:h-4 xs-mx:w-4"
                      src={`/Category/${category.name}.png`}
                      alt={category.name}
                    />
                  </div>

                  <div className="text-gray-100 text-xl sm-mx:text-lg xs-mx:text-base font-semibold">
                    {category.name}
                  </div>

                  <div className="text-sm xs-mx:text-xs text-center text-gray-400">
                    {category.desc}
                  </div>

                  <div className="text-orange-300 text-lg sm-mx:text-base xs-mx:text-sm">
                    {category.jobs}+ new job posted
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
