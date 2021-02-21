export default {
  mounted() {
    const event = new Event('scroll')
    window.dispatchEvent(event)
  },
  methods: {
    scrollHandler(evt, el) {
      if (
        el.getBoundingClientRect().top < self.innerHeight * 1.1 &&
        !el.classList.contains('animate')
      ) {
        el.classList.add('animate')
      }
    },
  },
}
