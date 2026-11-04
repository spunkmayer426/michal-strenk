
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sun, Moon } from '@lucide/vue';

const props = withDefaults(
  defineProps<{ lang?: 'sk' | 'en' }>(),
  { lang: 'sk' }
);

const isDark = ref(false);

onMounted(() => {
  isDark.value =
    document.documentElement.dataset.theme === 'dark';
});

function toggleTheme() {
  isDark.value = !isDark.value;

  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Theme still works without localStorage.
  }
}
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[var(--text)] transition-all duration-200 hover:bg-[var(--surface)] hover:rotate-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
    :aria-label="
      props.lang === 'sk'
        ? (isDark ? 'Zapnúť svetlý režim' : 'Zapnúť tmavý režim')
        : (isDark ? 'Switch to light mode' : 'Switch to dark mode')
    "
    :title="isDark ? 'Light mode' : 'Dark mode'"
    @click="toggleTheme"
  >
    <Sun v-if="isDark" :size="21" :stroke-width="1.8" />
    <Moon v-else :size="21" :stroke-width="1.8" />
  </button>
</template>
