"use client";
import { List } from "antd";
import Link from "next/link";
import s from "./styles.module.scss";

interface HeaderListItem {
  name: string;
  link: string;
}
const HeaderListArr: HeaderListItem[] = [
  { name: "Solution", link: "/" },
  { name: "Products", link: "/" },
  { name: "Portfolio", link: "/" },
  { name: "Contact", link: "/" },
];

export const HeaderList = () => {
  return (
    <ul className={s.list}>
      {HeaderListArr.map((item: HeaderListItem, index: number) => (
        <li className={s.textItem} key={index}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
