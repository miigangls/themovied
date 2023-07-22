import { users } from "./db";

export async function signInWithEmailAndPassword(user: string, password: string) {
  return users.find((row)=> (row.userName === user && row.password === password ));
}