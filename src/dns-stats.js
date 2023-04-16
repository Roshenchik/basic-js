const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  const object = {}
  for (let i = 0; i < domain.length; i++) {
		let path = domain[i];
		let dns = path.split('.').reverse()
		let lang = `.${dns[0]}`
		let site
		if (dns.length > 1) {
			site = `.${dns.slice(0, 2).join('.')}`
		}
		let service
		if (dns.length > 2) {
			service = `.${dns.slice(0, 3).join('.')}`
		}

    makeObject(lang)
    makeObject(site)
    makeObject(service)

    function makeObject (dns) {
      if (object.hasOwnProperty(dns)) {
        object[dns] += 1
      } else if (dns !== undefined) {
        object[dns] = 1
      }
    }
	}
	return (object)
}

module.exports = {
  getDNSStats
};
