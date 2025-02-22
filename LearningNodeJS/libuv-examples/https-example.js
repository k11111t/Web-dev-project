const https = require('node:https')

// https does not use a thread pool - average time is the same for an arbitrary number of http calls
// it is not affected by the number of cpu cores
// because https is network i/o operations, not cpu bound
// it offsets the responsibility to the OS kernel
const start = Date.now()
const MAX_CALLS = 20;
for(let i=0; i< MAX_CALLS; i++) {
    https
        .request("https://www.google.com", res => {
            res.on("data", ()=>{});
            res.on("end", () => {
                console.log(`request: ${i+1}`, Date.now() - start)
            })
        })
        .end()
}