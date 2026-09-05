// Booking configuration for the Contact section.

// Google Calendar appointment schedule. Must be the full public URL —
// the short calendar.app.google/... form can't be embedded.
// Clear this to fall back to the built-in request flow.
export const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Te8Di85dAfWoqyIB3KJYJtqaBrYbh03KtDCl8MtELK_VXbr7Q_2ABAnlID3CHAVk6ilIpNFmB";

// Permanent video room for the fallback flow. Empty = a new Jitsi room per request.
export const VIDEO_LINK = "";

export const EMAIL = "nishantkhandhar.us@gmail.com";
export const HOST_NAME = "Nishant Khandhar";

export const HOST_TIMEZONE = "America/Chicago";
export const HOST_TIMEZONE_LABEL = "Central";

// Bookable window, in HOST_TIMEZONE, on weekdays.
export const WORK_START = "09:00";
export const WORK_END = "17:00";
export const SLOT_MINUTES = 30;
export const MEETING_MINUTES = 30;

export const MIN_DAYS_AHEAD = 1;
export const MAX_DAYS_AHEAD = 60;

export const FORM_ENDPOINT = "https://getform.io/f/allldxwa";
