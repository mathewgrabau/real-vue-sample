<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  data() {
    return {
      event: {
        id: 5928101,
        category: "animal welfare",
        title: "Cat Adoption Day",
        description: "Find your new feline friend at this event.",
        location: "Meow Town",
        date: "January 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "Kat Laydee",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
