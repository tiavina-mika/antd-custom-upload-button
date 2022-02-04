/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Upload } from "antd";
import { useState } from "react";
import Button from "./Button";

const Root = () => {
  const [fileList, setFileList] = useState([]);
  console.log(fileList);

  const props = {
    beforeUpload: (file) => {
      setFileList([file]);
      // setFileList((prev) => [...prev, file]);
      return false;
    },
    fileList
  };

  return (
    <div className="flexCenter flex1">
      <Upload {...props} showUploadList={false} maxCount={1} multiple={false}>
        <Button>Upload own design</Button>
      </Upload>
    </div>
  );
};

export default Root;
