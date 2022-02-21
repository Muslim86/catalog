import service from '../catalogListStore.service';
import { Category } from '../../../models/Category';

describe('Сервис catalogListStore', () => {
  it('сортирует объекты по алфавиту', () => {
    const input: Category[] = [
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: '', strCategoryDescription: '',
      },
    ];
    const output: Category[] = [
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: '', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: '', strCategoryDescription: '',
      },
    ];
    expect(service.sortCategories(input)).toEqual(output);
  });
});
