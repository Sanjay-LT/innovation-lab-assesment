// 1. Callback Function Example
function runTaskWithCallback() {
  const statusElement = document.getElementById('callback-status');
  statusElement.textContent = "Status: Working...";
  
  console.log("Task started - waiting for callback...");
  
  // Simulate async operation with callback
  setTimeout(() => {
    completeTask();
    statusElement.textContent = "Status: Completed!";
  }, 1500);
}

function completeTask() {
  console.log("Callback executed - task complete!");
  alert("Task completed successfully!");
}

// 2. Scope Demonstration
function demonstrateScopes() {
  // Global scope variables
  var functionScopedVar = "Function scoped (var)";
  let blockScopedLet = "Block scoped (let)";
  const blockScopedConst = "Block scoped (const)";

  console.log("--- Outer Scope ---");
  console.log("var:", functionScopedVar);
  console.log("let:", blockScopedLet);
  console.log("const:", blockScopedConst);

  if (true) {
    // Block scope variables
    var innerVar = "Inner var (function scoped)";
    let innerLet = "Inner let (block scoped)";
    const innerConst = "Inner const (block scoped)";

    console.log("\n--- Inner Block Scope ---");
    console.log("Inner var:", innerVar);
    console.log("Inner let:", innerLet);
    console.log("Inner const:", innerConst);
  }

  console.log("\n--- After Block ---");
  console.log("Inner var (still accessible):", innerVar);
  // console.log(innerLet); // Would throw ReferenceError
  // console.log(innerConst); // Would throw ReferenceError
}

// 3. Closure Example
const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    document.getElementById('counter-display').textContent = `Count: ${count}`;
    console.log(`Current count: ${count}`);
    return count;
  };
};

const counter = createCounter();

function testCounter() {
  counter();
}