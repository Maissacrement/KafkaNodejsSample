const kafka = require('kafka-node'),
      Producer = kafka.Producer,
      KeyedMessage = kafka.KeyedMessage,
      client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'}),
      producer = new Producer(client),
      km = new KeyedMessage('key', 'message'),
      payloads = [
          { topic: "hello-world", messages: 'hi', partition: 0 },
          { topic: "hello-world", messages: ['hello', 'world', km] }
      ];

const successfull = (res: any) => {
  return res.status(200).json({
    status: 200,
    message: "Message broker successfully send"
  });
}

const sendTopic = (_: any, res: any) => {
  producer.send(payloads, function (err: any, data: any) {
    if (err) throw new Error(err);

    console.log(data);
    successfull(res);
  });
}

// Test create manually topic
const topicsToCreate: any = [{
  topic: "hello-world3",
  partitions: 3,
  replicationFactor: 1,
  messages: 'hi'
}];

const createANewTopic = (_: any, res: any) => {
  client.createTopics(topicsToCreate , (err: any, result: any) => {
   // result is an array of any errors if a given topic could not be created
   if (err) throw new Error(err);

   console.log(result);
   successfull(res);
  });
}

export { sendTopic, createANewTopic };
