import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './conteiners/Quiz/Quiz.js'
import QuizCreator from './conteiners/QuizCreator/QuizCreator'
import QuizList from './conteiners/QuizList/QuizList'
import Auth from './conteiners/Auth/Auth'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
