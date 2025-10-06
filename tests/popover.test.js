import Popover from '../src/popover';

test('popover toggle methods', () => {
  // Заглушка кнопки с getBoundingClientRect
  const btn = {
    addEventListener: jest.fn(),
    getBoundingClientRect: () => ({ left: 100, top: 100, width: 100, height: 50 })
  };

  const pop = new Popover(btn, 'Title', 'Text');

  // Изначально скрыт
  expect(pop.popover.style.display).toBe('none');

  // show() показывает
  pop.show();
  expect(pop.popover.style.display).toBe('block');

  // hide() скрывает
  pop.hide();
  expect(pop.popover.style.display).toBe('none');

  // toggle() переключает
  pop.toggle();
  expect(pop.popover.style.display).toBe('block');
  pop.toggle();
  expect(pop.popover.style.display).toBe('none');
});
