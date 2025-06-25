

import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import getEvents from './events'; 


type EventsResponse = Awaited<ReturnType<typeof getEvents>>;

const handler: NextApiHandler = async (req, res) => {

  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const API_KEY = process.env.HUMANITIX_API_KEY;
  if (!API_KEY) {
    return res
      .status(500)
      .json({ error: 'Missing HUMANITIX_API_KEY environment variable' });
  }

  try {

    const response = await getEvents(undefined, {
      headers: {
        'HUMANITIX_API_KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    });


    const events = (response as EventsResponse).events ?? [];


    const transformed = events.map((e) => ({
      id: e.id,
      name: e.name,
      summary: e.summary ?? '',
      startTime: e.start ?? '',
      endTime: e.end ?? '',
      venue: e.venue?.name ?? '',
      url: e.url,
    }));


    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).json({ events: transformed });
  } catch (err) {
    console.error('Error fetching Humanitix events:', err);
    return res.status(500).json({
      error: 'Failed to fetch events',
      message: (err as Error).message,
    });
  }
};

export default handler;
