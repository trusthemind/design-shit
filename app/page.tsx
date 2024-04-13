import Image from "next/image";
import bg from "../public/images/bluredBackground.svg";
import logo from "../public/images/logo.svg";
import s from "./style.module.scss";
import { HeaderList } from "../components/HeaderList";
import { Banner } from "../components/Banner";
import { ContentList } from "../components/ContentList";
import { ShowItem } from "../components/ShowItem";
import ipad from "../public/images/ipad.svg";

const Home = () => {
  return (
    <main>
      <Image alt="background" src={bg} className={s.backgroundHolder} />
      <div className={s.stickyBlock}>
        <Image alt="logo" src={logo} />
        <HeaderList />
      </div>
      <Banner buttonText="Try Demo" introducingText="Introducing" helperText="Something hot....." />
      <div className={s.contentBlock}>
        <ContentList />
        <ShowItem
          img={ipad}
          title="Lorem Ipsum is simply dummy text"
          introText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
          mainText={`It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem 
           Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        />
      </div>
    </main>
  );
};

export default Home;
