import kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: "127.0.0.1:9092" });

const consumer = new Consumer(
  client,
  [{ topic: "first-topic" }],
  {
    autoCommit: false
  }
);

consumer.on("message", async response => {
  process.stdout.write("\nTopic receive message by Consumer:\n");
  process.stdout.write(JSON.stringify(response, null, " ") + "\n");

});

consumer.on('error', (err: any) => {
  process.stdout.write(
    JSON.stringify({
      'error': err
    }, null, " ") + "\n");
})