import download from './directives/download.js';

const directives = [
    download
];

const directiveInstall = {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive);
        })
    }
};

export default directiveInstall;

export {
    download
};