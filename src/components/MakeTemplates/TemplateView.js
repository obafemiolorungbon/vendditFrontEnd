import React from "react";
import tw from "twin.macro";

import { SideForm } from "./TemplateForm";
import { PreviewComponent } from "./PreviewComponents";

const TemplateMakerBox = tw.div`flex gap-4`
const EachContainer = tw.div`flex w-1/2 flex-col`

export const TemplateMaker = () =>{

    return(
        <>
            <TemplateMakerBox>
            <EachContainer>
                <SideForm/>
            </EachContainer>

            <EachContainer>
                <PreviewComponent/>
            </EachContainer>
            </TemplateMakerBox>
        </>
    )
}