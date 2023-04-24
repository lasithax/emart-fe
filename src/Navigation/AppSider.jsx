import {
  ShoppingCartOutlined,
  HomeOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

import "./appSider.css";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Shop",
    key: "shop",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <ContactsOutlined />,
  },
];

const AppSider = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="navigationBar">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default AppSider;
