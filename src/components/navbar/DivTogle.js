import tw from "twin.macro"
import {Link} from "react-router-dom";


export const ParentDiv = tw.div`absolute top-auto left-0 w-full`;
export const ChildDiv = tw.div`p-5 bg-gray-800 border rounded shadow-sm`;
export const NavBarLink = tw.a`font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`;
export const SignUpLink = ({linkTo,others,text})=>{
    return (
      <Link
        to={linkTo}
        aria-label={others}
        title={others}
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none;"
      >{text}
      </Link>
    );
}