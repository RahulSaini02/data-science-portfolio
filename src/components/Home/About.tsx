import { FaArrowRightLong } from "react-icons/fa6";

const About = ({data}) => {
  return (
    <div className="relative overflow-hidden text-gray-900 p-4 px-6 py-12 items-center bg-gray-100">
      <h2 className="text-gray-900 text-2xl md:text-4xl font-serif font-bold uppercase tracking-widest mb-8 w-full text-center">My Journey</h2>
      
      <div className="relative flex w-full overflow-x-auto scrollbar-hide py-2">
        <div className="flex space-x-20 px-10">
          {data.map((event, index) => (
              <div key={event.slug} className="relative flex items-center">
              {/* Timeline Box */}
                <div key={event.slug} className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-lg">{event.organisation}</p>
                  <p className="text-xs md:text-sm text-gray-500">{new Date(event.startdate+1).toLocaleDateString("en-US", {month: "short", year: "numeric"})} - {new Date(event.enddate).toLocaleDateString("en-US", {month: "short", year: "numeric"})}</p>
                  <p className="mt-2 text-sm md:text-lg">{event.description}</p>
                  
                </div>

                {index !== data.length - 1 && ( 
                  <div>
                    <FaArrowRightLong className="text-gray-900 text-3xl absolute right-[-50px] top-1/2 transform -translate-y-1/2" />
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
