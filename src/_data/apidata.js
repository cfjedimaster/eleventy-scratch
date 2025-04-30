import Fetch from "@11ty/eleventy-fetch";

export default async () => {

	/*
	let req = await fetch('https://raymondcamden-placidyellowptarmigan.web.val.run/');
	return await req.json();
	*/
	
	return await Fetch('https://raymondcamden-placidyellowptarmigan.web.val.run/', {
		duration:'1d',
		type:'json'
	});
}