export const useSelectedTags = () => {
  const selectedTags = computed(() => {
    const { query } = useRoute();
    return query.tags?.split(",") ?? [];
  });

  return {
    selectedTags,
  };
};
