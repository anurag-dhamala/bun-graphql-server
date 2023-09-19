export const getSampleData=()=> {
    // you can make the database calls here.

    // you can use async, await without any issues.
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve({
                test: "Hello from sample"
            })
        }, 1000);
    })
}