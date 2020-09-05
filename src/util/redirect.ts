export default (host: string) => {
	if (!isDev() && !isOnHost(host)) {
		window.location.replace(`https://${host}`);
	}
};

const isDev = () => {
	return window.location.hostname === 'localhost';
};

const isOnHost = (host: string) => {
	return window.location.host === host;
};
