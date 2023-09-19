export const SampleSchema =  `#graphql

    type Sample {

        "Test field"
        test: String!

    }

    type Query {
        sample: Sample
    }
`