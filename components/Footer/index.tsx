import Image from "next/image";
import logo from "../../public/images/logo.svg";
import s from "./styles.module.scss";

const listArr: string[] = [
  "About us",
  "Why us",
  "Customer Stories",
  "Press Resources",
  "Press Releases",
  "Contact us",
];

export const Footer = () => {
  return (
    <footer className={s.footerBlock}>
      <ul className={s.routeList}>
        {listArr.map((item: string, index: number) => (
          <li key={index} style={{ textDecoration: "underline" }}>
            {item}
          </li>
        ))}
      </ul>
      <ul className={s.routeList}>
        {listArr.map((item: string, index: number) => (
          <li key={index} style={{ textDecoration: "underline" }}>
            {item}
          </li>
        ))}
      </ul>

      <div style={{ maxWidth: "20rem" }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industr standard dummy text ever since the 1500s, when an unknown printer took a{" "}
        </p>
        <b>
          Lorem Ipsum is simply
          <br />
          Owner, Lorem Ipsum
        </b>
      </div>
      <div className={s.logoHolder}>
        <Image alt="logo" src={logo} height={115} />
        <span>© cssauthor.com</span>
      </div>
    </footer>
  );
};
