import tw from "twin.macro"
import styled from "styled-components"
import React from "react"
import styles from "./NavToggle.module.css"
export const ButtonBase = tw.button`p-2 -mr-1 transition duration-200 rounded focus:outline-none`;

const SvgComponent = styled.svg``
export const Toggler = ({pathClass})=>{
    return (
      <SvgComponent
       viewBox="0 0 200 200"
       className = {styles.mainSvg}
       >
        <path
        className={pathClass ? styles.animate:""}
          d="M 40, 80C 40, 80 120, 80 140, 80C180, 80 180, 20  90, 80C 60,100  30,120  30,120"
        ></path>
        <path d="M 40,100L140,100"></path>
        <path
          className={pathClass ? styles.animate:""}
          d="M 40,120C 40,120 120,120 140,120C180,120 180,180  90,120C 60,100  30, 80  30, 80"
        ></path>
      </SvgComponent>
    );
}