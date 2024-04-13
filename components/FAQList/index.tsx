import { FC } from "react";
import Image from "next/image";
import { Card } from "antd";
import icon from "../../public/images/icons.svg";
import page from "../../public/images/page.svg";

const FAQListArr: string[] = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting",
  "Lorem Ipsum has been the industry's standard dummy text ever",
  "When an unknown printer took a galley of type and scrambled",
  "It has survived not only five centuries, but also the leap into electronic",
  "It was popularised in the 1960s with the release of Letraset sheets containing",
  "More recently with desktop publishing software like Aldus PageMaker",
];

export const FAQList = () => {
  return (
    <Card styles={{ body: { display: "flex", gap: "4rem", flexWrap: "wrap" } }}>
      <Image src={page} alt={"website page"} quality={100} />
      <div>
        <h3 style={{ alignSelf: "start", fontSize: 32, fontWeight: "300" }}>Why choose us ?</h3>
        <ul>
          {FAQListArr.map((item: string, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginTop: "0.75 rem",
              }}
            >
              <Image alt="icon" src={icon}/>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
