const start = Date.now()

/// sync code
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');

// console.log(Date.now() - start)

///async code
// libuv has max 4 threads by default, we can set the maximum number of threads
process.env.UV_THREADPOOL_SIZE = 5
const MAX_CALLS = 10

const crypto = require('node:crypto')
for(let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
        console.log(`hash: ${i}`, Date.now() - start)
    })
}