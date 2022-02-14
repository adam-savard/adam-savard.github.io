import { Shortcut } from '../shortcut/shortcut.mjs';
import { resume } from '../content/resume.mjs';
import { attributions } from '../content/attributions.mjs';
const Desktop = class {
    /**
     * Create a 'desktop' that the visitor of the page will be able to interact with
     */
    constructor() {
        let desktopIconsContainer = document.createElement('div');
        let iconList = document.createElement('ul');
        iconList.id = 'icons';
        desktopIconsContainer.appendChild(iconList);
        let resumeShortcut = new Shortcut({
            image: 'https://adam-savard.github.io/images/resume.png',
            windowContent: resume,
            windowOptions: {
                title: `Adam Savard's Resume`,
            },
            parent: iconList,
        });

        let attributionsShortcut = new Shortcut({
            image: 'https://adam-savard.github.io/images/resume.png',
            windowContent: resume,
            windowOptions: {
                title: `Adam Savard's Resume`,
            },
            parent: iconList,
        });

        document.body.appendChild(desktopIconsContainer);
    }
};

export { Desktop };
