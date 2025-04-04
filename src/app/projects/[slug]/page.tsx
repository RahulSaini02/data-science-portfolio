import React from "react";

import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectBlog from "@/components/Projects/ProjectBlog";

import { getClient } from "@/sanity/lib/client";
import { PROJECT_QUERY, ALL_PROJECTS_SLUG } from "@/sanity/lib/queries";

export const revalidate = 3600;

async function getData(slug) {
  const client = getClient();
  const data = await client.fetch(PROJECT_QUERY, { slug });
  return data;
}

// Fetch all project slugs at build time
export async function generateStaticParams() {
  const client = getClient();
  const slugs = await client.fetch(ALL_PROJECTS_SLUG);

  // Generate paths based on slugs
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getData(slug);
  return (
    <section className="bg-white min-h-screen text-black">
      <Nav data={data.nav} />
      <ProjectBlog project={data.project} />
      <Contact data={data.contact} />
    </section>
  );
}
