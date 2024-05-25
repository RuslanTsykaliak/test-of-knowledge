type AnswerOptionT = {
  answerText: string;
  isCorrect: boolean;
};

type QuestionT = {
  questionText: string;
  answerOptions: AnswerOptionT[];
};

export type QuizT = {
  id: string;
  title: string;
  questions: QuestionT[];
};
