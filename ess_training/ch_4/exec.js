var exec = require("child_process").exec;

// exec("open http://linkedin.com");
// exec("open -a Terminal .");
// exec("ls", function(err, stdout) {
//     if (err) {
//         throw err;
//     }

//     console.log("Listing finished");
//     console.log(stdout);
// });

exec("git version", function(err, stdout) {
    if (err) {
        throw err;
    }

    console.log("Git version executed");
    console.log(stdout);
});

