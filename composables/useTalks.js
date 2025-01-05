import talks from "@/content/talks.json";

const talkList = Object.entries(talks).map(([talkId, talk]) => {
  return { ...talk, talkId };
});

export const useTalks = (eventId) => {
  const getTalksBySpeaker = (speakerId) => {
    return talkList.find((talk) => {
      return talk.eventId === eventId && talk.speakerIds.includes(speakerId);
    });
  };

  return {
    getTalksBySpeaker,
  };
};
