import {CREATE_QUIZ_QESTION, RESET_QUIZ_CREATION} from './actionTypes'
import axios from "../../axios/axios-quiz";

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return async (disatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        disatch(resetQuizCreation())
    }
}