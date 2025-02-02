import React from 'react'

import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectBlog from '@/components/Projects/ProjectBlog'

import { getClient } from '@/sanity/lib/client';
import { PROJECT_QUERY, ALL_PROJECTS_SLUG } from '@/sanity/lib/queries';

async function getData(slug) {

  const client = getClient();
  const data = await client.fetch(PROJECT_QUERY, {slug});
  return data;
}

export async function generateStaticParams() {
  const client = getClient();
  const slugs = await client.fetch(ALL_PROJECTS_SLUG);
  
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

type Props = {
  params: {
    slug: string
  }
}

export default async function Project({params: {slug}}: Props){
  const data = await getData(slug);

  return (
    <section className='bg-white min-h-screen text-black'>
      <Nav data={data.nav} />
      <ProjectBlog project={data.project} />
      <Contact data={data.contact} />
    </section>
  )
}