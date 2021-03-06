/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {RecipeTypes} from '../actions/ActionTypes';

const recipes = (state = [], action) => {
	switch (action.type) {
		case RecipeTypes.INGEST_RECIPE:
			return [
				...state,
				{
					id: action.id,
					text: action.recipe.title,
					recipe: action.recipe,
					selected: false
				}
			];
		case RecipeTypes.HIGHLIGHT_RECIPE:
			return state.map(recipe =>
				(recipe.id === action.id)
				? {...recipe, selected: !recipe.selected}
				: recipe
			);
		default:
			return state;
	}
};

export default recipes