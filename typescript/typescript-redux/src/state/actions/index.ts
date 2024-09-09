import { ActionType } from "../action-types";

interface search_repositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface search_repositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface search_repositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = 
 | search_repositoriesAction
 | search_repositoriesSuccessAction
 | search_repositoriesErrorAction;