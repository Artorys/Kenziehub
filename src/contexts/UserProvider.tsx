import { createContext,Dispatch,ReactElement,SetStateAction,useState } from "react";

const userContext = createContext<IUserContext>({} as IUserContext)

export interface IDataUser
{
    id : string;
    name : string;
    email : string;
    course_module : string;
    bio : string;
    contact : string;
    techs : []
    works : [];
    created_at : string;
    updated_at : string;    
}
interface ITecs
{
    id : string;
    created_at : string;
    status : string;
    title : string;
    updated_at : string;
}

interface IUser
{
    children : ReactElement;
}
export interface IUserContext
{
    dataUser : IDataUser;
    setDataUser : Dispatch<SetStateAction<IDataUser>>;
    tecs : Array<ITecs>;
    setTecs : Dispatch<SetStateAction<Array<ITecs>>>
}
function UserProvider({children} : IUser)
{
    const [dataUser,setDataUser] = useState<IDataUser>({} as IDataUser)
    const [tecs,setTecs] = useState<Array<ITecs>>(Array<ITecs>)

    return(
        <userContext.Provider value = {{tecs,setTecs,dataUser,setDataUser}}>{children}</userContext.Provider>
    )
}
export {userContext,UserProvider}