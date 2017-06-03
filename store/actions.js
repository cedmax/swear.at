import constants from './constants';
import {createActionCreator} from '../helpers/redux';

export const updateInsult = createActionCreator(constants.UPDATE_INSULT)
export const updateName = createActionCreator(constants.UPDATE_NAME)