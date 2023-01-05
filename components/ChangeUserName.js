import { useMoralis } from "react-moralis";

function ChangeUserName() {

    const { user, setUserData, isUserUpdating, userError } = useMoralis();

    const setUserName = () => {
        
        const username = prompt(`Enter your new Username (current: ${user.getUsername()})`);

        // if(!userName) {
        //     return;
        // }

        setUserData({
            username,
        });
    }

    return (

        <div className="text-sm absolute top-5 right-5">

            <button 
                className="bg-blue-500 rounded-lg p-2 font-bold text-white " 
                disabled={isUserUpdating}
                onClick={setUserName}
            >
                Change your Username
            </button>
            
        </div>
    )
}

export default ChangeUserName;
