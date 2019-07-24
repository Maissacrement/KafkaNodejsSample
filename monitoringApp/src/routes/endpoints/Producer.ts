/*
import {IProducerConfig, ProducerConfig, SimpleProducer} from "kafka-typescript-v2"

const rdkafka = require("node-rdkafka")
const rdkafkaProducer = rdkafka.Producer

const producers: { [topic: string]: SimpleProducer } = {}

const createTopicProducer = async (topic: string, config: IProducerConfig) => {
  const prod= await new SimpleProducer();
  prod.create(rdkafkaProducer, config)
      .connect();

  prod.setTopic(topic);
  producers[topic] = prod;
  return prod;
}

const sendTopic = (_: any, res: any) => {
  createTopicProducer("hello-world", new ProducerConfig("127.0.0.1", "9092"))
  .then(() => {
    producers["hello-world"].send("1", Buffer.from("hello"));

  }).catch(err => console.error(`${err}`))

  res.send("yes");
}

export default sendTopic;*/
