export const UserSchema =  `#graphql

    type User {

        "Name of the user"
        name: String!,

        "Address of the user"
        address: String,

    }

    type Query {
        user: User
    }
`