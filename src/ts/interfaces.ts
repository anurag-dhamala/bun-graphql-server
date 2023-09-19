export interface Context { 
    user: UserInterface | null
}

export interface UserInterface { 
    userName: string;
    email: string;
}