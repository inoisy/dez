<template>
  <div>
    <div :class="$style.mainWrapper">
      <v-container fill-height>
        <div :class="$style.mainInner">
          <nuxt-content :class="$style.mainTextWrapper" :document="banner" />
          <div class="banner-buttons-wrapper">
            <v-btn class="main-button main-button--offer" rounded color="accent" @click="handleOffer">
              ЗАКАЗАТЬ
            </v-btn>
            <v-btn class="main-button main-button--price" rounded color="accent" outlined @click="goTo('#prices')">
              Цены
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
    <div class="bg-white block-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="block-inner">
            <h2 class="block-heading" :class="$style.blockHeading">
              Работаем 24/7
            </h2>
            <div class="block-subheading" :class="$style.blockSubheading">
              Боремся с вредителями от тараканов и клещей до кротов и выезжаем на объекты любой площади. Но это ещё не все наши преимущества! О главных — дальше.
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <div :class="$style.aboutWrapper">
              <div :class="$style.aboutImageWrapper">
                <v-img :class="$style.aboutImage" src="/hero1.jpg" alt="Дезинсектор" :aspect-ratio="14/9" />
              </div>
              <nuxt-content :class="$style.aboutContent" :document="about" />
              <div :class="$style.aboutBtnWrapper">
                <v-btn
                  :class="$style.aboutBtn"
                  outlined
                  color="#F7CA18"
                  block
                  large
                  @click="handleOffer"
                >
                  {{ about.btnText }}
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="fears-wrapper">
            <div v-for="fear in fears" :key="fear.slug" class="fears-item">
              <BenefitItem :icon="fear.icon">
                <nuxt-content :document="fear" />
              </BenefitItem>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg-dark block-wrapper insects-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="block-inner">
            <h2 class="block-heading">
              Не только тараканы
            </h2>
            <div class="block-subheading">
              Команда дезинфекторов DEZAES избавит вас от любых нежеланных гостей. Выбирайте вредителя, жмите на иконку и узнайте стоимость обработки!
            </div>
          </v-col>
          <v-col cols="12" class="slider-wrapper">
            <div class="slider-arrow-wrapper slide-left">
              <SvgIcon
                class="slider-arrow"
                name="slide-left"
              />
            </div>

            <div ref="swiper" v-swiper="swiperOption" class="slider-container">
              <div class="swiper-wrapper">
                <div v-for="insect in insects" :key="insect.title" class="swiper-slide insect-wrapper" :class="{ clickable: !insect.disabled }" @click="handleInsectClick(insect)">
                  <SvgIcon :name="insect.icon" class="insect-image" />
                  <div class="insect-title">
                    {{ insect.title }}
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-arrow-wrapper slide-right">
              <SvgIcon
                class="slider-arrow"
                name="slide-right"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg-white block-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="block-inner">
            <h2 class="block-heading" :class="$style.blockHeading">
              Нам доверяют
            </h2>
            <div class="block-subheading" :class="$style.blockSubheading">
              Наша миссия — сделать вашу жизнь комфортной. Поэтому мы стараемся обеспечить лучший сервис.
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for=" benefit in benefits" :key=" benefit.slug" cols="12" md="3" sm="6">
            <BenefitItem :icon="benefit.icon" small>
              <nuxt-content :document=" benefit" />
            </BenefitItem>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <v-parallax
      dark
      src="/steps-bg1.jpg"
      height="auto"
    > -->
    <div class="bg-dark block-wrapper steps-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="block-inner">
            <h2 class="block-heading">
              Процесс обработки
            </h2>
            <div class="block-subheading">
              Работаем быстро, но качественно — заглядываем даже в самые труднодоступные места. Начинаем работу только после заключения договора, чтобы защитить ваши интересы.
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col v-for="step in steps" :key="step.order" cols="12" md="3" sm="6">
            <StepItem :item="step" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="prices" class="bg-white block-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" md="8" class="block-inner">
            <h2 class="block-heading" :class="$style.blockHeading">
              Цены
            </h2>
            <div class="block-subheading" :class="$style.blockSubheading">
              Окончательная стоимость обработки зависит от типа вредителя и площади участка. Чтобы рассчитать точную стоимость, свяжитесь с дезинфектором!
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <v-expansion-panels v-model="pricesAccordion">
              <v-expansion-panel id="pricesTable0">
                <v-expansion-panel-header>
                  Тараканы, муравьи, блохи, мухи, моль
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <thead>
                        <tr>
                          <th class="text-left" />
                          <th class="text-left">
                            Механическая обработка
                          </th>
                          <th class="text-left">
                            Холодный туман
                          </th>
                          <th class="text-left">
                            Холодный туман + Барьерная защита
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> 1 комнатная квартира </td>
                          <td> 1780 </td>
                          <td> 2430 </td>
                          <td> 3430 </td>
                        </tr>
                        <tr>
                          <td>
                            2 комнатная квартира
                          </td>
                          <td> 2240 </td>
                          <td> 2890 </td>
                          <td> 3890 </td>
                        </tr>
                        <tr>
                          <td> 3 комнатная квартира </td>
                          <td> 2700 </td>
                          <td> 3350 </td>
                          <td> 4350 </td>
                        </tr>
                        <tr>
                          <td> 4 комнатная квартира </td>
                          <td> 3160 </td>
                          <td> 3810 </td>
                          <td> 3810 </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable1">
                <v-expansion-panel-header>
                  Клещи и комары
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <tbody>
                        <tr>
                          <td>От 1 до 10 соток</td>
                          <td>4000</td>
                        </tr>
                        <tr>
                          <td>От 10 до 15 соток</td>
                          <td>4400</td>
                        </tr>
                        <tr>
                          <td>От 15 до 20 соток</td>
                          <td>4800</td>
                        </tr>
                        <tr>
                          <td>От 20 до 30 соток</td>
                          <td>5200</td>
                        </tr>
                        <tr>
                          <td>От 30 до 40 соток</td>
                          <td>5600</td>
                        </tr>
                        <tr>
                          <td>От 40 до 50 соток</td>
                          <td>6000</td>
                        </tr>
                        <tr>
                          <td>От 50 до 60 соток</td>
                          <td>7000</td>
                        </tr>
                        <tr>
                          <td>От 60 до 70 соток</td>
                          <td>7500</td>
                        </tr>
                        <tr>
                          <td>От 70 до 80 соток</td>
                          <td>8000</td>
                        </tr>
                        <tr>
                          <td>От 80 до 1га</td>
                          <td>8500</td>
                        </tr>
                        <tr>
                          <td>От 1га до 2га</td>
                          <td>12000</td>
                        </tr>
                        <tr>
                          <td>От 2га до 3 га</td>
                          <td>15000</td>
                        </tr>
                        <tr>
                          <td>От 3 га до 4 га</td>
                          <td>18000</td>
                        </tr>
                        <tr>
                          <td>От 4 га до 5 га</td>
                          <td>21000</td>
                        </tr>
                        <tr>
                          <td>От 5 га</td>
                          <td>По договоренности</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            Выезд за МКАД оплачивается отдельно. До 50 км – 500 р., 50-100 км – 1000 р., 100-200 – 2000 р.
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable2">
                <v-expansion-panel-header>
                  Клопы
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <thead>
                        <tr>
                          <th class="text-left" />
                          <th class="text-left">
                            Механическая обработка
                          </th>
                          <th class="text-left">
                            Холодный туман
                          </th>
                          <th class="text-left">
                            Холодный туман + Барьерная защита
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1 комнатная квартира</td>
                          <td>2560</td>
                          <td>3860</td>
                          <td>4860</td>
                        </tr>
                        <tr>
                          <td>2 комнатная квартира</td>
                          <td>4480</td>
                          <td>4780</td>
                          <td>5780</td>
                        </tr>
                        <tr>
                          <td>3 комнатная квартира</td>
                          <td>4400</td>
                          <td>5700</td>
                          <td>6700</td>
                        </tr>
                        <tr>
                          <td>4 комнатная квартира</td>
                          <td>5320</td>
                          <td>6620</td>
                          <td>7620</td>
                        </tr>
                        <tr>
                          <td colspan="3">
                            Обработка делается 2 раза с
                            промежутком в 21 день. Цена
                            За 2 обработки.
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable3">
                <v-expansion-panel-header>
                  Кроты и змелеройки
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <tbody>
                        <tr>
                          <td>От 1 до 10 соток</td>
                          <td>4000</td>
                        </tr>
                        <tr>
                          <td>От 10 до 15 соток</td>
                          <td>4400</td>
                        </tr>
                        <tr>
                          <td>От 15 до 20 соток</td>
                          <td>4800</td>
                        </tr>
                        <tr>
                          <td>От 20 до 30 соток</td>
                          <td>5200</td>
                        </tr>
                        <tr>
                          <td>От 30 до 40 соток</td>
                          <td>5600</td>
                        </tr>
                        <tr>
                          <td>От 40 до 50 соток</td>
                          <td>6000</td>
                        </tr>
                        <tr>
                          <td>От 50 до 60 соток</td>
                          <td>7000</td>
                        </tr>
                        <tr>
                          <td>От 60 до 70 соток</td>
                          <td>7500</td>
                        </tr>
                        <tr>
                          <td>От 70 до 80 соток</td>
                          <td>8000</td>
                        </tr>
                        <tr>
                          <td>От 80 соток</td>
                          <td>По договоренности</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable4">
                <v-expansion-panel-header>
                  Плесень
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <tbody>
                        <tr>
                          <td>1 м&sup2;</td>
                          <td>2450</td>
                        </tr>
                        <tr>
                          <td>2 м&sup2;</td>
                          <td>4210</td>
                        </tr>
                        <tr>
                          <td>3 м&sup2;</td>
                          <td>6050</td>
                        </tr>
                        <tr>
                          <td>4 м&sup2;</td>
                          <td>7930</td>
                        </tr>
                        <tr>
                          <td>5 м&sup2;</td>
                          <td>9670</td>
                        </tr>
                        <tr>
                          <td>От 5 м&sup2;</td>
                          <td>По договоренности</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable5">
                <v-expansion-panel-header>
                  Крысы и мыши
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-tabs :show-arrows="false">
                    <v-tab>Квартира</v-tab>
                    <v-tab>Дачный участок</v-tab>
                    <v-tab>Коттеджные дома и дачи</v-tab>
                    <v-tab-item>
                      <v-simple-table>
                        <template #default>
                          <thead>
                            <tr>
                              <th class="text-left">
                                1 комнатная квартира
                              </th>
                              <th class="text-left">
                                2 комнатная квартира
                              </th>
                              <th class="text-left">
                                3 комнатная квартира
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2400</td>
                              <td>3800</td>
                              <td>5200</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-tab-item>
                    <v-tab-item>
                      <v-simple-table>
                        <template #default>
                          <tbody>
                            <tr>
                              <td>От 1 до 10 соток</td>
                              <td>4000</td>
                            </tr>
                            <tr>
                              <td>От 10 до 15 соток</td>
                              <td>4400</td>
                            </tr>
                            <tr>
                              <td>От 15 до 20 соток</td>
                              <td>4800</td>
                            </tr>
                            <tr>
                              <td>От 20 до 30 соток</td>
                              <td>5200</td>
                            </tr>
                            <tr>
                              <td>От 30 до 40 соток</td>
                              <td>5600</td>
                            </tr>
                            <tr>
                              <td>От 40 до 50 соток</td>
                              <td>6000</td>
                            </tr>
                            <tr>
                              <td>От 50 до 60 соток</td>
                              <td>7000</td>
                            </tr>
                            <tr>
                              <td>От 60 до 70 соток</td>
                              <td>7500</td>
                            </tr>
                            <tr>
                              <td>От 70 до 80 соток</td>
                              <td>8000</td>
                            </tr>
                            <tr>
                              <td>От 80 соток</td>
                              <td>По договоренности</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-tab-item>
                    <v-tab-item>
                      <v-simple-table>
                        <template #default>
                          <thead>
                            <tr>
                              <th class="text-left">
                                До 100 м&sup2;
                              </th>
                              <th class="text-left">
                                До 250 м&sup2;
                              </th>
                              <th class="text-left">
                                До 500 м&sup2;
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>4200</td>
                              <td>6400</td>
                              <td>8600</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-tab-item>
                  </v-tabs>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel id="pricesTable6">
                <v-expansion-panel-header>
                  Вирусы
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-simple-table>
                    <template #default>
                      <tbody>
                        <tr>
                          <td>До 10 м&sup2;</td>
                          <td>5800</td>
                        </tr>
                        <tr>
                          <td>От 10 до 20 м&sup2;</td>
                          <td>7430</td>
                        </tr>
                        <tr>
                          <td>От 20 до 50 м&sup2;</td>
                          <td>9120</td>
                        </tr>
                        <tr>
                          <td>От 50 до 100 м&sup2;</td>
                          <td>12300</td>
                        </tr>
                        <tr>
                          <td>От 100 до 200 м&sup2;</td>
                          <td>15600</td>
                        </tr>
                        <tr>
                          <td>От 200 м&sup2;</td>
                          <td>По договоренности</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="bg-dark block-wrapper cta-wrapper">
      <v-container>
        <v-row>
          <v-col cols="12" sm="10" md="8">
            <h2 class="cta-heading">
              Остались вопросы? Задайте их дезинфектору
            </h2>
            <div class="cta-subheading">
              Специалист поможет рассчитать стоимость, ответит на вопросы<br>
              и оформит заявку на обработку.
            </div>
            <v-btn rounded color="#F7CA18" large @click="handleQuestion">
              задать вопрос
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="hidden-sm-and-down"
          >
            <v-img contain class="cta-hero" src="/hero.png" position="bottom center" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footer">
      <v-container class="footer-container">
        <v-row class="footer-inner">
          <v-col cols="auto">
            <TheLogo class="footer-logo" small />
          </v-col>
          <v-col cols="auto">
            <v-btn text dark class="footer-btn" href="tel:+74956635110">
              <SvgIcon name="phone" class="footer-icon" />
              <span>
                +7 (495) 663-51-10
              </span>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn text dark class="footer-btn" href="mailto:mail@dezaes.ru">
              <SvgIcon name="email" class="footer-icon" />
              <span>
                mail@dezaes.ru
              </span>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn text dark class="footer-btn" disabled>
              <SvgIcon name="location" class="footer-icon" />
              <span>
                Загородное шоссе 1, к. 2
              </span>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <div class="footer-copy">
              © {{ new Date().getFullYear() }}. Все права защищены
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <DefaultDialog v-model="isModalShow" :is-message="isModalMessage" />
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  async asyncData ({ $content }) {
    const banner = await $content('banner').fetch()
    const fears = await $content('fear').sortBy('order').fetch()
    const benefits = await $content('benefit').sortBy('order').fetch()
    const about = await $content('about').fetch()
    return {
      fears,
      about,
      banner,
      benefits
    }
  },
  data () {
    return {
      isModalShow: false,
      isModalMessage: false,
      pricesAccordion: undefined,
      activeSlide: 0,
      steps: [
        {
          order: 1,
          heading: 'Осмотр и оценка',
          subheading: 'Выезжаем на объект, тщательно осматриваем фронт работ и оцениваем ситуацию'
        },
        {
          order: 2,
          heading: 'Подписание договора',
          subheading: 'Подписываем договор и обговариваем детали'
        },
        {
          order: 3,
          heading: 'Обработка',
          subheading: 'Проводим обработку, не забывая о дальних углах и труднодоступных зонах'
        },
        {
          order: 4,
          heading: 'Результат',
          subheading: 'Оцениваем результат и даём инструкции на будущее'
        }
      ],
      insects: [
        {
          icon: 'insects/klesh',
          title: 'Клещи',
          pricesGroup: 1
        },
        {
          icon: 'insects/mosquito',
          title: 'комары',
          pricesGroup: 1
        },
        {
          icon: 'insects/tarakan',
          title: 'тараканы',
          pricesGroup: 0
        },
        {
          icon: 'insects/klop',
          title: 'клопы',
          pricesGroup: 2
        },
        {
          icon: 'insects/bloha',
          title: 'блохи',
          pricesGroup: 0
        },
        {
          icon: 'insects/muha',
          title: 'мухи',
          pricesGroup: 0
        },
        {
          icon: 'insects/mol',
          title: 'моль',
          pricesGroup: 0
        },
        {
          icon: 'insects/ant',
          title: 'муравьи',
          pricesGroup: 0
        },
        {
          icon: 'insects/rat',
          title: 'крысы',
          pricesGroup: 5
        },
        {
          icon: 'insects/mouse',
          title: 'мыши',
          pricesGroup: 5
        },
        {
          icon: 'insects/krot',
          title: 'кроты',
          pricesGroup: 3
        },
        {
          icon: 'insects/osa',
          title: 'осы',
          disabled: true
          // pricesGroup: '1'
        },
        {
          icon: 'insects/virus',
          title: 'Вирус',
          pricesGroup: 6
        },
        {
          icon: 'insects/mould',
          title: 'Плесень',
          pricesGroup: 4
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 4000
        },
        initialSlide: 0,
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
          nextEl: '.slide-right',
          prevEl: '.slide-left'
        },
        on: {
          slideChange: () => {
            this.activeSlide = this.$refs.swiper.swiper.activeIndex
          }
        },
        // preloadImages: true,
        lazy: true
        // pagination: {
        //   el: '.main-page__slideshow-pagination--main',
        //   type: 'bullets',
        //   clickable: true
        // }
      }
    }
  },
  head () {
    return {
      title: 'Dezeas - уничтожение насекомых в Москве и МО',
      titleTemplate: ''
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    goTo (id) {
      return this.$vuetify.goTo(id, {
        offset: this.isMobile ? 64 : 90
      })
    },
    handleInsectClick (insect) {
      // console.log('🚀 ~ file: index.vue ~ line 800 ~ handleInsectClick ~ insect', insect)
      if (insect.disabled) {
        return
      }
      this.$vuetify.goTo(`#pricesTable${insect.pricesGroup}`, {
        offset: this.isMobile ? 64 : 90
      })
      this.pricesAccordion = insect.pricesGroup
    },
    handleOffer () {
      this.isModalMessage = false
      this.isModalShow = true
      // return this.$modal.open({
      //   component: 'DefaultDialog'
      // })
      // this.$store.dispatch('showDialog', {
      //     isShow: true,
      // });
    },
    handleQuestion () {
      this.isModalShow = true
      this.isModalMessage = true
    }
  }
}
</script>
<style module lang="scss">
.mainWrapper {

  background-color: #181916;
  background-image: url(/hero-bg.jpg);
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: calc(100vh - 90px);
  height: 660px;

  @include lg {
    background-position: 80% center;
  }
  @include md {
    background-position: 70% center;
    height: 500px;
  }
  .mainTextWrapper{
    margin-bottom: 48px;
    color: white;
    max-width: 900px;
    :global(.nuxt-content-editor){
      color: white;
    }
    @include md {
      // font-size: 14px;
      margin-bottom: 24px;
    }
    :global(h1){
      font-family: 'Montserrat';
      font-weight: 700;
      // font-size: 42px;
      font-size: 38px;
      line-height: 135%;
      color: #FFFFFF;
      margin-bottom: 18px;
      text-transform: uppercase;
      @include md {
        font-size: 28px;
        margin-bottom: 18px;
      }
      @include sm {
        font-size: 22px;
        margin-bottom: 14px;
      }
    }
    :global(p){
      font-family: 'Montserrat';
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #FFFFFF;
      text-transform: uppercase;
      @include md {
        font-size: 18px;
      }
      @include sm {
        font-size: 14px;
      }
    }
  }

}

