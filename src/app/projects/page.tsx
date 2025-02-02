import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";

import { getClient } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';

async function getData() {
  const client = getClient();
  const data = await client.fetch(PROJECTS_QUERY);
  return {
    props: {
      data,
    },
  };
}

export default async function Projects() {

  const {props} = await getData();

  return (
    <div className="bg-white min-h-screen text-black">
      <div className="relative w-full h-[250px] lg:h-[350px] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Banner/banner-1.jpg')" }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full text-center text-white">
        <Nav data={props.data.nav} />
        <div className="mt-8 md:mt-12 lg:mt-20 font-serif">
          <h1 className="text-2xl md:text-5xl font-bold">Where Ideas Come to Life</h1> 
          {/* */}
          <p className="text-lg md:text-xl mt-2">A collection of projects 🚀</p>
        </div>
      </div>
    </div>      
      {/* Projects Grid */}
      <ProjectsGrid projects={props.data.projects} />
      {/* Contact */}
      <Contact data={props.data.contact} />
    </div>
  );
}
