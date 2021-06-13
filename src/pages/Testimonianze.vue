<template>
  <Layout>
    <div class="page-testimonianze-wrapper">
      <div class="page-testimonianze">
        <h1>Testimonianze</h1>
        <h2>
          Ristorante <a href="https://lacolubrina.it/">La Colubrina</a> di
          Milano
        </h2>
        <div class="img">
          <g-image src="~/assets/grigio.png" alt="fondo grigio" />

          <iframe
            title="Video testimonianza Ristorante La Colubrina"
            width="100%"
            height="315"
            data-src="https://www.youtube.com/embed/wvBmXA-YFuc?enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/wvBmXA-YFuc?autoplay=1><img src=https://img.youtube.com/vi/wvBmXA-YFuc/hqdefault.jpg alt='Video testimonianza Ristorante La Colubrina'><span>▶</span></a>"
          ></iframe>
        </div>

        <h2>
          Recensioni Google
        </h2>

        <transition appear name="fade" mode="out-in">
          <div class="testimonials" :key="review.node.id">
            <div class="testimonials__comment">
              <font-awesome
                :icon="['fas', 'quote-left']"
                :style="{
                  color: '#f78411',
                  'margin-right': '0.5rem',
                  'font-size': '1rem',
                }"
              />{{ review.node.comment }}
              <font-awesome
                :icon="['fas', 'quote-right']"
                :style="{
                  color: '#f78411',
                  'margin-right': '0.5rem',
                  'font-size': '1rem',
                }"
              />
              <div class="testimonials__rating">
                <span v-for="index in star" :key="index">
                  <font-awesome
                    :icon="['fas', 'star']"
                    :style="{
                      color: '#f78411',
                      'margin-right': '0.5rem',
                      'font-size': '1.5rem',
                      'margin-top': '2rem',
                    }"
                  />
                </span>
              </div>

              <div class="testimonials__picture">
                <img :src="review.node.photo" alt="" />
                <p>{{ review.node.name }}</p>
              </div>
            </div>
          </div>
        </transition>

        <h2>
          Gelaterie <a href="https://www.albertomarchetti.it/">Marchetti</a> di
          Torino
        </h2>
        <div class="img2">
          <g-image src="~/assets/grigio.png" alt="fondo grigio" />

          <iframe
            title="Video testimonianza Gelaterie Marchetti"
            width="100%"
            height="315"
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FRepowerItalia%2Fvideos%2F1440682722996244%2F&show_text=false&width=476"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowfullscreen="true"
            style="border:none;overflow:hidden"
            scrolling="no"
          ></iframe>
        </div>
        <h2>
          <a href="https://www.grandhotelaladistura.it/it/"
            >Grand Hotel Ala di Stura</a
          >
          di Torino
        </h2>
        <div class="img2">
          <g-image src="~/assets/grigio.png" alt="fondo grigio" />

          <iframe
            title="Video testimonianza Massimo Vannelli"
            width="100%"
            height="315"
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FRepowerItalia%2Fvideos%2F550354406129915%2F&show_text=false&width=476"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowfullscreen="true"
            style="border:none;overflow:hidden"
            scrolling="no"
          ></iframe>
        </div>

        <CheckUp />

        <SocialSharing
          title="Testimonianze"
          description="Testimonianze"
          url="testimonianze"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query {
	reviewsList: allReviews( order: ASC) {
		edges {
			node {
        id
				comment
        starRating
        createTime
        name
        photo
			}
		}
	}
}

</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

<script>
import SocialSharing from "~/components/SocialSharing.vue";
import CheckUp from "~/components/CheckUpComponentP.vue";

