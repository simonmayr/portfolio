import { error } from '@sveltejs/kit';
import * as dns from 'dns'; // Import the dns module
import tldjs from 'tldjs';

const dnsPromises = dns.promises; // Use the Promise-based API of the dns module

export async function GET({ url }) {
	const domainParam = String(url.searchParams.get('domain'));
	const domain = tldjs.getDomain(domainParam);

	if (!domain) {
		error(400, 'Invalid domain name');
	}

	try {
		const addresses = await dnsPromises.resolve4(domain);
		const ip = addresses[0];

		return new Response(String(ip));
	} catch (err: any) {
		error(500, `Error resolving domain: ${err.message}`);
	}
}
