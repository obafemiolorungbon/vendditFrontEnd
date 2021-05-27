import {useState, React} from 'react';
import snappy from "images/vendditLogo.png"
import styles from "./Navbar.module.css"
import { ButtonBase, Toggler} from "components/misc/NavToggle.js"
import {ParentDiv, ChildDiv, NavBarLink} from "./DivTogle";
import tw from "twin.macro"
import styled from "styled-components";
import {Link} from "react-router-dom"


const StyledPDiv = styled(ParentDiv)`
  z-index: 200;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
`;
const NavBarLinks = styled(NavBarLink)`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
`;
const MainContainer = tw.div`px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8`; 
const SubContainer = tw.div`relative flex items-center justify-between`;
const ListContainer = tw.ul`flex items-center hidden space-x-8 lg:flex`;
const LinkLists = tw.ul`space-y-4`
const Logo = styled.img`max-width:10rem;max-height:50%`
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn,setSignIn] = useState("Sign Up");
  const [signLinks, setSignLinks] = useState("/signup")
  const handleClick = ()=>{
    setIsMenuOpen(false)
    if (isSignedIn === "Sign Up"){
      setSignIn("Sign In")
      setSignLinks("/signin")
      return
    }
    setSignIn("Sign Up");
    setSignLinks("/signup");
  }

  return (
    <div className="bg-black">
      <MainContainer>
        <SubContainer>
          <Link to="/" aria-label="snappy" title="Snappy">
            <Logo src={snappy} alt="Snappy-Logo" />
          </Link>
          <ListContainer>
            <li>
              <NavBarLinks
                href="/#salestype"
                aria-label="Our product"
                title="Our product"
                className={styles.headerText}
              >
                Product
              </NavBarLinks>
            </li>
            <li>
              <NavBarLinks
                href="/#features"
                aria-label="Our product"
                title="Our product"
              >
                Features
              </NavBarLinks>
            </li>
            <li>
              <NavBarLinks
                href="/#pricing"
                aria-label="Product pricing"
                title="Product pricing"
              >
                Pricing
              </NavBarLinks>
            </li>
            <li>
              <NavBarLinks
                href="/footer"
                aria-label="About us"
                title="About us"
              >
                About
              </NavBarLinks>
            </li>
          </ListContainer>
          <ListContainer>
            <li>
              <Link
                to={signLinks}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label={isSignedIn}
                title={isSignedIn}
                onClick={handleClick}
              >
                {isSignedIn}
              </Link>
            </li>
          </ListContainer>
          <div className="lg:hidden">
            <ButtonBase
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() =>
                isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
              }
            >
              <div>
                <Toggler pathClass={isMenuOpen ? true : false} />
              </div>
            </ButtonBase>
            {isMenuOpen && (
              <StyledPDiv>
                <ChildDiv>
                  <nav>
                    <LinkLists>
                      <li>
                        <NavBarLinks
                          href="/#salestype"
                          aria-label="Our product"
                          title="Our product"
                        >
                          Product
                        </NavBarLinks>
                      </li>
                      <li>
                        <NavBarLinks
                          href="/#features"
                          aria-label="Our product"
                          title="Our product"
                        >
                          Features
                        </NavBarLinks>
                      </li>
                      <li>
                        <NavBarLinks
                          href="/#pricing"
                          aria-label="Product pricing"
                          title="Product pricing"
                        >
                          Pricing
                        </NavBarLinks>
                      </li>
                      <li>
                        <NavBarLinks
                          href="/footer"
                          aria-label="About us"
                          title="About us"
                        >
                          About
                        </NavBarLinks>
                      </li>
                      <li>
                        <Link
                          to={signLinks}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label={isSignedIn}
                          title={isSignedIn}
                          onClick={handleClick}
                        >
                          {isSignedIn}
                        </Link>
                      </li>
                    </LinkLists>
                  </nav>
                </ChildDiv>
              </StyledPDiv>
            )}
          </div>
        </SubContainer>
      </MainContainer>
    </div>
  );
};