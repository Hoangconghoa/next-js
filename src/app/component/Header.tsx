"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Dasboard",
    key: "",
    icon: <MailOutlined />,
  },
  {
    label: "Users",
    key: "users",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Blog",
    key: "blogs",
    icon: <MailOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.push(`/${e.key}`);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
