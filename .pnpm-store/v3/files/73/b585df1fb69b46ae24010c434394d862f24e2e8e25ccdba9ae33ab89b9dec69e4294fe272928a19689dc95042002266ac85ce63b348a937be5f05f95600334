/**
 * Copyright 2022-2023 NETCAT (www.netcat.pl)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author NETCAT <firma@netcat.pl>
 * @copyright 2022-2023 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

const maxios = require('axios').default;
const murl = require('url');
const mcrypto = require('crypto');
const mxmldom = require('xmldom');
const mxpath = require('xpath');
const mdatefns = require('date-fns');

const Err = require('./error');
const Number = require('./number');
const NIP = require('./nip');
const EUVAT = require('./euvat');
const AccountStatus = require('./accountstatus');
const VIESData = require('./viesdata');

VIESAPIClient.prototype.VERSION = '1.2.7';

VIESAPIClient.prototype.PRODUCTION_URL = 'https://viesapi.eu/api';
VIESAPIClient.prototype.TEST_URL = 'https://viesapi.eu/api-test';

VIESAPIClient.prototype.TEST_ID = 'test_id';
VIESAPIClient.prototype.TEST_KEY = 'test_key';

/**
 * Construct new error object
 * @constructor
 * @param {int} code error code
 * @param {string} description error description
 */
function ViesError(code, description)
{
	this.message = (description + ' (code: ' + code + ')');
	this.code = code;
	this.description = description;
	this.stack = Error().stack;
}

ViesError.prototype = Object.create(Error.prototype);
ViesError.prototype.constructor = ViesError;

/**
 * Construct new service client object
 * @param {string} id API key identifier
 * @param {string} key API key
 * @constructor
 */
function VIESAPIClient(id = undefined, key = undefined)
{
	this.url = this.TEST_URL;
	this.id = this.TEST_ID;
	this.key = this.TEST_KEY;

	if (id && key) {
		this.url = this.PRODUCTION_URL;
		this.id = id;
		this.key = key;
	}

	this.app = '';
	this.errcode = 0;
	this.err = '';
}

/**
 * Clear error
 * @param {VIESAPIClient} viesapi client object
 */
function clear(viesapi)
{
	viesapi.errcode = 0;
	viesapi.err = '';
}

/**
 * Set error details
 * @param {VIESAPIClient} viesapi client object
 * @param {int} code error code
 * @param {string} err error message
 */
function set(viesapi, code, err = undefined)
{
	viesapi.errcode = code;
	viesapi.err = (err ? err : Err.message(code));
}

/**
 * Get path suffix
 * @param {VIESAPIClient} viesapi client object
 * @param {number} type search number type as Number::xxx value
 * @param {string} number search number value
 * @return {string} path suffix
 */
function getPathSuffix(viesapi, type, number)
{
	let path = undefined;

	if (type === Number.NIP) {
		if (!NIP.isValid(number)) {
			set(viesapi, Err.CLI_NIP);
			return undefined;
		}

		path = 'nip/' + NIP.normalize(number);
	} else if (type === Number.EUVAT) {
		if (!EUVAT.isValid(number)) {
			set(viesapi, Err.CLI_EUVAT);
			return undefined;
		}

		path = 'euvat/' + EUVAT.normalize(number);
	}

	return path;
}

/**
 * Get element content as text
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {string} element value
 */
function xpathString(doc, path)
{
	const nodes = mxpath.select(path, doc);

	if (!nodes) {
		return '';
	}

	if (nodes.length !== 1) {
		return '';
	}

	return nodes[0].toString().trim();
}

/**
 * Get element content as integer
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {number|undefined}
 */
function xpathInt(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return parseInt(val);
}

/**
 * Get element content as float
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {number|undefined}
 */
function xpathFloat(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return parseFloat(val);
}

/**
 * Get element content as date in format yyyy-mm-dd
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {Date} element value
 */
function xpathDate(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return mdatefns.parseISO(val.substring(0, 10));
}

/**
 * Get element content as date in format yyyy-mm-dd hh:mm:ss
 * @param {Document} doc XML document
 * @param {string} path xpath string
 * @return {Date} element value
 */
