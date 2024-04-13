import Image from "next/image";
import { FC } from "react";
import banner from "../../public/images/banner.svg";
import s from "./style.module.scss";
import { Button } from "antd";

type BannerProps = {
  introducingText?: string;
  buttonText?: string;
  helperText?: string;
};

export const Banner: FC<BannerProps> = ({ introducingText, buttonText, helperText }) => {
  return (
    <div className={s.bannerBlock}>
      <Image src={banner} alt="banner" />
      <div className={s.bannerButtonBlock}>
        <div className={s.bannerTextBlock}>
          {introducingText && <h2>{introducingText}</h2>}
          {helperText && <h4>{helperText}</h4>}
        </div>
        {buttonText && (
          <Button size="large" type="primary" style={{ width: "10rem" }}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};
