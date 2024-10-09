import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "../components";
import Header from "../components/Header";

const QuestionnairePage = () => {
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            procedure: "GET_QUESTION",
            user_id: 10006,
            payload: {
              question_number: questionNumber
            }
          })
        });
        const data = await response.json();
        console.log("API Response:", data);

        if (data && data.question_data) {
          setQuestion(data.question_data);
        } else {
          console.error("No question found for number:", questionNumber);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [questionNumber]);

  const handleNextQuestion = () => {
    setQuestionNumber((prevNumber) => prevNumber + 1);
  };

  const handleBackQuestion = () => {
    setQuestionNumber((prevNumber) => Math.max(prevNumber - 1, 1));
  };

  return (
    <>
      <Helmet>
        <title>Questionnaire - EcoEasi</title>
        <meta name="description" content="Participate in the EcoEasi questionnaire to provide your insights." />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="container mt-[120px]">
          <Heading size="heading4xl" as="h1" className="text-center">
            Questionnaire
          </Heading>
          {question ? (
            <div className="question-container mt-10">
              <Text as="p" className="question-number">
                Question {question.question_ranking}
              </Text>
              <Text as="p" className="question-text">
                {question.question_text}
              </Text>
              <Text as="p" className="answer-type-text">
                Answer Type: {question.answer_type}
              </Text>
              <div className="button-container mt-5">
                <Button onClick={handleBackQuestion} disabled={questionNumber === 1}>Back</Button>
                <Button onClick={handleNextQuestion}>Next Question</Button>
              </div>
            </div>
          ) : (
            <Text as="p" className="loading-text mt-10">Loading question...</Text>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionnairePage;
