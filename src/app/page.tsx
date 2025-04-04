import Contact from "@/components/Contact";
// import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import TopProjects from "@/components/Home/TopProjects";
import Nav from "@/components/Nav";

import { getClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

async function getData() {
  const client = getClient();
  const data = await client.fetch(HOME_QUERY);
  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <Nav data={data.nav} />
      {/* Hero Section */}
      <Hero data={data.hero} />
      {/* Skills Carsoul */}
      <Skills data={data.skills} />
      {/* About */}
      {/* <About data={data.timeline} /> */}
      {/* Projects */}
      <TopProjects data={data.projects} />
      {/* Certifications */}
      <Certifications data={data.certifications} />
      {/* Contact */}
      <Contact data={data.contact} />
    </div>
  );
}
