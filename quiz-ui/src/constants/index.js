export const REQUEST_QUIZ = 'REQUEST_QUIZ';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';
export const REQUEST_QUIZ_ERROR = 'REQUEST_QUIZ_ERROR';
export const SELECT_OPTION = 'SELECT_OPTION';
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';
export const TOGGLE_RESULT = 'TOGGLE_RESULT';
export const RECEIVE_QUESTION_RESULT = 'RECEIVE_QUESTION_RESULT';
export const POST_QUESTION_ANSWER = 'POST_QUESTION_ANSWER';
export const POST_QUESTION_ANSWER_SUCCESS = 'POST_QUESTION_ANSWER_SUCCESS';
export const POST_QUESTION_ANSWER_ERROR = 'POST_QUESTION_ANSWER_ERROR';

export const DEVELOPMENT = process.env.NODE_ENV == 'development';
export const PRODUCTION = process.env.NODE_ENV == 'production';
