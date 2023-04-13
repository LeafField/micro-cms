import React from "react";
import parse, { Element } from "html-react-parser";
import Image from "next/image";

type Props = {
  contentHTML: string;
};

const ConvertBody: React.FC<Props> = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node instanceof Element && node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            alt={alt}
            src={src}
            width={Number(width)}
            height={Number(height)}
            sizes="(min-width:768px) 768px,100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
};

export default ConvertBody;
