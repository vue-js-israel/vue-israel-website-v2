import events from "@/content/events.json";

/**
 * Composable to get a single event from the current route.
 * Extracts the eventId from the URL path and returns the corresponding event.
 * Throws a 404 error if the event is not found.
 *
 * @returns {Object} Object containing the event with eventId
 */
export const useEventFromRoute = () => {
  const route = useRoute();
  const eventId = route.params.slug?.[0] || route.params.slug;

  const event = events[eventId];
  if (!event) {
    throw createError({
      statusCode: 404,
      statusMessage: `Event ${eventId} not found`,
    });
  }

  return {
    event: { ...event, eventId },
  };
};
