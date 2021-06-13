// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import InfiniteLoading from "vue-infinite-loading";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
  faTwitter,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faChartLine,
  faEyeSlash,
  faSearchDollar,
  faPhoneSlash,
  faClipboardList,
  faDollarSign,
  faAssistiveListeningSystems,
  faClock,
  faBookReader,
  faBellSlash,
  faHammer,
  faUserTie,
  faChargingStation,
  faLightbulb,
  faClone,
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
  faPhone,
  faEnvelope,
  faTwitter,
  faChartLine,
  faEyeSlash,
  faSearchDollar,
  faPhoneSlash,
  faClipboardList,
  faDollarSign,
  faAssistiveListeningSystems,
  faClock,
  faBookReader,
  faBellSlash,
  faHammer,
  faUserTie,
  faEnvira,
  faChargingStation,
  faLightbulb,
  faClone,
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faQuoteRight,
  faStar
);

const SocialSharing = require("vue-social-sharing");
// const VueFbCustomerChat = require("vue-fb-customer-chat");

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout),
    Vue.component("font-awesome", FontAwesomeIcon),
    (head.htmlAttrs = { lang: "it-IT" }),
    head.link.push({
      rel: "apple-touch-icon",
      href: "/assets/img/icon-96.png",
    }),
    head.meta.push({
      name: "apple-mobile-web-app-status-bar",
      content: "#000000",
    }),
    Vue.use(SocialSharing),
    // Vue.use(VueFbCustomerChat, {
    //   page_id: 2357272271058671,
    //   theme_color: "#f78411",
    //   locale: "it_IT",
    // }),
    Vue.use(InfiniteLoading),
    Vue.directive("scrollanimation", {
      // When the bound element is inserted into the DOM...
      inserted: function(el) {
        const animatedScrollObserver = new IntersectionObserver(
          (entries, animatedScrollObserver) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("enter");
                animatedScrollObserver.unobserve(entry.target);
              }
            });
          }
        );
        el.classList.add("before-enter");
        animatedScrollObserver.observe(el);
      },
    });
}
