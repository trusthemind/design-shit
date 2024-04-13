"use client";
import phone from "../../public/images/phone.svg";
import web from "../../public/images/web.svg";
import search from "../../public/images/search.svg";
import card from "../../public/images/card.svg";
import Image from "next/image";
import { Card } from "antd";
import { useState } from "react";

interface ContentListItem {
  img: any;
  topText: string;
  bottomText: string;
}

const ContentListArr: ContentListItem[] = [
  {
    img: phone,
    topText: "Responcive",
    bottomText: "Websites",
  },
  {
    img: card,
    topText: "E Commerce",
    bottomText: "Websites",
  },
  {
    img: web,
    topText: "Daily blog",
    bottomText: "Websites",
  },
  {
    img: search,
    topText: "Search based",
    bottomText: "Websites",
  },
];

export const ContentList = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: "2.5rem",
        padding: "4.5rem",
      }}
    >
      {ContentListArr.map((item: ContentListItem, index: number) => (
        <Card
          key={index}
          onClick={() => setSelected(index)}
          style={{ border: selected === index ? "1px solid var(--green)" : "none" }}
        >
          <Image src={item.img} alt={item.topText} />
          <h3 style={{ textAlign: "center" }}>{item.topText}</h3>
          <p style={{ textAlign: "center" }}>{item.bottomText}</p>
        </Card>
      ))}
    </div>
  );
};
