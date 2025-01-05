import events from "@/content/events.json";

export const useEvent = () => {
  const { path } = useRoute();
  const [, , eventId] = path.split("/");

  const event = { ...events[eventId], eventId };

  return {
    event,
  };
};
