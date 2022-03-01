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

  it('сортирует вложение по алфавиту', () => {
    const input: Category[] = [
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: 'A', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: 'B', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: 'D', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: 'C', strCategoryDescription: '',
      },
    ];
    const output: Category[] = [
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: 'A', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: 'B', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: 'C', strCategoryDescription: '',
      },
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: 'D', strCategoryDescription: '',
      },
    ];
    expect(service.sortHeaders(input, ['idCategory', 'strCategory', 'strCategoryThumb', 'strCategoryDescription'], 1)).toEqual(output);
  });

  it('сортирует описание по алфавиту', () => {
    const input: Category[] = [
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: 'A', strCategoryDescription: 'D',
      },
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: 'B', strCategoryDescription: 'A',
      },
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: 'D', strCategoryDescription: 'C',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: 'C', strCategoryDescription: 'B',
      },
    ];
    const output: Category[] = [
      {
        idCategory: '2', strCategory: 'D', strCategoryThumb: 'B', strCategoryDescription: 'A',
      },
      {
        idCategory: '2', strCategory: 'C', strCategoryThumb: 'C', strCategoryDescription: 'B',
      },
      {
        idCategory: '2', strCategory: 'A', strCategoryThumb: 'D', strCategoryDescription: 'C',
      },
      {
        idCategory: '2', strCategory: 'B', strCategoryThumb: 'A', strCategoryDescription: 'D',
      },
    ];
    expect(service.sortHeaders(input, ['idCategory', 'strCategory', 'strCategoryThumb', 'strCategoryDescription'], 2)).toEqual(output);
  });
});