export default {
  components: {
    SocialSharing,
    CheckUp,
  },
  metaInfo() {
    return {
      title: "Testimonianze | Pillole di Energia",
      titleTemplate: "%s",
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Testimonianze | Pillole di Energia",
        },
        {
          property: "og:description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        {
          property: "og:url",
          content: `${this.$static.metadata.siteUrl}/testimonianze/`,
        },
        { property: "og:image", content: `${this.ogImageUrl}` },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Testimonianze | Pillole di Energia",
        },
        {
          name: "twitter:description",
          content:
            "Testimonianze ricevute per il mio lavoro come consulente energetico",
        },
        {
          name: "twitter:site",
          content: `${this.$static.metadata.siteUrl}/testimonianze/`,
        },
        { name: "twitter:creator", content: "Stefano Frontini" },
        { name: "twitter:image", content: `${this.ogImageUrl}` },
      ],
    };
  },

  data() {
    return {
      loadedReviews: [],
      review: {
        node: {
          comment: "",
          starRating: "",
          createTime: "",
          name: "",
          photo: "",
        },
      },
    };
  },
  created() {
    this.loadedReviews.push(...this.$page.reviewsList.edges);
  },
  computed: {
    ogImageUrl() {
      return `${this.$static.metadata.siteUrl}/logo-pillole-di-energia.png`;
    },
    star() {
      if (this.review.node.starRating === "ONE") {
        return 1;
      } else if (this.review.node.starRating === "TWO") {
        return 2;
      } else if (this.review.node.starRating === "THREE") {
        return 3;
      } else if (this.review.node.starRating === "FOUR") {
        return 4;
      } else {
        return 5;
      }
    },
  },
  methods: {
    async timer(ms) {
      return new Promise((res) => setTimeout(res, ms));
    },
    async reviewsLoop() {
      const randomReviewIndex = Math.floor(
        Math.random() * this.loadedReviews.length
      );
      let j;
      let i = randomReviewIndex;
      while (true) {
        j = i % this.loadedReviews.length;
        this.review = this.loadedReviews[j];
        await this.timer(5000);
        i = i + 1;
      }
    },
  },
  mounted() {
    this.reviewsLoop();
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active {
  -webkit-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.fade-leave-active {
  -webkit-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  -webkit-transition: opacity 1.5s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
  transition: opacity 1.5s ease-in-out, -webkit-transform 0.4s ease-in-out 0.3s;
  -o-transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 1.5s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
}

.slide-leave-active {
  -webkit-transition: opacity 0.6s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
  transition: opacity 0.6s ease-in-out, -webkit-transform 0.4s ease-in-out 0.3s;
  -o-transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out;
  transition: transform 0.4s ease-in-out 0.3s, opacity 0.6s ease-in-out,
    -webkit-transform 0.4s ease-in-out 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  -webkit-transform: translateX(-600px);
  -ms-transform: translateX(-600px);
  transform: translateX(-600px);
}

.testimonials {
  background: #f5f5f5;
  width: 100%;
  &__comment {
    padding: 2rem 1.23rem;
    text-align: center;
  }
  &__picture {
    margin-top: 2rem;
    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

.img {
  width: 100%;

  //height: 200px;

  cursor: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;

  iframe {
    width: 90%;
    height: 75%;
    margin: 0 auto;
    position: absolute;
    top: 10%;
    border: 10px solid white;
  }
  .g-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.img2 {
  width: 100%;
  //height: 200px;

  cursor: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;

  iframe {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 7%;
    border: 10px solid white;
  }
  .g-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.page-testimonianze-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.page-testimonianze {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 900px;
  h1 {
    border-left: 0.2em solid $primaryColor;
    border-right: 0.2em solid $primaryColor;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
}

h2 {
  text-align: center;
}

// @media (min-width: 350px) {
//   .marchetti {
//     margin-top: 5rem;
//   }

//   .testimonials {
//     &__comment {
//       position: absolute;
//       top: 0%;
//       padding: 1rem 1.23rem;
//       text-align: center;
//     }
//     &__picture {
//       position: absolute;
//       left: 50%;
//       transform: translate(-50%, 10%);

//       p {
//         font-size: 1.5rem;
//         font-weight: bold;
//       }
//       img {
//         width: 50px;
//       }
//     }
//   }
// }
</style>
