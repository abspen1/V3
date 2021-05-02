import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.cyan.darken1,
                secondary: colors.grey.darken4,
                accent: colors.blueGrey.base,
                background: colors.shades.black,
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