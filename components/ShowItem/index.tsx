import { Card } from "antd";
import Image from "next/image";
import { FC } from "react";

interface ShowItemProps {
  img?: any;
  title: string;
  introText?: string;
  mainText: string;
}

export const ShowItem: FC<ShowItemProps> = ({ img, title, introText, mainText }) => {
  return (
    <Card
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "0",
        },
      }}
    >
      {img && <Image alt="item image" src={img} />}
      <h3>{title}</h3>
      <p>{introText}</p>
      <p>{mainText}</p>
    </Card>
  );
};
