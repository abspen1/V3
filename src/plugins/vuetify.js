import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.cyan.darken2,
                secondary: colors.blue.darken2,
                accent: colors.teal.base,
                background: colors.grey.darken4,
            },
            light: {
                primary: colors.cyan.darken1,
                secondary: colors.grey.lighten5,
                accent: colors.blueGrey.lighten3,
                error: colors.red.accent3,
            }
        }
    }
});