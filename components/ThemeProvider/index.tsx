import { ConfigProvider, LayoutProps, ThemeConfig, theme } from "antd";
import React from "react";

const themeConfig: ThemeConfig = {
  components: {
    Button: {
      fontWeight: "500",
      colorPrimaryText: "#fff",
      colorTextSecondary: "#000",
      borderRadius: 8,
      defaultBorderColor: "#29704f",
      colorPrimaryBorder: "#e57523",
    },
    Input: { activeBorderColor: "#e57523", controlHeight: 36, activeShadow: "none" },
  },
  token: { colorPrimary: "#29704f", fontSize: 14, fontFamily: "var(--montserrat)" },
};

export const ThemeProvider = ({ children }: LayoutProps) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};