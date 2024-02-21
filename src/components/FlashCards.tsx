import React, { useState } from "react";
import FlashCard from "./FlashCard";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
  },
  {
    id: 7,
    question: "What is the React hook used for side effects?",
    answer: "useEffect",
  },
  {
    id: 8,
    question: "What is the virtual DOM?",
    answer: "A lightweight copy of the real DOM",
  },
  {
    id: 9,
    question: "How can you optimize performance in React?",
    answer: "Memoization and PureComponent",
  },
];

const FlashCards: React.FC = () => {
  const [selectedID, setSelectedID] = useState<number | null>(null);

  const handleCardSelect = (id: number) => {
    setSelectedID(id === selectedID ? null : id);
  };

  return (
    <div className="flashcards">
      {questions.map((item) => (
        <FlashCard
          key={item.id}
          question={item}
          isSelected={item.id === selectedID}
          onSelect={() => handleCardSelect(item.id)}
        />
      ))}
    </div>
  );
};

export default FlashCards;
