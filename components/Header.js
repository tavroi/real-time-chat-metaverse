import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {

    const { user } = useMoralis();
    
    return (

        <div className="text-[#3B82F6] sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-blue-700">
           
           <div className="grid grid-cols-4 lg:grid-cols-4 items-end lg:items-center">

               {/* <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                   <Image 
                    src=""
                    alt="my-pic"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                   />
               </div> */}

               <div className="text-left lg:text-center col-span-4">
                   <div className="h-48 w-48 relative lg:mx-auto border-blue-500 border-8 rounded-full">
                        {/* avatar */}
                        <Avatar logoutOnPress/>
                   </div>

                   {/* welcome message */}
                   <h1 className="text-3xl"> Welcome to the METAVERSE </h1>

                   {/* username */}
                   <h2 className="text-5xl font-bold truncate"> { user.get("username") } </h2>

                   {/* change username component */}
                   <ChangeUserName />

               </div>

           </div>

        </div>
    )
}

export default Header;
