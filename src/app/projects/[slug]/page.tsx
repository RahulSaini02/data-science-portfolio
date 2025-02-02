import React from 'react'

import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectBlog from '@/components/Projects/ProjectBlog'

import { getClient } from '@/sanity/lib/client';
import { PROJECT_QUERY } from '@/sanity/lib/queries';

async function getData(slug) {

  const client = getClient();
  const data = await client.fetch(PROJECT_QUERY, {slug});

  return {
    props: {
      data
    },
  };
}

type Props = {
  params: {
    slug: string
  }
}


export default async function Project({params: {slug}}: Props){
  const {props} = await getData(slug);

  return (
    <section className='bg-white min-h-screen text-black'>
      <Nav data={props.data.nav} />
      <ProjectBlog project={props.data.project} />
      <Contact data={props.data.contact} />
    </section>
  )
}