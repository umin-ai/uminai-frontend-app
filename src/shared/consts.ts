export const BASE_SERVER_URL = 'http://localhost:8000';

export interface GeneralState {
  isSuccess: boolean;
  isLoading: boolean;
  error: any;
}

export const InitialGeneralState: GeneralState = {
  isSuccess: false,
  isLoading: false,
  error: null,
};