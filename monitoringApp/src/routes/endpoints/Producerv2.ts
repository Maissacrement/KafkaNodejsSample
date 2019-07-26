import kafka = require("kafka-node");
const KeyedMessage = kafka.KeyedMessage;
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({
  kafkaHost: "127.0.0.1:9092"
});
const producer = new Producer(client);
const km = new KeyedMessage("key", "message");
const payloads = [
  { topic: "hello-world", messages: "hi", partition: 0 },
  { topic: "hello-world", messages: ["hello", "world", km] }
];

// Send successfull
const successfull = (res: any) => {
  return res.status(200).json({
    message: "Message broker successfully send",
    status: 200
  });
};

// Test create manually topic
const topicsToCreate: Array<any> = [
  {
    messages: "hi",
    partitions: 3,
    replicationFactor: 1,
    topic: "sql"
  },
  {
    messages: "hi",
    partitions: 3,
    replicationFactor: 1,
    topic: "system"
  }
];

const openTopics = (topic: Array<any>) => {
  client.createTopics(topic, (err: any, result: any) => {
    // result is an array of any errors if a given topic could not be created
    if (err) {
      throw new Error(err);
    }

    process.stdout.write("\nTopic creation logs by Producer:\n");
    process.stdout.write(JSON.stringify(result, null, " ") + "\n");
    //successfull(res);
  });
}

// Generate a topics
openTopics(topicsToCreate);

// Send a Topic
const sendTopic = (_: any, res: any) => {
  producer.send(payloads, (err: any, data: any) => {
    if (err) {
      throw new Error(err);
    }

    process.stdout.write("\nSend topic logs by Producer:\n");
    process.stdout.write(JSON.stringify(data, null, " ") + "\n");
    successfull(res);
  });
};


const createANewTopic = (_: any, res: any) => {
  process.stdout.write('success');
  res.end();

};

export { sendTopic, createANewTopic };
