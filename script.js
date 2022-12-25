'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.taskOne = function () {
    let newEl

    switch (this.selector[0]) {
        case '#':
            newEl = document.createElement('p')
            newEl.id = this.selector.slice(1)
            break;

        case '.':
            newEl = document.createElement('div')
            newEl.classList.add(this.selector.slice(1))
            break;

        default:
            return
    }
    newEl.style.cssText = `height: ${this.height}; width: ${this.width};
        background: ${this.bg}; font-size: ${this.fontSize}`

    newEl.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laboriosam, at beatae! Accusantium eligendi at id!`

    document.body.append(newEl)
}

const test = new DomElement('#header', '100px', '200px', 'green', '14px')
const test1 = new DomElement('.footer', '150px', '100px', 'blue', '10px')

test.taskOne()
test1.taskOne()