// .blockInner {
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 24px;
// }
// .blockHeading{
// }

.blockSubheading{
  font-weight: 400;
  font-size: 16px;
  color: rgba(89, 89, 89, 0.86);
  text-align: center;
}

.aboutWrapper{
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mainInner{
  width: 100%;
  // :global(.nuxt-content){
  //   color: white;
  // }
}

.aboutBtnWrapper{
  margin-top: auto;
}
.aboutImageWrapper{
  margin-bottom: 24px;
}
.aboutContent{
  :global(h3),:global(h4){
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 22px;
    color: #424242;
    @include lg {
      font-size: 18px;
    }
  }
  :global(p){
    font-size: 16px;
    color: rgba(89, 89, 89, 0.86);
    @include lg {
      font-size: 14px;
    }
  }
}

</style>
<style lang="scss">
.font-normal {
  font-size: 16px;
  color: rgba(89, 89, 89, 0.86);
}
.accent {
  color: #F7CA18;
}
.bg-white {
  background-color: white;
}
.bg-dark {
  background-color: #181916;
}
.block-wrapper{
  padding-top: 75px - 12px;
  padding-bottom: 90px - 12px;
  &.bg-dark{
    .block-heading{
      color: rgba(255, 255, 255, 0.88);
    }
    .block-subheading{
      color: rgba(255, 255, 255, 0.69);
    }
  }
}
.block-inner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}
.block-heading {
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
  color: #424242;
  @include md{
    font-size: 26px;
  }
  @include sm {
    font-size: 22px;
  }
  &:before,&:after {
    width: 27px;
    height: 19px;
  }
  &:before{
    content: "";
    display: block;
    background-image: url(/before.svg);
    position: absolute;
    transform: translate(-100%,-50%);
    top: 50%;
    width: 27px;
    height: 19px;
    left: -22px;
  }
  &:after {
    content: "";
    display: block;
    background-image: url(/after.svg);
    position: absolute;
    transform: translate(100%, -50%);
    top: 50%;
    width: 27px;
    height: 19px;
    right: -22px;
  }
}
.block-subheading{
  font-weight: 400;
  font-size: 16px;
  color: rgba(89, 89, 89, 0.86);
  text-align: center;
  @include md {
    font-size: 14px;
  }
}
.swiper-wrapper {
  display: flex;
}
</style>
<style lang="scss" scoped>
.banner-buttons-wrapper{

}
.main-button {
  height: 47px !important;
  min-width: 78px !important;
  padding: 0 40px !important;
  // font-size: 16px !important;
  border-radius: 9999px !important;

  @include md {
    height: 40px !important;
    padding: 0 20px !important;
    font-size: 12px !important;
  }
  + .main-button {
    margin-left: 8px;
    @include md {
      margin-left: 5px;
    }
  }
  &--offer{
    color: black !important;
  }
  &--price{
    padding: 0 30px !important;
    @include md {
      padding: 0 20px !important;
    }
  }
}
.slider-container{
  flex: 1;
}
.slider-wrapper{
  display:flex;
}
.slider-arrow-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  &.swiper-button-disabled{
    .slider-arrow{
      color: rgba(255, 255, 255, 0.5)
    }
  }
}

