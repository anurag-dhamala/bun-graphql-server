import { ApolloServer } from "@apollo/server";
import typeDefinitions from "./src/schemas";
import resolvers from "./src/resolvers";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getUserFromToken } from "./src/utils/user-utils";
import { Context, UserInterface } from "./src/ts/interfaces";

const server = new ApolloServer<Context>({
    typeDefs: typeDefinitions,
    resolvers: resolvers,
    // you can enable introspection in development and disable it in production.
    introspection: false,
});

await startStandaloneServer(server, {
    listen: {
        port: 8080,
        path: "/graphql",
    },
    context: async ({req, res})=> {
        res.setHeader("x-powered-by", "Bun")

        // you can get the authorization from headers and add the data in the context.
        const authorization = req.headers.authorization || '';
        const user: UserInterface = await getUserFromToken(authorization);

        // adding user in the context object.
        return {
            // provider user that we fetched from our fake token getter above.
            user: null
        };
    }
});
