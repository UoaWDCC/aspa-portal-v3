import { cmsFetch } from "./cms-api";

export interface HomeContent {
	mainTitle: string;
	mainDescription: string;
}
export async function getHomeContent(): Promise<HomeContent | null> {
	const data = await cmsFetch<HomeContent>("globals/home_content");
	return data || null;
}