import { Question } from '../types/Question';

type Props ={
    questions: Question[];
    answers: number[];
}

export const Results = ({ questions, answers}: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-5">
                    <div className="font-bold">{key + 1} {item.question}</div>
                    <div className="text-sm text-gray-500">Your Answer: ({item.answer === answers[key] ? `You're right` : 'You missed'})</div>
                    <div className="text-sm text-gray-500">Correct Answer: {item.options[item.answer]}</div>
                </div>
            ))}
        </div>
    );
}