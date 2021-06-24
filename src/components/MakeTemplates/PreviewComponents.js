import React, { useRef } from "react";
import tw from "twin.macro";
import { NormalButton } from "components/Buttons/Buttons";
import  { PreviewBox } from "./PreviewBox"
import { toPng } from "html-to-image";
const Wrapper = tw.div`flex flex-col gap-4  content-center`

export const PreviewComponent = () =>{

    const node = useRef(null)
    const handleClick = ()=>{
        toPng(node.current)
        .then(dataUrl => {
            const link = document.createElement("a");
            link.href = dataUrl
            link.setAttribute("download","new download")
            document.body.appendChild(link)
            link.click()
        })
        //TODO:
        //Image generation is done client side. But as client downloads, the image details
        //is sent to the server and saved under the user's records of products
        //from whence the column for My Products is fetched from.
        console.log("TODO")

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