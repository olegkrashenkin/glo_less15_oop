'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.createEl = function () {
    switch (this.selector[0]) {
        case '#':
            const p = document.createElement('p')
            p.id = this.selector.slice(1)
            p.style.cssText =
                `height: ${this.height}; width: ${this.width};
                background: ${this.bg}; font-size: ${this.fontSize}`
            p.textContent =
                `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, at beatae! Accusantium eligendi at id!`
            document.body.append(p)
            break;

        case '.':
            const div = document.createElement('div')
            div.classList.add(this.selector.slice(1))
            div.style.cssText =
                `height: ${this.height}; width: ${this.width};
                background: ${this.bg}; font-size: ${this.fontSize}`
            div.textContent =
                `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, at beatae! Accusantium eligendi at id!`
            document.body.append(div)
            break;

        default:
            break;
    }

}

const test = new DomElement('#new_class', '100px', '200px', 'green', '18')

test.createEl()