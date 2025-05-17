
"use client";
import React, { useEffect } from 'react';

const baseURL = process.env.NEXT_PUBLIC_HI_EVENTS_WIDGET_BASE_URL;

const HiEventsWidget = ({
  eventId,
  primaryColor = "#d68032",
  primaryTextColor = "#000000",
  secondaryColor = "#d68032",
  secondaryTextColor = "#ffffff",
  backgroundColor = "#ffffff",
  widgetType = "widget",
  widgetVersion = "1.0",
  locale = "en"
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "http://localhost:8123/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      data-hievents-id={eventId}
      data-hievents-primary-color={primaryColor}
      data-hievents-primary-text-color={primaryTextColor}
      data-hievents-secondary-color={secondaryColor}
      data-hievents-secondary-text-color={secondaryTextColor}
      data-hievents-background-color={backgroundColor}
      data-hievents-widget-type={widgetType}
      data-hievents-widget-version={widgetVersion}
      data-hievents-locale={locale}
      className="hievents-widget"
    />
  );
};

export default HiEventsWidget;
        