function xpathDateTime(doc, path)
{
	const val = xpathString(doc, path);

	if (!val) {
		return undefined;
	}

	return mdatefns.parseISO(val);
}

/**
 * Convert date to yyyy-mm-dd string
 * @param {string|Date} date input date
 * @return {string} output string
 */
function toString(date)
{
	if (typeof date === 'string') {
		// verify & format
		const d = mdatefns.parse(date, 'yyyy-MM-dd', new Date());

		return mdatefns.format(d, 'yyyy-MM-dd');
	} else if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
		// format
		return mdatefns.format(date, 'yyyy-MM-dd');
	}

	return undefined;
}

/**
 * Prepare authorization header content
 * @param {VIESAPIClient} viesapi client object
 * @param {string} method HTTP method
 * @param {string} url target URL
 * @return {string} authorization header content
 */
function auth(viesapi, method, url)
{
	const u = murl.parse(url);

	if (!u.port) {
		u.port = u.protocol === 'https:' ? '443' : '80';
	}

	const nonce = mcrypto.randomBytes(4).toString('hex');
	const ts = Math.round(Date.now() / 1000);

	const str = "" + ts + "\n"
		+ nonce + "\n"
		+ method + "\n"
		+ u.path + "\n"
		+ u.hostname + "\n"
		+ u.port + "\n"
		+ "\n";

	const mac = mcrypto.createHmac('sha256', viesapi.key).update(str).digest('base64');

	return 'MAC id="' + viesapi.id + '", ts="' + ts + '", nonce="' + nonce + '", mac="' + mac + '"';
}

/**
 * Prepare user agent information header content
 * @param {VIESAPIClient} viesapi client object
 * @return {string} user agent header content
 */
function userAgent(viesapi)
{
	let ver = 'Unknown';

	if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
		ver = 'Browser' + window.navigator.userAgent;
	} else if (typeof process !== 'undefined' && process.versions != null && process.versions.node != null) {
		ver = 'NodeJS ' + process.version;
	}

	return (viesapi.app ? viesapi.app + ' ' : '') + 'VIESAPIClient/' + viesapi.VERSION + ' Javascript/' + ver;
}

/**
 * Parse XML response
 * @param {VIESAPIClient} viesapi client object
 * @param {any} data HTTP response
 * @returns {Document|null} XML document or null
 */
function parseXml(viesapi, data)
{
	try {
		const doc = new mxmldom.DOMParser().parseFromString(data);
		const code = xpathString(doc, '/result/error/code/text()');

		if (code) {
			set(viesapi, parseInt(code), xpathString(doc, '/result/error/description/text()'));
			return null;
		}

		return doc;
	} catch (e) {
		set(viesapi, Err.CLI_EXCEPTION, e.message);
	}

	return null;
}

/**
 * Perform HTTP GET request
 * @param {VIESAPIClient} viesapi client object
 * @param {string} url target URL
 * @return {Promise<Document>} promise returning XML document on success
 */
function get(viesapi, url)
{
	const agent = userAgent(viesapi);

	return maxios.get(url, {
		headers: {
			'Accept': 'text/xml',
			'Authorization': auth(viesapi, 'GET', url),
			'User-Agent': agent,
			'X-VIESAPI-Client': agent
		}
	}).then(response => {
		const doc = parseXml(viesapi, response.data);
		if (!doc) {
			throw new ViesError(viesapi.getLastErrorCode(), viesapi.getLastError());
		}
		return doc;
	}).catch(e => {
		if (!(e instanceof ViesError) && !parseXml(viesapi, e.response.data)) {
			throw new ViesError(viesapi.getLastErrorCode(), viesapi.getLastError());
		}
		throw e;
	});
}

/**
 * Set non default service URL
 * @param {string} url service URL
 */
VIESAPIClient.prototype.setURL = function(url) {
	this.url = url;
};

/**
 * Set application info
 * @param {string} app app info
 */
VIESAPIClient.prototype.setApp = function(app) {
	this.app = app;
};

/**
 * Get VIES data for specified number
 * @param {string} euvat EU VAT number with 2-letter country prefix
 * @return {Promise<VIESData>} promise returning VIES data on success
 */
