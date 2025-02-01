import { groq } from "next-sanity";

export const HOME_QUERY = groq`{
  "nav": *[_type == "profile"][0]{
    "resume": resume.asset -> url,
  },
  "hero": *[_type == "profile"][0]{
    name,
    "image": image.asset->url,
    "intro": intro[0],
    "about": bio[0],
  },
  "skills": *[_type == "skill"]{
    skill,
    "slug": slug.current,
    "image": image.asset->url
  },
  "timeline": *[_type == "timeline"] | order( startdate asc ){
    title,
    "slug": slug.current,
    organisation,
    description,
    startdate,
    enddate,
  },
  "projects": * [_type == "project" && featured == true] | order( publishedAt desc ) {
    _id,
    title,
    context,
    "slug": slug.current,
    "image": mainImage.asset -> url,
    featured,
    topics[] -> { _id, title },
    publishedAt,
    links,
    body
  },
  "certifications": *[_type == "certification" && featured == true] {
    title,
    "slug": slug.current,
    "certificate": certificate.asset->url,
  },
  "contact": *[_type == "profile"][0] {
    email,
    mobile,
    "resume": resume.asset -> url,
    socials[] -> { _id, title, link }
  }
}`