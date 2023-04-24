import React, { useState } from "react";
import { Input, Button, Upload, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";

import { getImagePath } from '../helper';

const QuickSearch = () => {
  // Search Images
  const [searchImageFile, setSearchImageFile] = useState(null);
  const [base64SearchImage, setBase64SearchImage] = useState([]);

  // Result images
  const [imagePaths, setImagePaths] = useState([]);
  const [resultImagesBase64, setResultImagesBase64] = useState([]);


  // UPLOAD SEARCH IMAGE
  const handleFileChange = (info) => {
    message.success(`${info.file.name} file uploaded successfully.`);
    setSearchImageFile(info.file);

    // Convert file to base64 string
    const reader = new FileReader();
    reader.readAsDataURL(info.file);
    reader.onload = () => {
      const base64String = reader.result;
      setBase64SearchImage(base64String);
    };
  };

  // GET ALL IMAGES
  const fetchAllImages = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/images");
      const data = await response.json();
      setImagePaths(data);
    } catch (error) {
      message.error(error);
    }
  };

  const loadImages = async (imagePaths) => {
    const images = [];

    for (const imagePath of imagePaths) {
      const imageUrl = getImagePath(imagePath);

      const response = await fetch(`${imageUrl}`);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        images.push(base64data);
      };
    }

    return images;
  };

  const handleSearch = () => {
    // Send POST request with file data to search for image
    fetchAllImages();

    loadImages(imagePaths).then((images) => {
      setResultImagesBase64(images);
      // Do something with the array of base64 encoded images
    });
  };

  return (
    <>
      <Input.Search
        placeholder="Search for images"
        enterButton={
          <Button
            type="primary"
            onClick={handleSearch}
            style={{ height: "42px", width: "150px" }}
          >
            Search
          </Button>
        }
        suffix={
          <Upload
            accept=".jpg,.jpeg,.png"
            showUploadList={false}
            beforeUpload={() => false}
            onChange={handleFileChange}
          >
            <Button icon={<CameraOutlined />} />
          </Upload>
        }
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      />

      {resultImagesBase64.map((imageBase64) => (
        <img
          key={imageBase64}
          src={`${imageBase64}`}
          alt="Result image"
          style={{ maxWidth: "20%", marginTop: "20px" }}
        />
      ))}
    </>
  );
};

export default QuickSearch;
