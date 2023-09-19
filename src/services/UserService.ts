export const getUserFromDb=()=> {

    // mock database call.
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve({
                name: "John Doe",
                address: "Venus"
            })
        }, 1000)
    });
}