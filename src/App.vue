<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>Tradevue</v-toolbar-title>
            <v-spacer/>
            <v-btn v-for="link in links" :key="link" text rounded>{{link}}</v-btn>
        </v-app-bar>
        <v-content>
            <!--Login Card-->
            <v-card width="400px" class="mx-auto mt-5">
                <v-card-title>
                    <h1> Hello World! </h1>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
                        <v-text-field
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-lock"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                        />
                    </v-form>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-btn color="success">Register</v-btn>
                    <v-spacer/>
                    <v-btn color="info">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            showPassword: false,
            links: [
                'Home',
                'Login'
            ]
        }),
    };
</script>
