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
