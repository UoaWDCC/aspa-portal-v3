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
        return {
            title: event.title,
            description: event.description,
            image: event.image,
            start_date: event.start_date,
            end_date: event.end_date,
            status: event.status,
        };
    }
    );

    console.log(events);

    return events;
}

