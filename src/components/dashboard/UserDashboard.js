import React from "react";
import tw from "twin.macro";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import { Header } from "./DashboardContainer";
import { NormalButton } from "components/Buttons/Buttons";
import {
  SettingsIcon,
  HomePathIcon,
  ProjectIcon,
  MyTaskIcon,
  CalendarIcon,
  TimeManagerIcon,
  ReportIcon,
  IconSVG,
} from "./DashboardSVGs";
import { TemplateMaker } from "components/MakeTemplates/TemplateView";
import { TemplateContext } from "hooks/TemplateContext";
import { useTemplateSetter } from "hooks/setProductDetails";
import axios from "axios";
import { useConfirmUser } from "hooks/confirmUser";
axios.defaults.withCredentials = true;

const Wrapper = tw.div`bg-gray-100  p-4 dark:bg-gray-800 rounded-2xl lg:p-0 md:p-0 relative h-screen overflow-auto relative`;
const FlexContainer = tw.div`flex items-start justify-between`;
const VerticalSide = tw.div`h-screen hidden lg:block lg:fixed md:fixed my-4 ml-4 shadow-lg relative max-w-sidebar`;
const VerticalSideIn = tw.div`bg-white h-full rounded-2xl dark:bg-gray-700`;
const LogoWrapper = tw.div`flex items-center justify-center pt-6`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <svg
        width="35"
        height="30"
        viewBox="0 0 256 366"
        version="1.1"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <linearGradient
            x1="12.5189534%"
            y1="85.2128611%"
            x2="88.2282959%"
            y2="10.0225497%"
            id="linearGradient-1"
          >
            <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%"></stop>
            <stop stopColor="#FF0057" offset="86.1354%"></stop>
          </linearGradient>
        </defs>
        <g>
          <path
            d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
            fill="#001B38"
          ></path>
          <circle
            fill="url(#linearGradient-1)"
            transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
            cx="147.013244"
            cy="147.014675"
            r="78.9933938"
          ></circle>
          <circle
            fill="url(#linearGradient-1)"
            opacity="0.5"
            transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
            cx="147.013244"
            cy="147.014675"
            r="78.9933938"
          ></circle>
        </g>
      </svg>
    </LogoWrapper>
  );
};

const AnchorTag = tw(
  Link
)`w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500`;
const SideNavWrapper = tw.div``;
const IconText = tw.span`text-left`;
const IconTextLower = tw.span`mx-4 text-sm font-normal`;

const NavItem = ({ path, text, to }) => {
  return (
    <AnchorTag to={to}>
      <IconText>
        <IconSVG>{path}</IconSVG>
      </IconText>
      <IconTextLower>{text}</IconTextLower>
    </AnchorTag>
  );
};

export const NavBar = () => {
  const { logOutUser } = useConfirmUser();
  let match = useRouteMatch();

  return (
    <SideNavWrapper tw="mt-6">
      <div>
        <NavItem
          path={HomePathIcon}
          to={`${match.url}/template-maker`}
          text="Dashboard"
        />
        <NavItem
          path={ProjectIcon}
          to={`${match.url}/products`}
          text="Products"
        />
        <NavItem
          path={MyTaskIcon}
          to={`${match.url}/deliveries`}
          text="My Deliveries"
        />
        <NavItem
          path={CalendarIcon}
          to={`${match.url}/payments`}
          text="My Payments"
        />
        <NavItem
          path={TimeManagerIcon}
          to={`${match.url}/links`}
          text="My Links"
        />
        <NavItem
          path={ReportIcon}
          to={`${match.url}/orders`}
          text="New Orders"
        />
        <NavItem
          path={SettingsIcon}
          to={`${match.url}/deliveries`}
          text="New Deliveries"
        />
        <NormalButton
          text="Log Out"
          onClick={(e) => {
            e.preventDefault();
            logOutUser();
          }}
        />
      </div>
    </SideNavWrapper>
  );
};

const DashboardContainerWrapper = tw.div`flex flex-col w-full lg:pl-64 overflow-auto md:p-4 md:space-y-4`;

export const DashboardBase = () => {
  let match = useRouteMatch();
  const {
    productDescription,
    productPrice,
    productName,
    productDiscountPrice,
    setProductDescription,
    setProductName,
    setProductPrice,
    setProductDiscountPrice,
    setProductImage,
    image,
  } = useTemplateSetter();

  return (
    <TemplateContext.Provider
      value={{
        setProductDescription,
        setProductName,
        setProductPrice,
        setProductDiscountPrice,
        productDescription,
        productPrice,
        productName,
        productDiscountPrice,
        setProductImage,
        image,
      }}
    >
      <Wrapper>
        <FlexContainer>
          <VerticalSide>
            <VerticalSideIn>
              <Logo />
              <NavBar />
            </VerticalSideIn>
          </VerticalSide>
          <DashboardContainerWrapper>
            <Header />
            <Switch>
              <Route
                exact
                path={`${match.path}/template-maker`}
                component={TemplateMaker}
              />
            </Switch>
          </DashboardContainerWrapper>
        </FlexContainer>
      </Wrapper>
    </TemplateContext.Provider>
  );
};
