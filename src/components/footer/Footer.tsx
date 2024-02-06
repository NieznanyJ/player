import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.column}>
                <h3>Company</h3>
                <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Jobs</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Support</h3>
                <ul>
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>Get in touch</h3>
                <ul>
                <li>Contact</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                </ul>
            </div>
        </div>

    </footer>
  )
}

export default Footer