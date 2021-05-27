import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import {FeaturesBox} from "components/misc/FeaturesBox.js"

const PinkBox = styled(FeaturesBox)``
const pinkColor = { backgroundColor: "#ed64a6" };
const GreenBox = styled(FeaturesBox)``
const greenColor = { backgroundColor: "#3abab4" };
const BlueBox = styled(FeaturesBox)``
const blueColor = { backgroundColor: "#7f9cf5" };
const MajorDiv = tw.div`bg-black`
const TopDIv = tw.div`px-4 py-8  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-8`;
const GridDiv = tw.div`grid gap-8 row-gap-5 lg:grid-cols-3`;

export const Features = ()=>{


    return (
      <MajorDiv>
        <TopDIv>
          <GridDiv>
            <PinkBox bgColor={pinkColor} 
            textBody="Easily verify the Vendor you are buying from. All vendors are verified with Government backed documents" 
            textHeading="Verified With Documents" />
            <GreenBox bgColor={greenColor} 
            textBody="See the fastest selling products everyone is buying. These are up to date products that are being purchased"
             textHeading="Featured Products" />
            <BlueBox bgColor={blueColor}
             textBody="Create wonderful product pictures within seconds. Take the picture, and Veddit automatically creates beautiful product pictures for you"
              textHeading="Vendor Product PicMaker" />
          </GridDiv>
        </TopDIv>
      </MajorDiv>
    );
}