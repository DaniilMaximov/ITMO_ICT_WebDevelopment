

<script>

export default {
  data() {
    return {
      themes: ['light'],
      currentThemeIndex: 0,
      currentTheme: 'light',
    };
  },

  methods: {
    setTheme(theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    },
  },
  created() {
    this.currentThemeIndex = this.themes.indexOf("light");
    this.setTheme(this.currentTheme);
  },
};
</script>

