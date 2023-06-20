export const getSpeakerData = async (id) => {
  const { data } = await useAsyncData(() => queryContent("speakers").find());

  const [speakersJsonFile] = data.value;
  const { speakers } = speakersJsonFile;
  return speakers[id];
};

export const getSpeakersList = async () => {
  const { data } = await useAsyncData(() => queryContent("speakers").find());
  const [speakerListJson] = data.value;
  return Object.entries(speakerListJson.speakers).map(([id, speaker]) => {
    return { id, ...speaker };
  });
};

export const getSpeakerDataFromEvents = async (id) => {
  const { data } = await useAsyncData(() =>
    queryContent("events").only(["speakers", "title", "poster", "date"]).find()
  );

  const _convertToEventLink = (eventTitle) => {
    return eventTitle
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  };

  return data.value
    .map(({ speakers, title, poster, date }) => {
      if (speakers.hasOwnProperty(id)) {
        return {
          ...speakers[id],
          title,
          poster,
          date,
          link: _convertToEventLink(title),
        };
      }
    })
    .filter((speakerData) => speakerData !== undefined);
};
