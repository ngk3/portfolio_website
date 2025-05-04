import Image from "next/image";

interface ExternalLinkProps {
  hrefLink: string;
  icon: HTMLImageElement | string;
}

export default function ExternalLink({ hrefLink, icon }: ExternalLinkProps) {
  return (
    <a
      className="text-blue-500 hover:underline"
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* ICON */}
      <Image
        src={icon}
        alt="External Link Icon"
        className="inline-block mr-2"
      />

      {/* OPTIONAL TEXT */}
    </a>
  );
}
