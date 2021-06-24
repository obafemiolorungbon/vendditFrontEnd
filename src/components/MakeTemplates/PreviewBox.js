import React, { useContext } from "react";
import tw from "twin.macro";
import { ReactComponent as SwipeSVG }from "images/swipe_up.svg"
import styles from "./TemplateView.module.css"
import { TemplateContext } from "hooks/TemplateContext";
import UserContext from "hooks/userContext";
const MajorBox = tw.div`flex flex-col`
const PreviewImage = tw.div`w-full h-96 flex `
const ImageContainer = tw.div` w-1/2 rounded-l-lg bg-gray-300`
const ProductInfo = tw.div`w-1/2 bg-white flex rounded-r-lg flex-col pt-8 pb-4 px-4 `
const ProductNameDivPreset = tw.div`w-full pb-4 mb-4`
const ProductDescriptionPreset= tw.div`w-full mb-4`
const Image = tw.img`rounded-l-lg`


const ProductCallToAction = tw.div`flex flex-col w-full`
const Price = tw.div`w-1/3 bg-white`
const DiscountPrice = tw.div`w-1/3 bg-white` 
const CTAButton = tw.button`w-full rounded-4xl mt-4 p-2 outline-none border-none bg-cta-100`

const ProductName = tw.p`font-bold text-2xl`
const BrandName = tw.p`font-bold text-gray-300 text-base`
const ProductDesc = tw.p`font-mono font-hairline text-gray-400 text-base`

const ProductCTA = ()=>{
    const { productPrice, productDiscountPrice }  = useContext(TemplateContext)
    return (
      <>
        <ProductCallToAction>
          <DiscountPrice>
            ₦<span className={styles.discount}>{productDiscountPrice}</span>
          </DiscountPrice>
          <Price>
            ₦<span className={styles.price}>{productPrice}</span>
          </Price>
          <p> </p>
          <CTAButton><SwipeSVG/>Swipe up Now!!!</CTAButton>
        </ProductCallToAction>
      </>
    );

}

const ProductDescription = () =>{
    const { productDescription } = useContext(TemplateContext)
    return (
        <>
            <ProductDescriptionPreset>
                <ProductDesc className={styles.description}>{productDescription}</ProductDesc>
            </ProductDescriptionPreset>
        </>
    )

}

const ProductNameDiv =  ()=>{

    const { productName} = useContext(TemplateContext)
    const { user } = useContext(UserContext)
    return(
        <ProductNameDivPreset>
            <ProductName>
                {productName}
            </ProductName>
            <BrandName>
              By {user.businessName}
            </BrandName>

        </ProductNameDivPreset>
    )
}

export const PreviewBox = () => {
    const { image } = useContext(TemplateContext) 
    return(
        <>
        <MajorBox>
            <PreviewImage>
                <ImageContainer>
                    <Image
                    alt="imageUpload"
                        src={image}
                    />
                </ImageContainer>
                <ProductInfo>
                    <ProductNameDiv/>
                    <ProductDescription/>
                    <ProductCTA/>
                </ProductInfo>
            </PreviewImage>
        </MajorBox>

        </>
    )

};
