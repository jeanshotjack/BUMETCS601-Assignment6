export default {
    name: "App",
    computed: {
        pictureHover() {
            let rand = (Math.random() * 2);
            if (this.hover == true) {
                rand = (Math.random() * 2);
                if (rand === 1) {
                    return this.cairo;
                }
                else {
                    return this.bagira;
                }
            }
            else {
                rand = (Math.random() * 2);
                if (rand === 0) {
                    return this.lucia;
                }
                else {
                    return this.kuzya;
                }
            }
        }
        },
        data() {
            return {
                cairo: "../images/cairo.jpg",
                bagira: "../images/bagira.jpg",
                lucia: "../images/lucia.jpg",
                kuzya: "../images/kuzya.jpg",
                hover: false
            }
        },
        template: `
        <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false">
      `
    };