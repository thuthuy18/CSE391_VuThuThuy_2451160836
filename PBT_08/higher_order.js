/* =====================================================
   HIGHER-ORDER FUNCTIONS
   File: higher_order.js
===================================================== */


/* =====================================================
   1. PIPE()
   Nối nhiều function lại với nhau
===================================================== */

function pipe(...fns) {

    return function(value) {

        return fns.reduce((result, fn) => {

            return fn(result);

        }, value);

    };

}


/* =========================
   TEST PIPE
========================= */

const process = pipe(

    x => x * 2,

    x => x + 10,

    x => x.toString(),

    x => "Kết quả: " + x

);

console.log(process(5));


/*
Output:
Kết quả: 20
*/



/* =====================================================
   2. MEMOIZE()
   Cache kết quả đã tính
===================================================== */

function memoize(fn) {

    const cache = {};

    return function(n) {

        // Nếu đã có cache
        if (cache[n]) {

            console.log("Lấy từ cache...");

            return cache[n];

        }

        // Nếu chưa có → tính toán
        const result = fn(n);

        cache[n] = result;

        return result;

    };

}


/* =========================
   TEST MEMOIZE
========================= */

const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {

        result += i;

    }

    return result;

});


console.log(expensiveCalc(1000000));

console.log(expensiveCalc(1000000));


/*
Output lần 1:
Đang tính...
499999500000

Output lần 2:
Lấy từ cache...
499999500000
*/



/* =====================================================
   3. DEBOUNCE()
   Chờ user ngừng gọi mới chạy
===================================================== */

function debounce(fn, delay) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {

            fn(...args);

        }, delay);

    };

}


/* =========================
   TEST DEBOUNCE
========================= */

const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);


// Gọi liên tục
search("i");
search("ip");
search("iph");
search("iphone");


/*
Sau 500ms chỉ in:
Searching: iphone
*/



/* =====================================================
   4. RETRY()
   Thử lại nếu lỗi
===================================================== */

async function retry(fn, maxAttempts = 3) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            return await fn();

        }

        catch (error) {

            console.log(`Lần ${attempt} thất bại`);

            // Nếu hết số lần thử
            if (attempt === maxAttempts) {

                throw error;

            }

        }

    }

}


/* =========================
   TEST RETRY
========================= */

let count = 0;

async function fakeApi() {

    count++;

    if (count < 3) {

        throw new Error("API Error");

    }

    return "API Success";

}


retry(fakeApi)
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.log(error.message);

    });


/*
Output:

Lần 1 thất bại
Lần 2 thất bại
API Success
*/