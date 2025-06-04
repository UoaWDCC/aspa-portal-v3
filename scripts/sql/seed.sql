-- Insert or skip footer global with full organization info and social URLs
INSERT INTO footer (
  id,
  organization_name,
  organization_description,
  twitter_url,
  facebook_url,
  instagram_url,
  created_at,
  updated_at
)
VALUES (
  1,
  'Auckland Student Pool Association',
  'Promoting student life through pool tournaments.',
  'https://twitter.com',
  'https://facebook.com',
  'https://instagram.com',
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

-- Insert or skip home content with hero title, description
INSERT INTO home_content (
  id,
  main_title,
  main_description,
  created_at,
  updated_at
)
VALUES (
  1,
  'Welcome to the Auckland Student Pool Association!',
  'Here you can register to become a member of the club, log in to your account, and sign up for club events. Check out the list of current events to see what we’ve planned for the future, or have a look at our past events to see what we’re all about and some of the highlights of past years.',
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;


-- Insert a test event using Lexical JSON
INSERT INTO events (id, title, date, location, description)
VALUES (
    1,
    'Test Event',
    NOW(),
    'Online',
    '{
      "root": {
        "type": "root",
        "format": "",
        "indent": 0,
        "version": 1,
        "children": [
          {
            "type": "paragraph",
            "format": "",
            "indent": 0,
            "version": 1,
            "children": [
              {
                "type": "text",
                "text": "This is a test event seeded with Lexical-compatible JSON.",
                "format": 0,
                "detail": 0,
                "mode": "normal",
                "style": "",
                "version": 1
              }
            ],
            "direction": "ltr",
            "textStyle": "",
            "textFormat": 0
          }
        ],
        "direction": "ltr"
      }
    }'
)
ON CONFLICT (id) DO NOTHING;
