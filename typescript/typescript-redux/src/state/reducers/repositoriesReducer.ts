import { error } from "console";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
interface Action {
  type: string;
  payload: any;
}

interface search_repositoriesAction {
  type: 'search_repositories';
}

interface search_repositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

interface search_repositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

const reducer = (
  state: RepositoriesState, 
  action: 
    | search_repositoriesAction 
    | search_repositoriesSuccessAction 
    | search_repositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case 'search_repositories':
      return {
        loading: true,
        error: null,
        data: [],
      };
    case 'search_repositories_success':
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case 'search_repositories_error':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default: 
      return state;

  }
};

export default reducer;