<template>
  <VDialog
    v-model="innerValue"
    width="600"
    style="overflow-x: hidden;"
    content-class="dialog-active"
    light
  >
    <!-- @click:outside="close" -->
    <VCard :class="$style.dialogInner">
      <v-btn
        :class="$style.closeButton"
        class="ml-auto"
        text
        icon
        outlined
        large
        color="black"
        @click="close"
      >
        <SvgIcon :class="$style.closeButtonIcon" name="close" />
      </v-btn>
      <div v-if="!formSuccess">
        <div
          :class="$style.header"
          class="mb-6"
          v-text="productName ? `Заказать услугу «${productName}»` : 'Форма обратной связи'"
        />
        <div
          v-if="!isMessage"
          :class="$style.subheader"
          class="mb-8"
        >
          Пожалуйста, заполните контактную информацию, и наши сотрудники свяжутся с Вами.
        </div>
        <VForm
          v-model="form"
          :class="$style.form"
        >
          <VTextField
            v-model="name"
            :class="$style.input"
            label="Имя"
            required
            :error-messages="nameErrors"
            @blur="$v.name.$touch()"
          />
          <VTextField
            v-model="phone"
            v-mask="mask"
            :class="$style.input"
            label="Телефон"
            required
            :error-messages="phoneErrors"
            @blur="$v.phone.$touch()"
          />
          <!-- <VTextField
            v-model="email"
            :class="$style.input"
            label="E-mail"
            required
            :error-messages="emailErrors"
            @blur="$v.email.$touch()"
          />-->
          <VTextField
            v-if="isMessage"
            v-model="message"
            :class="$style.input"
            label="Сообщение"
          />

          <v-flex xs12>
            <v-btn
              :class="$style.submit"
              class="ml-0"
              outlined
              large
              block
              light
              :disabled="submitDisabled"
              :loading="loading"
              @click="submit"
            >
              Отправить
            </v-btn>
          </v-flex>

          <v-slide-y-transition>
            <v-flex
              v-if="formSuccess || formError"
              xs12
            >
              <v-alert
                :value="formSuccess"
                class="flex xs12 mt-3"
                type="success"
              >
                Cообщение отправлено!
              </v-alert>
              <v-alert
                :value="formError"
                class="flex xs12 mt-3"
                type="error"
              >
                Ошибка при отправке!
              </v-alert>
            </v-flex>
          </v-slide-y-transition>
        </VForm>
      </div>
      <div v-else>
        <SvgIcon
          name="checked"
          :class="$style.successIcon"
        />

        <div
          :class="$style.successHeader"
          class="text-center"
        >
          Заявка отправлена!
        </div>
        <div
          :class="$style.successSubHeader"
          class="text-center"
        >
          Мы свяжемся с вами в ближайшее время.
        </div>
      </div>
      <div :class="[$style.bottomLine, formSuccess && 'success', formError && 'error']" />
    </VCard>
  </VDialog>
</template>

<script>
/* eslint-disable no-unused-expressions */
import { validationMixin } from 'vuelidate'
import { mask } from 'vue-the-mask'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'
// , email
// import BaseDialog from '~/components/BaseDialog.vue'
export default {
  name: 'DefaultDialog',
  // components: {
  //   BaseDialog
  // },
  directives: {
    mask
  },
  mixins: [validationMixin],
  props: {
    value: {

    },
    productName: {
      type: String,
      default: ''
    },
    isMessage: {
      type: Boolean,
      default: false
    }
  },

  validations () {
    return {
      name: { required, maxLength: maxLength(35), minLength: minLength(3) },
      // email: { required, email },
      phone: { required, minLength: minLength(17), maxLength: maxLength(19) }
    }
  },
  data () {
    return {
      formSuccess: false,
      formError: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      files: [],
      form: false,
      mask: '+7 (###) ### - ####',
      loading: false,
      isShow: true
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        return this.$emit('input', val)
      }
    },
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    submitDisabled () {
      return !this.name || !this.phone || this.$v.$anyError// || !this.email
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.maxLength && errors.push('Слишком длинное имя')
      !this.$v.name.minLength && errors.push('Слишком короткое имя')
      !this.$v.name.required && errors.push('Введите имя')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) {
        return errors
      }
      !this.$v.phone.maxLength && errors.push('Слишком длинный телефон')
      !this.$v.phone.minLength && errors.push('Слишком короткий телефон')
      !this.$v.phone.required && errors.push('Введите телефон')
      return errors
    }
    // emailErrors () {
    //   const errors = []
    //   if (!this.$v.email.$dirty) {
    //     return errors
    //   }
    //   !this.$v.email.email && errors.push('Введите корректный email')
    //   !this.$v.email.required && errors.push('Введите email')
    //   return errors
    // }
  },
  methods: {
    close () {
      this.innerValue = false
      this.formSuccess = false
      this.formError = false
      // this.$emit('input', false)
    },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    // },
    clear () {
      this.$v.$reset()
      this.phone = ''
      this.name = ''
      this.message = ''
      // this.email = ''
    },
    async submit () {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return
      }
      this.loading = true
      try {
        const response = await this.$axios.$post(`${location.origin}/server-middleware/getJSON`, {
          name: this.name,
          phone: this.phone,
          message: this.message
        })

        if (response.error || !response.data.ok) {
          throw new Error(response)
        }

        this.loading = false
        this.formSuccess = true
        this.clear()
        if (
          // this.$config.yandexMetrikaID &&
          // window[`yaCounter${this.$config.yandexMetrikaID}`]
          window.yaCounter88731644
        ) {
          // console.log('order')
          // window[`yaCounter${this.$config.yandexMetrikaID}`].reachGoal('lead')
          window.yaCounter88731644.reachGoal('lead')
        }
        // this.$ga.event({
        //   eventCategory: 'order',
        //   eventAction: 'orderAction',
        //   eventLabel: 'orderLabel',
        //   eventValue: 111
        // })
      } catch (error) {
        this.loading = false
        this.formError = true
        console.error('🚀 ~ file: DefaultDialog.vue ~ line 361 ~ .then ~ error', error)
        this.clear()
      }
    }
  }
}
</script>

<style lang="scss">
  .dialog-active {
    overflow-x: hidden;
  }
</style>

<style lang="scss" module>
  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    // margin-bottom: 40px;
  }
  .submit {
    margin-top: 32px;
  }
  .dialogInner {
    padding: 24px 20px 30px;
    @include md {
      padding: 2.2rem 2rem 2.4rem;
    }
  }
  .successIcon {
    display: block;
    width: 230px;
    max-width: 70%;
    height: auto;
    margin-right: auto;
    margin-bottom: 30px;
    margin-left: auto;
  }
  .successHeader {
    margin-bottom: 1.2rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 125%;
  }
  .successSubHeader {
    font-size: 1rem;
    @include lg {
      font-size: 1.2rem;
    }
  }
  .closeButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .closeButtonIcon{
    width: 24px;
    height: 24px;
  }
  .header {
    padding-right: 44px;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 125%;
    @include sm {
      font-size: 2rem;
    }
  }
  .subheader {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  .bottomLine {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    margin: auto;
    background: darken($accent, 10%);
  }
</style>
