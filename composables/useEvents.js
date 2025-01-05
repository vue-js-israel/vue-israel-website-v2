import rawEvents from "@/content/events.json";

const eventsArr = Object.entries(rawEvents).map(([eventId, event]) => {
  return { ...event, eventId };
});

export const useEvents = () => {
  const filterEvents = (events, tags) => {
    return tags.length > 0
      ? events.filter((event) =>
          event.eventTags.some((eventTag) => tags.includes(eventTag))
        )
      : events;
  };

  const events = computed(() => {
    const { selectedTags } = useSelectedTags();
    const filtered = sortDescendingByDate(
      filterEvents(eventsArr, selectedTags.value)
    );

    /**
     * Adds lazy loading property to each event object for lazy loading
     * When the first one gets undefined, it ensures that the event loaded above the fold.
     */
    return filtered.map((event, index) => ({
      ...event,
      lazyLoad: index === 0 ? undefined : "lazy",
    }));
  });

  const tags = computed(() => {
    const eventTags = eventsArr.reduce((acc, event) => {
      return [...acc, ...(event.eventTags || [])];
    }, []);
    const uniqueEventTags = [...new Set(eventTags)];
    uniqueEventTags.sort((tagA, tagB) => tagA.localeCompare(tagB));

    return uniqueEventTags;
  });

  return {
    events,
    tags,
  };
};
