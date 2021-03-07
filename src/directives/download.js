export default {
    name: 'download',
    inserted: (el, binding) => {
        el.addEventListener('click', (event) => {
            event.stopPropagation();
            downloadFiles(binding.value);

            function downloadFiles(urls) {
                if (!Array.isArray(urls)) {
                    downloadSingleFile(urls);
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