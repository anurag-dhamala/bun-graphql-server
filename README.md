# bun-graphql-server

Bun works seamlessly with `@apollo/server` and `graphql`.  

Everything including contexts, validations, and schemas works perfectly. 

Do clone the repo to easily start with bun and graphql server.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

The project runs on port `8080`.

The available graphql queries in this templates are as follows: 

1. ```
    query ExampleQuery {
        user {
         name,
         address
        }
    }

    ```

2. ```
    query ExampleQuery {
        sample {
            test
        }
    }

    ```


-------

First query is simple and will run without any issues.

The second query is protected with authorization if you navigate to `SampleResolver.ts`. To pass the authorization check, go to `index.ts` and pass user object in context instead of null.


For more information on apollo server: 
https://github.com/apollographql/apollo-server

