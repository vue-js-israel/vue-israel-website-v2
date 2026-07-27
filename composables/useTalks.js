import talks from "@/content/talks.json";

const talkList = Object.entries(talks).map(([talkId, talk]) => {
  return { ...talk, talkId };
});

export const useTalks = (eventId) => {
  /**
   * Finds a talk by speaker ID within the current event
   * @param {string} speakerId - The ID of the speaker
   * @returns {Object|undefined} The talk object if found, undefined otherwise
   */
  const getTalksBySpeaker = (speakerId) => {
    return talkList.find((talk) => {
      return talk.eventId === eventId && talk.speakerIds.includes(speakerId);
    });
  };

  return {
    getTalksBySpeaker,
  };
};
