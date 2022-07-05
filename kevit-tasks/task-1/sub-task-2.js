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
     console.log("Starting at:", new Date().toString())
     await Promise.all([timeoutPromise(1000, "D"), timeoutPromise(1000, "A").then(timeoutPromise(2000, "B"))]).then(() => timeoutPromise(3000, "C"));
 }

 main().then(function end() {
     console.log("Completed at:", new Date().toString())
 });