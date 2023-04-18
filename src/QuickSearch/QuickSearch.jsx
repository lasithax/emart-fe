import React from "react";

import { Input } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const { Search } = Input;

const onImageSearchClicked = () => {
  alert('Hi Arunod !')
}

const suffix = (
  <CameraOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
    onClick={onImageSearchClicked}
  />
);

function QuickSearch() {
  const onSearch = () => {};

  return (
    <div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
    </div>
  );
}

export default QuickSearch;
