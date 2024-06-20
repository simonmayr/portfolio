import { error } from '@sveltejs/kit';
import * as dns from 'dns'; // Import the dns module
const dnsPromises = dns.promises; // Use the Promise-based API of the dns module

export async function GET({ url }) {
	const domain = String(url.searchParams.get('domain'));

	const domainValidationRegex =
		/^(((http|https):\/\/|)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?)$/;

	if (domainValidationRegex.test(domain) === false) {
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
