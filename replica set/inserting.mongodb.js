// use to display status of replica set
// rs.status()

use ("workshop");
// clean collection before start
db.counters.deleteMany({});

let counter = 1;
const max = 1000; // maximal number of documents to add
const delay = 50; // how many ms to wait after insert



async function addDocuments() {
  for (let i = 0; i < max; i++) {
    try {
      const doc = { counter: counter, timestamp: new Date() };
      await db.counters.insertOne(doc);
      counter++;
      print(`Document added: ${JSON.stringify(doc)}`);
    } catch (err) {
      print(`❌ Error: ${err.message}`);
    }
    await sleep(delay);
  }

  const count = await db.counters.countDocuments();
  print(`✅ Total documents count: ${count}`);
}

addDocuments();
