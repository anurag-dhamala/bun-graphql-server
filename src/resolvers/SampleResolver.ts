import { GraphQLError } from "graphql"
import { Context } from "../ts/interfaces"
import { getSampleData } from "../services/SampleService";

export const SampleResolver = {
    Query: {
        // you can type the args and parent acc. to your schema.
        sample: (parent: unknown, args: unknown, context: Context) => {
            console.log("the context", context)
            if(!context.user) {
                throw new GraphQLError("Unauthorized", {
                    extensions: {
                        code: "UNAUTHORIZED",
                        http: {status: 401}
                    }
                })
            }

            return getSampleData();
        }
    }
}