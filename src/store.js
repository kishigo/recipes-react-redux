/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import recipeApp from './reducers'
import { getNextTodoId, getNextRecipeId, getNextIngredientItemId  } from './actions'

// Add routing support, copy example @ https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
/**
 * history for routing
 */
export const history = createHistory();

const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);
/**
 * Some simple state to help us test
 * @type {{todos: [*], visibilityFilter: string}}
 */
let ingredient_1 = getNextIngredientItemId();
let ingredient_2 = getNextIngredientItemId();
let initialState = {todos:[
	{id: getNextTodoId(), text: 'Use Redux', completed: false},
	{id: getNextTodoId(), text: 'Grok Redux Classes',completed: false}],
	recipes:[
		{id: getNextRecipeId(), title: 'stew', selected: false, ingredients:[ingredient_1, ingredient_2]},
		{id: getNextRecipeId(), title: 'apple pie', selected: false, ingredients: [ingredient_1]}],
	ingredients:[
		{id: ingredient_1, name: 'eggs', qty: '18', completed: false},
		{id: ingredient_2, name: 'butter', qty: '1 lb', completed: false}],
	visibilityFilter: "SHOW_ALL"};
/**
 * Allows explicit configuration of store.
 * @returns {*}
 */
export const configureStore = () => {
	let store = createStore(recipeApp, initialState,composedEnhancers);
	console.log(store.getState());
	return store;
};

export default configureStore;