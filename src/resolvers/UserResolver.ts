import { getUserFromDb } from "../services/UserService";

export const UserResolver = {
    Query: {
        user: ()=> getUserFromDb()
    }
}