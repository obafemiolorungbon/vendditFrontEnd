import React, { useContext } from "react";
import tw from "twin.macro";
import styles from "./TemplateView.module.css";
import { TemplateContext } from "hooks/TemplateContext";
import UserContext from "hooks/userContext";
const MajorBox = tw.div`flex flex-col `;
const PreviewImage = tw.div`w-full p-2 lg:p-0 md:p-0 h-96 flex `;
const ImageContainer = tw.div` w-1/2 rounded-l-lg bg-gray-300`;
const ProductInfo = tw.div`w-1/2 bg-white flex rounded-r-lg flex-col pt-4 lg:pt-8 md:p-6 px-4 lg:px-8 md:px-8 `;
const ProductNameDivPreset = tw.div`w-full pb-4 mb-1`;
const ProductDescriptionPreset = tw.div`w-full h-20 mb-8`;
const Image = tw.img`rounded-l-lg`;

const ProductCallToAction = tw.div`flex flex-col w-full`;
const Price = tw.div`w-1/3 bg-white mb-4 lg:mb-2 md:mb-6`;
const DiscountPrice = tw.div`w-1/3 bg-white`;
const CTAContainer = tw.div`flex items-center justify-center`;
const CTAButton = tw.button`w-full rounded-4xl lg:w-1/2 md:w-1/2 px-1 py-2 lg:px-2 md:px-1 md:py-2 lg:py-3 text-center outline-none border-none bg-cta-100`;

const ProductName = tw.p`font-bold text-lg md:text-xl lg:text-2xl`;
const BrandName = tw.p`font-bold text-gray-300 text-base`;
const ProductDesc = tw.p`font-mono font-hairline text-gray-500 text-base`;

const ProductCTA = () => {
  const { productPrice, productDiscountPrice } = useContext(TemplateContext);
  return (
    <>
      <ProductCallToAction>
        <DiscountPrice>
          <span class={styles.nairaSign}>₦</span>
          <span className={styles.discount}>{productDiscountPrice}</span>
        </DiscountPrice>
        <Price>
          <span class={styles.nairaSign}>₦</span>
          <span className={styles.price}>{productPrice}</span>
        </Price>
        <p> </p>
        <CTAContainer>
          <CTAButton>Swipe up</CTAButton>
        </CTAContainer>
      </ProductCallToAction>
    </>
  );
};

const ProductDescription = () => {
  const { productDescription } = useContext(TemplateContext);
  return (
    <>
      <ProductDescriptionPreset>
        <ProductDesc className={styles.description}>
          {productDescription}
        </ProductDesc>
      </ProductDescriptionPreset>
    </>
  );
};

const ProductNameDiv = () => {
  const { productName } = useContext(TemplateContext);
  const { user } = useContext(UserContext);
  return (
    <ProductNameDivPreset>
      <ProductName>{productName}</ProductName>
      <BrandName>By {user.businessName}</BrandName>
    </ProductNameDivPreset>
  );
};

export const PreviewBox = () => {
  const { image } = useContext(TemplateContext);
  return (
    <>
      <MajorBox>
        <PreviewImage>
          <ImageContainer>
            <Image alt="imageUpload" src={image} />
          </ImageContainer>
          <ProductInfo>
            <ProductNameDiv />
            <ProductDescription />
            <ProductCTA />
          </ProductInfo>
        </PreviewImage>
      </MajorBox>
    </>
  );
};
