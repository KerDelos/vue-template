<template>
  <n-config-provider :theme="settings.darkMode ? darkTheme : lightTheme">
    <n-global-style />
    <n-grid x-gap="12" :cols="12">
      <n-gi :offset="1" :span="10">
        <n-menu
          v-model:value="menuActiveKey"
          :options="menuOptions"
          mode="horizontal"
        />
        <!-- <p>{{ route.name }}</p>
        <p>{{ menuActiveKey }}</p> -->
        <RouterView />
      </n-gi>
    </n-grid>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, h, onMounted } from "vue";
import type { Ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import {
  NConfigProvider,
  NGlobalStyle,
  darkTheme,
  NGrid,
  NGi,
  NMenu,
  lightTheme,
} from "naive-ui";
import type { MenuOption } from "naive-ui";

import { useSettingsStore } from "@/stores/settings";

const settings = useSettingsStore();

const route = useRoute();
//TODO this doesn't behave properly for now
onMounted(() => (menuActiveKey.value = route.name?.toString()));
const menuActiveKey: Ref<string | undefined | null> = ref("");
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
          },
        },
        { default: () => "Go Home" }
      ),
    key: "home",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "about",
          },
        },
        { default: () => "about this website" }
      ),
    key: "about",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "settings",
          },
        },
        { default: () => "settings" }
      ),
    key: "settings",
  },
];
</script>
