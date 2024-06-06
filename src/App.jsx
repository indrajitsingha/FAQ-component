import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FAQComponent from './FAQComponent';
const data = [
  {
    question: 'What is React.js?',
    answer:
      'React.js is a JavaScript library for building user interfaces, maintained by Facebook.',
  },
  {
    question: 'What are components in React?',
    answer:
      'Components are the building blocks of a React application. They can be functional or class-based.',
  },
  {
    question: 'What is JSX?',
    answer:
      'JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM.',
  },
  {
    question: 'What are props in React?',
    answer:
      'Props are short for properties. They are read-only attributes used to pass data from one component to another.',
  },
  {
    question: 'What is state in React?',
    answer:
      'State is a built-in object that stores property values that belong to the component. When the state changes, the component re-renders.',
  },
  {
    question: 'What is the use of useState hook?',
    answer:
      'The useState hook is a function that lets you add React state to functional components.',
  },
  {
    question: 'What is a virtual DOM?',
    answer:
      'The virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM.',
  },
  {
    question: 'What is a lifecycle method in React?',
    answer:
      "Lifecycle methods are special methods in class components that allow you to run code at specific times in the component's life.",
  },
  {
    question: 'What is a React Hook?',
    answer:
      'Hooks are functions that let you use state and other React features in functional components.',
  },
  {
    question: 'What is React Router?',
    answer:
      'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React application.',
  },
];

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React FAQ component</h1>
      {data.map((val) => (
        <FAQComponent key={val} value={val} />
      ))}
    </>
  );
}

export default App;
