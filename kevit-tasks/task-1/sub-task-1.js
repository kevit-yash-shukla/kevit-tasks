const timeoutPromise = (interval, intervalName) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(
                `Executed ${intervalName} at: ${new Date().toString()} with interval of ${interval}`
            );
            resolve();
        }, interval);
    });
};
async function main() {
    console.log("Starting at:", new Date().toString()); // Insert your code here
    await Promise.all([
        timeoutPromise(1000, "IN1"),
        timeoutPromise(3000, "iN2"),
        timeoutPromise(2000, "iN3"),
        timeoutPromise(4000, "IN4"),
        timeoutPromise(2000, "iN5"),
    ]);
    console.log("Completed at:", new Date().toString());
}

main();