VIESAPIClient.prototype.getVIESData = function(euvat) {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// validate number and construct path
		const suffix = getPathSuffix(this, Number.EUVAT, euvat);

		if (!suffix) {
			reject(new Error(this.getLastError()));
			return;
		}

		// send request
		get(this, this.url + '/get/vies/' + suffix).then((doc) => {
			const vd = new VIESData();

			vd.uid = xpathString(doc, '/result/vies/uid/text()');
			vd.countryCode = xpathString(doc, '/result/vies/countryCode/text()');
			vd.vatNumber = xpathString(doc, '/result/vies/vatNumber/text()');

			vd.valid = (xpathString(doc, '/result/vies/valid/text()') === 'true');

			vd.traderName = xpathString(doc, '/result/vies/traderName/text()');
			vd.traderCompanyType = xpathString(doc, '/result/vies/traderCompanyType/text()');
			vd.traderAddress = xpathString(doc, '/result/vies/traderAddress/text()');

			vd.id = xpathString(doc, '/result/vies/id/text()');
			vd.date = xpathDate(doc, '/result/vies/date/text()');
			vd.source = xpathString(doc, '/result/vies/source/text()');

			resolve(vd);
		}).catch((e) => {
			if (!(e instanceof ViesError)) {
				set(this, Err.CLI_EXCEPTION, e.message);
			}
			reject(e);
		});
	});
};

/**
 * Get current account status
 * @return {Promise<AccountStatus>} promise returning account status on success
 */
VIESAPIClient.prototype.getAccountStatus = function() {
	return new Promise((resolve, reject) => {
		// clear error
		clear(this);

		// send request
		get(this, this.url + '/check/account/status').then((doc) => {
			const as = new AccountStatus();

			as.uid = xpathString(doc, '/result/account/uid/text()');
			as.type = xpathString(doc, '/result/account/type/text()');
			as.validTo = xpathDateTime(doc, '/result/account/validTo/text()');
			as.billingPlanName = xpathString(doc, '/result/account/billingPlan/name/text()');

			as.subscriptionPrice = xpathFloat(doc, '/result/account/billingPlan/subscriptionPrice/text()');
			as.itemPrice = xpathFloat(doc, '/result/account/billingPlan/itemPrice/text()');
			as.itemPriceStatus = xpathFloat(doc, '/result/account/billingPlan/itemPriceCheckStatus/text()');

			as.limit = xpathInt(doc, '/result/account/billingPlan/limit/text()');
			as.requestDelay = xpathInt(doc, '/result/account/billingPlan/requestDelay/text()');
			as.domainLimit = xpathInt(doc, '/result/account/billingPlan/domainLimit/text()');
			as.overPlanAllowed = (xpathString(doc, '/result/account/billingPlan/overplanAllowed/text()') === 'true');

			as.excelAddIn = (xpathString(doc, '/result/account/billingPlan/excelAddin/text()') === 'true');
			as.app = (xpathString(doc, '/result/account/billingPlan/app/text()') === 'true');
			as.cli = (xpathString(doc, '/result/account/billingPlan/cli/text()') === 'true');
			as.stats = (xpathString(doc, '/result/account/billingPlan/stats/text()') === 'true');
			as.monitor = (xpathString(doc, '/result/account/billingPlan/monitor/text()') === 'true');

			as.funcGetVIESData = (xpathString(doc, '/result/account/billingPlan/funcGetVIESData/text()') === 'true');

			as.viesDataCount = xpathInt(doc, '/result/account/requests/viesData/text()');
			as.totalCount = xpathInt(doc, '/result/account/requests/total/text()');

			resolve(as);
		}).catch((e) => {
			if (!(e instanceof ViesError)) {
				set(this, Err.CLI_EXCEPTION, e.message);
			}
			reject(e);
		});
	});
};

/**
 * Get last error code
 * @returns {int} error code
 */
VIESAPIClient.prototype.getLastErrorCode = function () {
    return this.errcode;
};

/**
 * Get last error message
 * @returns {string} error message
 */
VIESAPIClient.prototype.getLastError = function () {
	return this.err;
};

module.exports = VIESAPIClient;
