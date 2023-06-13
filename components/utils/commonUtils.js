export const getSpeakerData = async (id) => {
  const { data } = await useAsyncData(() => queryContent("speakers").find());

  const [speakersJsonFile] = data.value;
  const { speakers } = speakersJsonFile;
  return speakers[id];
};

export const getSpeakerDataFromEvents = async (id) => {
  const { data } = await useAsyncData(() =>
    queryContent("events").only(["speakers", "title","poster"]).find()
  );

  const _convertToEventLink = (eventTitle) => {
    return eventTitle
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-");
  };

  return data.value
    .map(({ speakers, title,poster }) => {
      if (speakers.hasOwnProperty(`_${id}`)) {
        return {
          ...speakers[`_${id}`],
          title,
          poster,
          link: _convertToEventLink(title),
        };
      }
    })
    .filter((speakerData) => speakerData !== undefined);
};
