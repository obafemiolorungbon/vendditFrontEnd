import React from "react";
import tw from "twin.macro";

import { SideForm } from "./TemplateForm";
import { PreviewComponent } from "./PreviewComponents";

const TemplateMakerBox = tw.div`flex flex-col items-center justify-center lg:flex-row lg:gap-8 md:flex-row md:gap-4 `;
const FormContainer = tw.div`flex w-full p-4 flex-col h-full lg:w-1/3 md:w-1/3`;
const PreviewContainer = tw.div`flex w-full flex-col lg:w-2/3 md:w-2/3 lg:p-4 h-full`;

export const TemplateMaker = () => {
  return (
    <>
      <TemplateMakerBox>
        <FormContainer>
          <SideForm />
        </FormContainer>

        <PreviewContainer>
          <PreviewComponent />
        </PreviewContainer>
      </TemplateMakerBox>
    </>
  );
};
