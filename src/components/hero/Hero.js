import React from "react";
import {ReactComponent as IphoneSvg} from "images/heroIcon.svg"
import styled from "styled-components";
import IphoneMockUpImg from "images/iphone-mockup.png"
import Screenshot from "images/wallpaper5.png"
import styles from "./Hero.module.css"
import {Link } from "react-router-dom"

const HeroContainer = styled.div``
const Main = styled.div``

export const HeroPage = ({heroLargeText,trialLink,registerLink,supportingText}) => {
 
    return (
      <Main className={styles.main}>
        <HeroContainer className={styles.heroContainer}>
          <HeroContainer className={styles.innerHeroContainer}>
            <HeroContainer className={styles.containerMain}>
              <HeroContainer
                data-aos="fade-right"
                data-aos-duration="800"
                className={styles.heroTextContainer}
              >
                <h1 className={styles.toph1}>{heroLargeText}</h1>
                <p className={styles.topP}>{supportingText}</p>
                <div className={styles.buttonContainer}>
                  <Link
                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    to={trialLink}
                  >
                    Try it Out
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    to={registerLink}
                  >
                    Register
                  </Link>
                </div>
              </HeroContainer>

              <div
                // data-aos="fade-left"
                // data-aos-duration="800"
                className={styles.mockUpIphoneContainer}
              >
                <div className={styles.mockUpMain}>
                  <IphoneSvg className={styles.iphoneSvg} />
                  <img
                    className={styles.snappyScreenshot}
                    src={Screenshot}
                    alt="Venddit-screenshot"
                  />
                  <img
                    className={styles.iphoneMockUp}
                    alt=""
                    src={IphoneMockUpImg}
                  />
                </div>
              </div>
            </HeroContainer>
          </HeroContainer>
        </HeroContainer>
      </Main>
    );
}

export default HeroPage