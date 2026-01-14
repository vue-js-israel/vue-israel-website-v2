<template>
  <div>
    <p
      v-for="{ timeSlot, title, speakerIds } in agenda"
      :key="title"
      class="my-2">
      <strong>{{ `${timeSlot ?? ""} ` }}</strong>
      <span v-if="speakerIds">
        <span v-if="speakerIds.length === 1">
          {{ singleSpeakerTitle(speakerIds[0]) }}
        </span>
        <span v-else>
          {{ multipleSpeakerTitle(speakerIds) }}
        </span>
      </span>
      <span v-else>
        {{ title }}
      </span>
    </p>
  </div>
</template>
<script setup>
const props = defineProps({
  agenda: {
    type: Array,
    required: true,
    default: () => [],
  },
  eventId: {
    type: String,
    required: true,
    default: "",
  },
});

const { getTalksBySpeaker } = useTalks(props.eventId);
const { speakers } = useSpeakers();

/**
 * Generates a formatted title string for a single speaker's talk
 * @param {string} speakerId - The ID of the speaker
 * @returns {string} Formatted string: "Speaker Name - Talk Title"
 */
const singleSpeakerTitle = (speakerId) => {
  const talks = getTalksBySpeaker(speakerId);
  return `${speakers[speakerId].name} - ${talks.talkTitle}`;
};

/**
 * Generates a formatted title string for multiple speakers' talk
 * Chains speaker names, talk title, and unique companies
 * @param {Array<string>} speakerIds - Array of speaker IDs
 * @returns {string} Formatted string: "Speaker1 & Speaker2 - Talk Title - Company1 / Company2"
 */
const multipleSpeakerTitle = (speakerIds) => {
  const filteredSpeakersEntry = Object.entries(speakers).filter(([speakerId]) =>
    speakerIds.includes(speakerId)
  );
  const filteredSpeakers = filteredSpeakersEntry.map(([speakerId, speaker]) => {
    return { ...speaker, speakerId };
  });

  const speakerNames = filteredSpeakers.map((speaker) => speaker.name);
  const speakerCompanies = filteredSpeakers.map((speaker) => speaker.company);
  const uniqueCompanies = [...new Set(speakerCompanies)];

  const speakerNamesString = speakerNames.join(" & ");
  const speakersTalk = getTalksBySpeaker(speakerIds[0]).talkTitle;
  const speakerCompaniesString = uniqueCompanies.join(" / ");

  return `${speakerNamesString} - ${speakersTalk} - ${speakerCompaniesString}`;
};
</script>
