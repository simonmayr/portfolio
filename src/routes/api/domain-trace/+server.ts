import { error } from '@sveltejs/kit';
import * as dns from 'dns';
import tldjs from 'tldjs';

export async function GET({ url }) {
	const dnsPromises = dns.promises;
	const domainParam = String(url.searchParams.get('domain'));
	const subdomain = tldjs.getSubdomain(domainParam);
	let domain = tldjs.getDomain(domainParam);

	if (!domain) {
		error(400, 'Invalid domain name');
	}

	if (subdomain) {
		domain = `${subdomain}.${domain}`;
	}

	try {
		const addresses = await dnsPromises.resolve4(domain);
		const ip = addresses[0];

		return new Response(String(ip));
	} catch (err: any) {
		error(500, `Error resolving domain: ${err.message}`);
	}
}
