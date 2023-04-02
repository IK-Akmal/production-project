import { classNames } from '.';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('sameclassName')).toBe('sameclassName');
    });

    test('with multiple parameters', () => {
        expect(classNames('sameclassName', 'class1', 'class2'))
            .toBe('sameclassName class1 class2');
    });

    test('with mods', () => {
        expect(classNames('sameclassName', 'class1', 'class2', {
            visibility: true,
            opacity: false,
        }))
            .toBe('sameclassName class1 class2 visibility');
    });

    test('with nullble', () => {
        expect(classNames('sameclassName', undefined, 'class2', {
            visibility: true,
            opacity: false,
            isNull: null,
        }, null))
            .toBe('sameclassName class2 visibility');
    });
});
