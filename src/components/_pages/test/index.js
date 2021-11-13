import React, { useState } from 'react'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function TestPage() {

    const [fileList, setFileList] = useState([

    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    return (
        <div>
            <ImgCrop>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 2 && '+ Upload'}
                </Upload>
            </ImgCrop>
        </div>
    )
}

