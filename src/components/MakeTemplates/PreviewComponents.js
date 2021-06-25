import React, { useRef, useContext } from "react";
import tw from "twin.macro";
import { NormalButton } from "components/Buttons/Buttons";
import  { PreviewBox } from "./PreviewBox"
import { toPng } from "html-to-image";
import { TemplateContext } from "hooks/TemplateContext";
import { sendImageToServer } from "hooks/sendImageToServer";
import { createDownloadLinkAndDownload} from "hooks/createImage";
import { uploadImageToColudinary } from "hooks/uploadImageToCloudinary";
import axios from "axios";
axios.defaults.withCredentials=true
const Wrapper = tw.div`flex flex-col gap-4  content-center`

export const PreviewComponent = () =>{
    const { productName } = useContext(TemplateContext)
    const node = useRef(null)
    const handleClick = async ()=>{
        const dataUrl = await toPng(node.current)
         createDownloadLinkAndDownload(dataUrl,productName);
        // create new file to upload to cloudinary
        let options = {
            type: "image/jpeg",
        };
        let file = new File([dataUrl], productName, options);
        // upload the image to cloudinary
        const url = await uploadImageToColudinary({productName,file})
        const values = {
            productName:productName,
            url:url
        }
       await sendImageToServer(values)
    }
    return (
        <>
        <Wrapper>
        <div ref={node}>
            <PreviewBox               
            />
        </div>
            <NormalButton onClick={handleClick} text="Download"/>

        </Wrapper>
        </>
        )

}