import { ref } from "vue";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const darkMode = ref(true);

  return {
    darkMode,
  };
});
