import { Category } from './Category';

export type ViewModel = {
  id: number;
  name: string;
  component: (
    props: Category[],
  ) => JSX.Element;
};
