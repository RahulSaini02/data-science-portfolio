import Image from "next/image"
import Link from "next/link"
import urlFor from "@/sanity/lib/urlFor"

type ImageType = {
  value: {
    asset: { _ref: string }; // Sanity image reference
  };
};

type BlockType = {
  children?: React.ReactNode;
  node?: { _key?: string }; 
};

type LinkType = {
  children?: React.ReactNode;
  value?: { href: string };
};

export const RichTextComponents = {
  types: {
    image: ({value}: ImageType) => {
      return (
        <div className="relative w-full h-96 m-2 lg:m-4 mx-auto">
          <Image 
            src={urlFor(value)}
            alt="Project Image"
            fill
            className="object-contain"
          />
        </div>
      )
    }
  },
  list : {
    bullet: ({children}: BlockType) => (
      <ul className="ml-10 py-4 list-disc space-y-2 font-body">{children}</ul>
    ),
    number: ({children}: BlockType) => (
      <ol className="ml-lg list-decimal font-body">{children}</ol>
    ),
  },
  block: {
    h1: ({children}: BlockType) => (
      <h1 className="text-5xl font-bold mt-6 scroll-mt-20 font-heading">{children}</h1>
    ),
    h2: ({ children, node }: BlockType) => {
      const id = node?._key || children?.toString().replace(/\s+/g, "-").toLowerCase();
      return (
        <h2 id={id} className="text-4xl font-bold mt-6 scroll-mt-20 font-heading">
          {children}
        </h2>
      );
    },
    h3: ({children}: BlockType) => (
      <h3 className="text-3xl font-bold mt-6 scroll-mt-20 font-body">{children}</h3>
    ),
    h4: ({children}: BlockType) => (
      <h4 className="text-2xl font-bold mt-6 scroll-mt-20 font-body">{children}</h4>
    ),
    blockquote: ({children}: BlockType) => (
      <blockquote className="border-l-primary border-l-4 pl-5 py-4 my-5 font-body font-thin">{children}</blockquote>
    ),
  },
  marks: {
    link: ({children, value}: LinkType) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return(
        <Link 
          href={value.href}
          rel={rel}
          className="underline decoration-primary hover:decoration-secondary hover:text-secondary font-body"
        >
          {children}
        </Link>
      )
    }
  }
}