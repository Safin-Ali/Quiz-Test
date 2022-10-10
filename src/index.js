import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/header/banner/Banner';
import Main from './components/main/Main';
import QuizSubjects from './components/main/quiz-subject/QuizSubjects';
import QuizList from './components/main/quiz-page/QuizList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {path:'/',element: <App></App>,children:[
    {path:'/',element:<Banner></Banner>},
    {path:'/subjects',element:<Main></Main>,children:[
      {path:'/subjects',element:<QuizSubjects></QuizSubjects>},
    ]},
    {path:'/:sub/:id', loader:async ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),element:<QuizList></QuizList>}
  ]},
])
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
