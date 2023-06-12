const _mergeVideosAndEventsOfTheSameSpeaker = (arr) => {
  const mergedMap = new Map();

  for (const obj of arr) {
    const existingObj = mergedMap.get(obj.name);

    if (existingObj) {
      existingObj.slides.push(obj.slides);
      existingObj.video.push(obj.video);
      existingObj.event.push(obj.event);
    } else {
      mergedMap.set(obj.name, {
        ...obj,
        slides: [obj.slides],
        video: [obj.video],
        event: [obj.event],
      });
    }
  }

  return Array.from(mergedMap.values());
};

const _mergeSpeakerArrays = (arr) => {
  const array = arr.flatMap((obj) => {
    const speakers =  obj.speakers.map((speaker)=>{
        return {...speaker,event:obj.title}
    })
    return speakers
  });

  return array.reduce(
    (mergedArray, currentArray) => mergedArray.concat(currentArray),
    []
  );
};

export const getStructuredSpeakerData = async () => {
  const { data } = await useAsyncData(() =>
    queryContent("events").only(["speakers", "title"]).find()
  );
  
  console.log("👾 ~ file: commonUtils.js:44 ~ getStructuredSpeakerData ~ data.value:", data.value)
  // const mergedSpeakers = _mergeSpeakerArrays(data.value);
  // return _mergeVideosAndEventsOfTheSameSpeaker(mergedSpeakers);
  return [];
};
