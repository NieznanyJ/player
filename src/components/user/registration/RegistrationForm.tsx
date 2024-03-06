import React from 'react'
import { addUser, getUser } from '@/lib/db'
import styles from './registration.module.css'
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function addNewUser(data:FormData) {
    "use server";
    try{
        await addUser(data);
       
    }
    catch(error){
        console.error(error)
    }
    redirect('/login');
}

function RegistrationForm() {
  return (
    <form action={addNewUser} className={styles.registerForm}>
                <label>Username</label>
                <input name="username" type="text" placeholder="Username" />
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" />
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" />
                <label>Repeat password</label>
                <input name="repeat-password" type="password" placeholder="Repeat password" />
                <p>Already have an account? <Link className={styles.loginLink} href="/login">Login</Link></p>
                <button className={styles.button} type="submit" value="Login" >Register</ button>
            </form>
  )
}

export default RegistrationForm