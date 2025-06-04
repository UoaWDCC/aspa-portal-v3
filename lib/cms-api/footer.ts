import { cmsFetch } from "./cms-api"

export interface FooterData {
	organizationName: string;
	organizationDescription: string;
	twitter_url: string;
	facebook_url: string;
	instagram_url: string;
}

export async function getFooter(): Promise<FooterData | null> {
  const data = await cmsFetch<FooterData>("globals/footer")
  return data || null
}