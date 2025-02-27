export const BASE_SERVER_URL = 'http://localhost:8000';

export interface GeneralState {
  isSuccess: boolean;
  isLoading: boolean;
  error: string | null;
}

export const InitialGeneralState: GeneralState = {
  isSuccess: false,
  isLoading: false,
  error: null,
};