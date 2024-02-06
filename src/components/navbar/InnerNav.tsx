import React from "react";
import styles from "./navbar.module.css";

function InnerNav({ popular = "" }: { popular: string }) {
    return (
        <div className={styles.innerNavigation}>
            <div className={styles.innerNavigationCategoryList}>
                <h3>Categories</h3>
                <ul>
                    <li>Action</li>
                    <li>Fantasy</li>
                    <li>Horror</li>
                    <li>Thriller</li>
                </ul>
            </div>
        </div>
    );
}

export default InnerNav;
