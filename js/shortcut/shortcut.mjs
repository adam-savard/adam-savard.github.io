import WinBox from 'https://unpkg.com/winbox@0.2.1/src/js/winbox.js';

const Shortcut = class {
    /**
     * Create a new shortcut to display on the side panel
     * @param {*} options Needs 3 items: `image` (the source), `windowContent` (an HTML element), `windowOptions` (the options when using the window box plugin)
     */
    constructor(
        options = {
            image: 'image source',
            windowContent: document.createElement('div'),
            windowOptions: {},
            parentElement: document.createElement('div'),
            shortcutText: 'A String',
        }
    ) {
        /**
         * The indicator of whether or not this item has been clicked
         */
        this.clicked = false;

        /**
         * Used for setting up the double click; stays at 250ms
         */
        this.doubleclickTimeout = null;

        /**
         * The window content to be displayed by this shortcut
         */
        this.windowContent = options.windowContent;

        /**
         * The windowbox options to use when displaying things
         */
        this.windowOptions = options.windowOptions;

        /**
         * The windowbox to show
         */
        this.windowBox = null;

        let anchor = document.createElement('a');
        anchor.click = this.click.bind(this);

        let image = document.createElement('img');
        image.src = options.image;
        image.style.maxHeight = '50px';
        image.style.maxWidth = '50px';
        anchor.appendChild(image);

        let text = document.createElement('div');
        text.innerHTML = options.shortcutText;

        anchor.appendChild(text);

        let li = document.createElement('li');
        li.appendChild(anchor);

        options.parentElement.appendChild(li);
    }

    showContent() {
        if (this.windowBox) {
            this.windowBox.focus();
        } else {
            this.windowBox = new WinBox({
                ...this.windowOptions,
                x: 'center',
                y: 'center',
                width: '50%',
                height: '50%',
                html: this.windowContent,
                onClose: this.onClose.bind(this),
            });
        }
    }

    onClose() {
        this.windowBox = null;
    }

    click() {
        if (!this.clicked) {
            let _inst = this;
            this.clicked = true;
            this.doubleclickTimeout = setTimeout(function () {
                _inst.clicked = false;
            }, 250);
        } else {
            clearTimeout(this.doubleclickTimeout);
            this.showContent();
        }
    }
};

export { Shortcut };
