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
          gap: "1.5rem",
          marginTop: "0",
          borderBottom: "1 px solid #bfc0c0",
        },
      }}
    >
      {img && <Image alt="item image" src={img} />}
      <h3 style={{ alignSelf: "start", fontSize: 32, fontWeight: "300" }}>{title}</h3>
      <p style={{ lineHeight: "170%" }}>{introText}</p>
      <p style={{ lineHeight: "170%" }}>{mainText}</p>
    </Card>
  );
};
