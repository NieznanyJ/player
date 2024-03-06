"use client"

import React, {useState} from "react";
import styles from "../registration/registration.module.css";
import Link from "next/link";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";



function LoginForm() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassowrd] = useState<string>("");
    const router = useRouter();

    

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
                const res = await signIn('credentials', {
                    username: username,
                    password: password,
                    redirect: false,
                    callbackUrl: '/', 
                    onSuccess: () => {
                        window.location.reload();

                      },
                });
                if (res?.ok) {
                    router.back();
                        
                } else {
                    console.error('Authentication error:', res?.error);
                        
                }
            } catch (error) {
            console.error('Authentication error:', error);
            
          }
      
        
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.registerForm}>
            <label>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Username" />

            <label>Password</label>
            <input onChange={(e) => setPassowrd(e.target.value)} name="password" type="password" placeholder="Password" />

            <p>
                Dont have an account?{" "}
                <Link className={styles.loginLink} href="/register">
                    Register
                </Link>
            </p>
            <button  className={styles.button} type="submit" value="Login">
                Login
            </button>
        </form>
    );
}

export default LoginForm;
