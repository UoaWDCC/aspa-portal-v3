const URL = process.env.NEXT_PUBLIC_HI_EVENTS_BASE_URL || '';
const email = process.env.NEXT_PUBLIC_HI_EVENTS_EMAIL;
const password = process.env.NEXT_PUBLIC_HI_EVENTS_PASSWORD;

type Event = {
    title: string;
    description: string;
    image: string;
    start_date: string;
    end_date: string;
    status: string;
};

const extractImageUrl = (html: string): string | null => {
    const regex = /<img[^>]+src="([^">]+)"/;
    const match = html.match(regex);
    return match ? match[1] : "";
};

function removeHtmlTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Login to the HiEvents API
 * 
 * @returns token
 * 
 */
async function login() {

    console.log('email', email);

    const params = new URLSearchParams();
    params.append('email', email || '');
    params.append('password', password || '');

    const response = await fetch(`${URL}/auth/login?${params.toString()}`, {
        method: 'POST',
    });

    const data = await response.json();
    return data.token;
}

export async function getEvents() {
    const token = await login();

    const response = await fetch(`${URL}/events`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    const events: Event[] = data.data.map((event: any) => {
        console.log(event.images[0]);

        if (event.images[0] !== undefined) {
            console.log(extractImageUrl(event.images[0]));
        }


        return {
            id: event.id,
            title: event.title,
            description: event.description !== undefined ? removeHtmlTags(event.description) : '',
            image: event.description !== undefined ? extractImageUrl(event.description) : '',
            start_date: event.start_date,
            end_date: event.end_date,
            status: event.status,
        };
    }
    );

    console.log(events);

    return events;
}

