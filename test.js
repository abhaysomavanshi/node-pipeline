console.log("Running Node.js test...");

const a = 10;
const b = 20;
const result = a + b;

if (result === 30) {
    console.log("TEST PASSED");
    process.exit(0);
} else {
    console.log("TEST FAILED");
    process.exit(1);
}
