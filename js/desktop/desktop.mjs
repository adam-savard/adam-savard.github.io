import { Shortcut } from '../shortcut/shortcut.mjs';
import { resume } from '../content/resume.mjs';
const Desktop = class {
    /**
     * Create a 'desktop' that the visitor of the page will be able to interact with
     */
    constructor() {
        let spacing = '10px'; //this is the amount of spacing between the icons

        let resumeShortcut = new Shortcut({
            image: 'https://adam-savard.github.io/images/resume.png',
            windowContent: resume,
            windowOptions: {},
        });
    }
};
