export default class Popover {
  constructor(trigger, title, text) {
    this.trigger = trigger;
    this.title = title;
    this.text = text;
    this.popover = this.createPopover();

    document.body.appendChild(this.popover);
    this.addEvents();
  }

  createPopover() {
    const pop = document.createElement('div');
    pop.className = 'popover';
    pop.style.display = 'none'; // скрыт по умолчанию
    pop.innerHTML = `
  <div class="popover-title">${this.title}</div>
  <div class="popover-text">${this.text}</div>
`;
    return pop;
  }

  addEvents() {
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    document.addEventListener('click', (e) => {
      if (!this.popover.contains(e.target)) {
        this.hide();
      }
    });
  }

  toggle() {
    if (this.popover.style.display === 'block') {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    const rect = this.trigger.getBoundingClientRect();
    this.popover.style.display = 'block';
    const { offsetWidth, offsetHeight } = this.popover;
    this.popover.style.left = `${rect.left + rect.width / 2 - offsetWidth / 2}px`;
    this.popover.style.top = `${rect.top - offsetHeight - 8}px`;
  }

  hide() {
    this.popover.style.display = 'none';
  }
}
