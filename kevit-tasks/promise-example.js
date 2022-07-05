const A = () => {
    return new Promise((resolve, reject) => {
        resolve(console.log("Promise A resolved!"));
    });
};

const B = () => {
    return new Promise((resolve, reject) =>
        resolve(console.log("Promise B resolved!"))
    );
};

const C = () => {
    return new Promise((resolve, reject) =>
        resolve(console.log("Promise C resolved!"))
    );
};

const D = () => {
    return new Promise((resolve, reject) =>
        resolve(console.log("Promise D resolved!"))
    );
};
async function start() {
    console.log("Inside START function");
    await Promise.all([D(), A().then(B())]).then(() => C());
}

start().then(function end() {
    console.log("Inside END Function");
});