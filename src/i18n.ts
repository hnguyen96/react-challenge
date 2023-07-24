import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                home: "Click on the Vite and React logos to learn more"
            }
        },
        vn: {
            translation: {
                home: "Ấn vào Vite và React logo để tìm hiểu thêm"
            }
        },
    },
});

export default i18n;