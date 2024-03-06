"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";
import Logout from "@/components/user/logout/Logout";



function UserNavBox({name = "user", isAdmin = false} : {name: string | null, isAdmin: boolean | null}) {
    const [userInfoOpen, setUserInfoOpen] = useState<boolean>(false);
    

  

    return (
        <button className={styles.userNavBox}>
            <div
                className={styles.userNavBoxItem}
                onClick={() => setUserInfoOpen(!userInfoOpen)}
            >
                <span className={styles.userImage}>{name}</span>
                <FontAwesomeIcon
                    icon={userInfoOpen ? faCaretUp : faCaretDown}
                />
            </div>
            {userInfoOpen && (
                <div className={styles.userNavBoxDropdown}>
                    <ul>
                        {isAdmin && <li>Admin</li>}
                        <li>Profile</li>
                        <li>Settings</li>
                        <Logout />
                    </ul>
                </div>
            )}
        </button>
        
    );
}

export default UserNavBox;
