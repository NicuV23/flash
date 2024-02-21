import React from "react";

interface FlashCardProps {
  question: {
    id: number;
    question: string;
    answer: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  question,
  isSelected,
  onSelect,
}) => (
  <div
    onClick={onSelect}
    className={`flashcard ${isSelected ? "selected" : ""}`}
  >
    {isSelected ? question.answer : question.question}
  </div>
);

export default FlashCard;
