export const ExtVersion = '0.9.2';

export const Server = process.env.NODE_ENV == 'production' ? 'https://sc.icodef.com/' : 'http://localhost:8080/';

export const ExternalWhitelist = [
	'greasyfork.org',
	'scriptcat.org',
	'tampermonkey.net.cn',
	'openuserjs.org',
];