import kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: "127.0.0.1:9092" });

const receiveMsgFrom1Topic = (err: any, res: any) => {
  const consumer = new Consumer(
    client,
    [{ topic: "hello-world", partition: 0 }],
    {
      autoCommit: false
    }
  );

  consumer.on("message", async response => {
    process.stdout.write("\nTopic receive message by Consumer:\n");
    process.stdout.write(JSON.stringify(response, null, " ") + "\n");
    res.json({
      message: response,
      status: 200
    });
  });
};

export { receiveMsgFrom1Topic };
