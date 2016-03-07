import 'bootstrap';
import 'bootstrap/css/bootstrap.css!'

import _ from 'lodash';
import $ from 'jquery';

import * as LexicalAnalyser from '../xxx/lesson_01-base/lexical-analyzer';

import { create as createLogger } from '../xxx/lesson_04-logger/logger';
const logger = createLogger('Lesson 6');
logger.log('I’m up !');

import debounce from '../lesson_05-timeouts/debounce';


let textareaElement;
let resultsElement;

window.onChange = function () {
  updateResults();
};


function updateResults() {
  logger.log('updating results...');
  textareaElement = textareaElement || $('#inputText');
  resultsElement = resultsElement || $('#results');

  let text = textareaElement.val();

  let index = LexicalAnalyser.index(text);


  // todo sort by rank
}
