module.exports = {

    /**
     * @alias browser.waitForUrl
     * @param {string|RegExp|Function} value
     * @param {number} timeout — ms
     * @param {boolean} revert
     * @returns {boolean}
     */
    waitForUrl: function (value, timeout, revert) {
        let url = '', actual;

        try {
            return this.waitUntil(() => {
                url = this.getUrl();
                actual = value === url;

                if (typeof value === 'string' && !value.endsWith('/')) {
                    url = url.replace(/\/$/, '');
                }

                if (typeof value === 'function') {
                    actual = value(url);
                } else if (value[Symbol.match]) {
                    actual = value.test(url);
                }

                return value && actual && !revert;
            }, timeout, '');
        } catch (error) {
            let message = 'Could not wait for the required url:';
            message += `\n\tActual: ${url}`;
            message += `\n\tExpected: ${value}`;

            throw new Error(message);
        }
    }
};
