import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";
import CodeBlock from "./CodeBlock";

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

interface CodeType {
  value: {
    code: string;
    language: string;
  };
}

export const RichTextComponents = {
  types: {
    image: ({ value }: ImageType) => {
      return (
        <div className="relative flex justify-center items-center w-full h-72 md:h-[30rem] my-2 lg:my-4 mx-auto bg-gradient-to-r from-cyan-400 to-blue-800 p-8 rounded-lg shadow-2xl">
          <div className="relative w-full h-full max-w-4xl flex justify-center items-center">
            <Image
              src={urlFor(value)}
              alt="Project Image"
              width={800} // Adjust the size based on your need
              height={400}
              priority
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMN7ldDwAENwHnfg9UxAAAAABJRU5ErkJggg=="
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>
      );
    },
    code: ({ value }: CodeType) => {
      return <CodeBlock value={value} />;
    },
  },
  list: {
    bullet: ({ children }: BlockType) => (
      <ul className="ml-10 space-y-4 py-2 list-disc font-body text-left">
        {children}
      </ul>
    ),
    number: ({ children }: BlockType) => (
      <ol className="ml-lg list-decimal font-body text-left">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: BlockType) => (
      <h1 className="text-4xl md:text-5xl font-bold my-8 py-4 scroll-mt-20 font-heading text-left">
        {children}
      </h1>
    ),
    h2: ({ children, node }: BlockType) => {
      const id =
        node?._key || children?.toString().replace(/\s+/g, "-").toLowerCase();
      return (
        <h2
          id={id}
          className="text-3xl md:text-4xl font-bold my-8 py-4 scroll-mt-20 font-heading text-left"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }: BlockType) => (
      <h3 className="text-2xl md:text-3xl font-bold my-8 scroll-mt-20 font-body text-left">
        {children}
      </h3>
    ),
    h4: ({ children }: BlockType) => (
      <h4 className="text-xl md:text-2xl font-bold my-8 scroll-mt-20 font-body text-left">
        {children}
      </h4>
    ),
    blockquote: ({ children }: BlockType) => (
      <blockquote className="border-l-primary border-l-4 pl-5 py-4 my-5 text-primary/80 font-body  text-left">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: LinkType) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-primary hover:decoration-secondary hover:text-secondary font-body"
        >
          {children}
        </Link>
      );
    },
  },
};
