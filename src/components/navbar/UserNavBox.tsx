"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

function UserNavBox() {
    const [userInfoOpen, setUserInfoOpen] = useState<boolean>(false);
    const admin = true;

    return (
        <div className={styles.userNavBox}>
            <div
                className={styles.userNavBoxItem}
                onClick={() => setUserInfoOpen(!userInfoOpen)}
            >
                <span className={styles.userImage}>User</span>
                <FontAwesomeIcon
                    icon={userInfoOpen ? faCaretUp : faCaretDown}
                />
            </div>
            {userInfoOpen && (
                <div className={styles.userNavBoxDropdown}>
                    <ul>
                        {admin && <li>Admin</li>}
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Log out</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserNavBox;
