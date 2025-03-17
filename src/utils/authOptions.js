import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

export const authOptions = { 
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                authorization: {
                    params:{
                        prompt: 'consent',
                        access_type: 'offline',
                        response_type: 'code'
                    }
                }
            }
        )
    ],
    callbacks: {
        // invoked on successful sign in
        async signIn({ profile }){
            //1. connect to the database
            //2. check if user exists
            //3. if not, create user
            //4. return true allow to sign in
        },
        //session callback function that modifies the session object
        async session({ session }){
            //1. get user from database
            //2. assign user id for session
            //3. return session
        }
    }
}