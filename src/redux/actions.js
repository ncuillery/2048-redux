import {hasWon, hasLost} from '../game/end';
import {chooseRandomTile} from '../game/add';

export const ADD_TILE = 'ADD_TILE';
export function addTile(cells) {
  const {row, column, value} = chooseRandomTile(cells);
  return {
    type: ADD_TILE,
    row, column, value
  };
}

export const MOVE = 'MOVE';
function actionMove(direction) {
  return {
    type: MOVE,
    direction
  };
}

export const UPDATE = 'UPDATE';
function update() {
  return {
    type: UPDATE
  };
}

export const START = 'START';
function actionStart() {
  return {
    type: START
  };
}

export const CONTINUE = 'CONTINUE';
export function actionContinue() {
  return {
    type: CONTINUE
  };
}

export const WON = 'WON';
export function won() {
  return {
    type: WON
  };
}

export const LOST = 'LOST';
export function lost() {
  return {
    type: LOST
  };
}

export function move(direction) {
  return (dispatch, getState) => {
    dispatch(actionMove(direction));
    const {board: {cells, changed}} = getState();
    if (changed) {
      dispatch(addTile(cells));
    }
    dispatch(update());
    if (hasWon(cells)) {
      dispatch(won());
    }
    if (hasLost(cells)) {
      dispatch(lost());
    }
  };
}

export function start() {
  return (dispatch, getState) => {
    dispatch(actionStart());
    const {board: {cells}} = getState();
    dispatch(addTile(cells));
    dispatch(update());
  };
}
