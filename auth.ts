import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
// Your own logic for dealing with plaintext password strings; be careful!

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {label:'Username'},
        password: {label: 'password', type:'password'},
      },
      authorize: async (credentials) => {
        // Only allow admin/admin credentials
        if(!credentials?.username || !credentials?.password){
          return null;
        }
        const username = String(credentials.username).trim();
        const password = String(credentials.password).trim();
        
        // Strict check: only "admin" username and "admin" password
        if(username === 'admin' && password === 'admin'){
          return{
            id:"1",
            name:'admin'
          }
        }
        // Reject all other credentials
        return null;
      },
      }),
      ]
      })