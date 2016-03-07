
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!'

import _ from 'lodash';
import $ from 'jquery';

import * as LexicalAnalyser from '../lesson_01-base/lexical-analyzer';

import logger from '../lesson_04-logger/logger';

import debounce from '../lesson_05-timeouts/debounce';


let textareaElement;
let resultsElement;

window.onChange = function () {
  updateResults();
};


function updateResults() {
  textareaElement = textareaElement || $('#inputText');
  resultsElement = resultsElement || $('#results');

  let text = textareaElement.val();

  let index = LexicalAnalyser.index(text);


  // todo sort by rank
}
