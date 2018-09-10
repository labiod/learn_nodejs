var waitTime = 3000;
var currentTime = 0;
var waitInterval = 50;
var percentWaited = 0;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0)
    process.stdout.write(`waiting ... ${p}%`)
}

var handler = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100)
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(() => {
    clearInterval(handler);
    writeWaitingPercent(100)
    console.log("\n\ndone\n\n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);