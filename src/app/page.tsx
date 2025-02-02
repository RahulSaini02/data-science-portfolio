import Contact from "@/components/Contact";
// import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import TopProjects from "@/components/Home/TopProjects";
import Nav from "@/components/Nav";

import { getClient } from '@/sanity/lib/client';
import { HOME_QUERY } from '@/sanity/lib/queries';


async function getData() {
  const client = getClient();
  const data = await client.fetch(HOME_QUERY);
  return {
    props: {
      data,
    },
  };
}

export default async function Home() {
  const {props} = await getData();

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <Nav data={props.data.nav} />
      {/* Hero Section */}
      <Hero data={props.data.hero} />
      {/* Skills Carsoul */}
      <Skills data={props.data.skills} />
      {/* About */}
      {/* <About data={props.data.timeline} /> */}
      {/* Projects */}
      <TopProjects data={props.data.projects} />
      {/* Certifications */}
      <Certifications data={props.data.certifications} />
      {/* Contact */}
      <Contact data={props.data.contact} />
    </div>
  );
}
