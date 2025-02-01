import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {

  const timelineData = [
  {
    title: "Bachelor of Technology",
    company: "CMR Enginerring College",
    date: "Aug 2017 – July 2021",
    description: "GPA 3.3 | Computer Science and Engineering.",
  },
  {
    title: "Associate Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    date: "Aug 2021 – Dec 2021",
    description: "Optimized AWS costs, saving $40,000 through data analysis.",
  },
  {
    title: "Systems Engineer",
    company: "Tata Consultancy Services (TCS)",
    date: "Jan 2022 – Dec 2022",
    description: "Developed a data integration framework using PL/SQL & Informatica.",
  },
  {
    title: "Data Analyst",
    company: "Tata Consultancy Services (TCS)",
    date: "Jan 2023 – Jul 2023",
    description: "Automated financial workflows, reducing processing time by 90%.",
  },
  {
    title: "Master of Data Science",
    company: "University of Alabama at Birmingham",
    date: "Aug 2023 – May 2025",
    description: "GPA 3.5 | Advanced coursework in Data Analytics, Machine Learning, and AI.",
  },
];


  return (
    <div className="relative overflow-hidden text-gray-900 p-4 px-6 py-12 items-center bg-gray-100">
      <h2 className="text-gray-900 text-2xl md:text-4xl font-serif font-bold uppercase tracking-widest mb-8 w-full text-center">My Journey</h2>
      
      <div className="relative flex w-full overflow-x-auto scrollbar-hide py-2">
        <div className="flex space-x-20 px-10">
          {timelineData.map((event, index) => (
              <div key={index} className="relative flex items-center">
              {/* Timeline Box */}
                <div key={index} className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-lg">{event.company}</p>
                  <p className="text-xs md:text-sm text-gray-500">{event.date}</p>
                  <p className="mt-2 text-sm md:text-lg">{event.description}</p>
                  
                </div>

                {index !== timelineData.length - 1 && ( 
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