.slider-arrow{
  width: 20px;
  color: white;
  // height: 20px;
}

.insects-wrapper{
  background-color: #181916;
  background-image: url(/bg1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // .block-inner{
  //   margin-bottom: 53px - 12px;
  // }
}

.insect-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: (100% / 9);
  @include lg {
    width: (100% / 8);
  }
  @include md {
    width: (100% / 6);
  }
  @include sm {
    width: (100% / 2);
  }
  // @include xs {
  //   width: (100% / 2);
  // }
  &.clickable{
    cursor: pointer;
    &:hover{
      // opacity: 0.7;
      .insect-image,.insect-title{
        color: $accent;
      }
    }
  }
}

.insect-image{
  width: 70px;
  height: 70px;
  margin-bottom: 30px;
  user-select: none;
  color: white;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  transition-property: color;
}

.insect-title {
  font-weight: 600;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  transition-property: color;
}

.fears-wrapper{
  display: flex;
  flex-wrap: wrap;
  padding: 0 !important;
}

.fears-item{
  flex: 0 0 50%;
  max-width: 50%;
  padding: 12px;
  @include md{
    flex: 0 0 50%;
    max-width: 50%;
  }
  @include sm{
    flex: 0 0 100%;
    max-width: 100%;
  }
}

.steps-wrapper{
  // background-color: unset !important;
  background-image: url(/steps-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cta-wrapper {
  background-color: #181916;
  background-image: url(/bg-cta.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 95px - 12px;
  padding-bottom: 82px - 12px;
  position: relative;
}
.cta-heading {
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  text-transform: uppercase;
  color: #F7CA18;
  margin-bottom: 18px;
  @include md {
    font-size: 28px;
  }
  @include sm {
    font-size: 24px;
  }
}
.cta-subheading {
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: rgba(255, 255, 255, 0.76);
  margin-bottom: 36px;
  @include md {
    font-size: 16px;
  }
}
.cta-hero{
  position: absolute;
  top: -70px;
  bottom: 0;
  // max-height: 500px;
  @include md {
    display: none;
  }
}
.footer {
  background-color: #161616;
  min-height: 94px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  @include md {
    padding-bottom: 0;
  }
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include md {
    flex-direction: column;
  }
}
.footer-logo{
  padding-right: 8px;
}
.footer-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  // @include md {
  //   width: 24px;
  //   height: 24px;
  //   margin-right: 0;
  // }
}
.footer-btn {
  font-weight: 500;
  font-size: 14px  !important;
  // height: 100% !important;
  // border-radius: 0% !important;
  padding-left: 14px !important;
  ::v-deep .v-btn__content{
    text-transform: initial !important;
    letter-spacing: initial !important;
  }
  &.v-btn--disabled{
    color: white !important;
  }
}
.footer-copy{
  font-weight: 400;
  font-size: 14px;
  color: #D9DBE1;
  display: flex;
  align-items: center;
  @include md {
    margin-top: 20px;
  }
}
</style>
