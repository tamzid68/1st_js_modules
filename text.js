const items = [1, 2, 3];

async function asyncOperation(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Async operation done for item: ${item}`);
      resolve();
    }, 1000);
  });
}

async function processItems() {
  console.log("Starting for...of loop");

  for (const item of items) {
    console.log(`Processing item: ${item}`);
    await asyncOperation(item);
    console.log(`Finished item: ${item}`);
  }

  console.log("All iterations completed!");
}

processItems();
