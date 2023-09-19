import { UserInterface } from "../ts/interfaces";

export const getUserFromToken=(token: string) => {
    //decode, validate and verify the token, get token payload.
    return new Promise<UserInterface>((resolve, reject)=> {
        resolve({
            userName: "John Doe",
            email: "johndoe@gmail.com"
        })
    });
}