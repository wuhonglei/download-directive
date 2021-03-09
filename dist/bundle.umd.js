(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.downloadDirective = {}));
}(this, (function (exports) { 'use strict';

    var download = {
        name: 'download',
        inserted: (el, binding) => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                downloadFiles(binding.value);

                function downloadFiles(urls) {
                    if (!Array.isArray(urls)) {
                        urls = [urls];
                    }

                    if (urls.length === 1) {
                        downloadSingleFile(urls[0], window.document);
                        return;
                    }

                    for (let i = 0, len = urls.length; i < len; i++) {
                        downloadFile(urls[i]);
                    }
                }

                function downloadFile(url) {
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.onload = function() {
                        downloadSingleFile(url, iframe.contentDocument);
                        if (!el.iframes) {
                            el.iframes = [];
                        }

                        el.iframes.push(iframe);
                    };
                    document.body.appendChild(iframe);
                }

                function downloadSingleFile(url, contentDocument) {
                    const anchor = (contentDocument || window.document).createElement('a');
                    anchor.href = url;
                    anchor.download = "";
                    anchor.click();
                }
            });
        },
        unbind: (el) => {
            (el.iframes || []).forEach(iframe => iframe.remove());
        }
    };

    const directives = [
        download
    ];

    const directiveInstall = {
        install(Vue) {
            directives.forEach(directive => {
                Vue.directive(directive.name, directive);
            });
        }
    };

    exports.default = directiveInstall;
    exports.download = download;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
