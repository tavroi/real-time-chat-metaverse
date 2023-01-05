import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {

    const { authenticate } = useMoralis();

    return (

        <div className="bg-black relative">

            <div className="flex flex-col absolute top-[17.5rem] z-50 h-4/6 w-full items-center space-y-16">

                {/* logo image */}
                <Image 
                    src="/metainfinity.jpg"
                    height={200}
                    width={200}
                    className="object-cover rounded-full"
                />

                {/* login button */}
                <button 
                    className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}
                > 
                    Login to the METAVERSE 
                </button>

            </div>

            <div className="w-full h-screen">
                <Image 
                     src="/metainfinity.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
        </div>
    )
}

export default Login;
