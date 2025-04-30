export default async () => {

	let req = await fetch('https://raymondcamden-placidyellowptarmigan.web.val.run/');
	return await req.json();
}