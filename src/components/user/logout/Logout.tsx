"use client";
import {signOut} from "next-auth/react";

function Logout(){
    return(
        <li onClick={() => signOut()}>Log out</li>
    );
}

export default Logout;