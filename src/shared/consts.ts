export const BASE_SERVER_URL = 'http://localhost:8000';
// export const BASE_SERVER_URL = 'https://big-tiffi-selftagger-9164a6f9.koyeb.app';

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

export const descriptionShortener = (description: string) => {
  if (description.length > 100) {
    return description.slice(0, 100) + '...';
  }
  return description;
}