import { useContext, useState} from "react";
import { createContext } from "react/cjs/react.development";


export const PostContext = createContext(null)

function Post ({children}) {
    const [postDetails,setPostDetails]=useState()

    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}

        </PostContext.Provider>
    )
}

export default Post
