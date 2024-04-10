import Image from "next/image";
import bg from "../public/images/bluredBackground.svg";
import logo from "../public/images/logo.svg";
import s from "./style.module.scss";
import { HeaderList } from "../components/HeaderList";

const Home = () => {
  return (
    <main>
      <Image alt="background" src={bg} className={s.backgroundHolder} />
      <div className={s.stickyBlock}>
        <Image alt="logo" src={logo} />
        <HeaderList />
      </div>
    </main>
  );
};
export default Home;
