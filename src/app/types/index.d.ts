export type Card = {
  question: string,
  answer: string,
  category: string
}

export type QuestionEntry = {
  id: string,
  question: string,
  answer: string,
  discipline: string;
  category: string;
};

export type TopicsList = {
  path: string;
  cards: Array<Card>;
  title: string
};
