<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form ref="signUpForm">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-autocomplete label="Which browser do you use?" :items="browsers" />
          <v-file-input label="Attach profile picture" />
          <v-text-field label="Birthday" v-model="birthday" readonly />
          <v-date-picker v-model="birthday" />
          <v-checkbox
            label="Agree to terms & Conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          />
          <v-btn class="mr-4" type="submit" color="primary">Submit</v-btn>
          <v-btn class="mr-4" color="warning" @click="resetValidations">
            Reset Validation
          </v-btn>
          <v-btn class="mr-4" color="error" @click="resetForm">Reset</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [value => !!value || "AGREE OR LEAVE"],
    birthday: "",
    browsers: [
      "Google Chrome",
      "Firefox",
      "Safari",
      "Opera",
      "Internet Exploder"
    ],
    email: "",
    emailRules: [
      value => !!value || "YOU BETTA WRITE YA DAMN NAME",
      value => value.indexOf("@") !== 0 || "BOY DONT PLAY, PUT YOUR EMAIL IN",
      value => value.includes("@") || "IF THERE'S NO @, SO HELP ME",
      value => value.indexOf(".") - value.index("@") > 1 || "YOU KNOW DAMN",
      value => value.indexOf(".") <= value.length - 3 || "NEED MOAR CHARS"
    ]
  }),
  methods: {
    resetForm() {
      this.$refs.signUpForm.reset();
    },
    resetValidation() {
      this.$refs.signUpForm.resetValidation();
    }
  }
};
</script>

<style></style>
