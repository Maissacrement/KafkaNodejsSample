import Producer from '../../classes/Producer';

interface IMSG {
  messages: string,
  topic: string
} 

// Create a producer
const submit = new Producer();

// Create a Topic
const argsTopic: IMSG = {
  messages: "open topics",
  topic: "first-topic"
}
const newTopic = submit.newTopics(argsTopic);

// Open my topic
submit.openTopics(newTopic);

// Send a Topic
const sendTopic = (req: any, res: any) => {
  const topicObj: IMSG = req.query;

  // Send my topic
  submit.sendBrokerOnTopic([
    topicObj
  ])

  process.stdout.write('success');
  res.end();
};


const createANewTopic = (req: any, res: any) => {
  const topicObj: IMSG[] = req.params;

  // create a new topic
  submit.openTopics([
    ...topicObj
  ]);

  process.stdout.write('success');
  res.end();

};

export { sendTopic, createANewTopic };
