import kafka = require("kafka-node");

interface ITopics {
  messages: string,
  topic: string
}

interface ITopicsAndPartition extends ITopics {
  partitions?: number,
  replicationFactor?: number
}

export default class Producer {
  private KeyedMessage: any;
  private Producer: any;
  private client: any;

  constructor() {
    this.KeyedMessage = kafka.KeyedMessage;
    this.Producer = kafka.Producer;
    this.client = new kafka.KafkaClient({
      kafkaHost: "127.0.0.1:9092"
    });
  }

  public newTopics(topic : (ITopics | ITopicsAndPartition)): ITopicsAndPartition[] {
    // const onlySimpeTopic: boolean = !Object.prototype.hasOwnProperty.call(topic, 'patitions');
    const FullTopic: any = {
      partitions: 3,
      replicationFactor: 1
    }

    return [
      {
        ...FullTopic,
        ...topic
      }
    ]
  }

  public openTopics(topic: ITopicsAndPartition[]): any {
    this.client.createTopics(topic, (err: any, result: any) => {
      // result is an array of any errors if a given topic could not be created
      if (err) {
        throw new Error(err);
      }
  
      process.stdout.write("\nTopic creation logs by Producer:\n");
      process.stdout.write(JSON.stringify(result, null, " ") + "\n");
    });
  }

  public sendBrokerOnTopic(msg: ITopics[]) {
    this.getProducer()
      .send(msg, (err: any, data: any) => {
        if (err) {
          throw new Error(err);
        }
    
        process.stdout.write("\nSend topic logs by Producer:\n");
        process.stdout.write(JSON.stringify(data, null, " ") + "\n");
      });
  }

  public greet(): string {
    return `Bonjour, ${this.KeyedMessage}, ${this.Producer}, ${this.client}!`;
  }

  private getProducer(): kafka.Producer {
    return new this.Producer(this.client);
  }
}