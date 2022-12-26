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

DomElement.prototype.taskTwo = function () {
    let left = 0
    let top = 0
    let newElem = document.createElement('div')

    const drawSquare = function (direction) {
        newElem = document.querySelector('.square')

        switch (direction) {
            case 'ArrowRight':
                left += 10
                break;
            case 'ArrowDown':
                top += 10
                break;
            case 'ArrowLeft':
                left -= 10
                break;
            case 'ArrowUp':
                top -= 10
                break;
        }

        newElem.style.left = `${left}px`
        newElem.style.top = `${top}px`
    }

    document.addEventListener('DOMContentLoaded', () => {
        newElem.classList.add('square')
        newElem.style.cssText =
            `height: ${this.height}; width: ${this.width};
        background: ${this.bg}; position: absolute; left: ${left}px; top: ${top}px`
        document.body.append(newElem)
    })

    document.body.addEventListener('keydown', (event) => {
        drawSquare(event.code)
    })
}

const test = new DomElement('#header', '100px', '200px', 'green', '14px')
const test1 = new DomElement('.footer', '100px', '100px', 'blue', '10px')

test.taskOne()
test1.taskOne()
test1.bg = 'red'
test1.taskTwo()