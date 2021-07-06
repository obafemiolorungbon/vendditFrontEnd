import React from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import ProfilePicLink from "images/obafemi.jpg";

const HeaderWrapper = tw.div`w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40`;
const HeaderWrapperTwo = tw.div`relative z-20 flex flex-col justify-center h-full px-3 mx-auto items-center`;
const HeaderWrapperThree = tw.div`relative items-center pl-1 flex w-full lg:w-full sm:pr-2 sm:ml-0`;
const SearchFormWrapper = tw.div`container relative left-0 z-50 flex w-3/4 h-auto h-full`;
const FormWrapper = tw.div`relative flex items-center justify-between w-full lg:w-64 h-full`;
const FormContainer = tw.div`absolute z-50 flex items-center justify-between block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden`;
const ImageWrapper = tw.div`relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto`;
const ImageAnchor = tw(Link)`block relative`;
const ProfilePic = tw.img`mx-auto object-cover rounded-full h-10 w-10`;
const SearchSVG = tw.svg`relative w-5 h-5`;
const SearchSVGTwo = tw.svg`absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block`;
const SearchInput = tw.input`block w-full py-1 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-85 bg-gray-100 dark:bg-gray-800 text-gray-400`;
const SearchAdd = tw.div`absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block`;
export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrapperTwo>
        <HeaderWrapperThree>
          <SearchFormWrapper>
            <FormWrapper>
              <FormContainer>
                <SearchSVG
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </SearchSVG>
              </FormContainer>
              <SearchSVGTwo
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </SearchSVGTwo>
              <SearchInput type="text" className="" placeholder="Search" />
              <SearchAdd>+</SearchAdd>
            </FormWrapper>
          </SearchFormWrapper>
          <ImageWrapper>
            <ImageAnchor to="#">
              <ProfilePic alt="profile pic" src={ProfilePicLink} />
            </ImageAnchor>
          </ImageWrapper>
        </HeaderWrapperThree>
      </HeaderWrapperTwo>
    </HeaderWrapper>
  );
};
