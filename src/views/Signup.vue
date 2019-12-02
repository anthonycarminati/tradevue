<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form>
          <v-text-field label="Email" type="email" />
          <v-autocomplete label="Which browser do you use?" :items="browsers" />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    browsers: [
      "Google Chrome",
      "Firefox",
      "Safari",
      "Opera",
      "Internet Exploder"
    ]
  })
};
</script>

<style></style>
