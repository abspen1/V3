import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: "#FF7028",
                secondary: "#FFFFFD",
                accent: "#593424",
                background: "#2E2E2B",
            },
            light: {
                primary: "#5D0F2F",
                secondary: colors.grey.lighten5,
                accent: colors.blueGrey.lighten3,
                background: "#FFA980"
            }
        }
    }
});