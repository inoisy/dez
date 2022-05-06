<template>
  <v-app dark>
    <div
      :class="$style.headerWrapper"
    >
      <v-container fill-height :class="$style.headerContainer">
        <TheLogo />
        <!-- <div :class="$style.logoWrapper">
          <SvgIcon name="logo" :class="$style.logoImg" />
          <div :class="$style.logoText">
            DEZAES
          </div>
        </div> -->
        <div :class="$style.iconWrapper">
          <v-btn icon dark :class="$style.socialBtn" href="https://wa.me/79773409446">
            <SvgIcon name="whatsup" :class="$style.socialIcon" />
          </v-btn>
          <!-- TODO change domain -->
          <v-btn icon dark :class="$style.socialBtn" href="tg://resolve?domain=DEZAES">
            <SvgIcon name="telegram" :class="$style.socialIcon" />
          </v-btn>
          <v-btn text dark :class="$style.phoneBtn" href="tel:+74956635110">
            <SvgIcon name="phone" :class="$style.phoneIcon" />
            <span :class="$style.phoneText">
              +7 (495) 663-51-10
            </span>
          </v-btn>
        </div>
      </v-container>
    </div>
    <v-main :class="$style.mainContent">
      <Nuxt />
    </v-main>
    <!-- <TheModal /> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" module>
.headerWrapper {
  margin-top: 0px;
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  background-color: rgb(22, 22, 22);
  border-color: rgb(22, 22, 22);
  height: var(--header-height);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: fixed;
  top: 0;
  z-index: 5;
  contain: layout;
  display: block;
  flex: 1 1 auto;
  max-width: 100%;
  // transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) transform, 0.2s cubic-bezier(0.4, 0, 0.2, 1) background-color, 0.2s cubic-bezier(0.4, 0, 0.2, 1) left, 0.2s cubic-bezier(0.4, 0, 0.2, 1) right, 280ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow, 0.25s cubic-bezier(0.4, 0, 0.2, 1) max-width, 0.25s cubic-bezier(0.4, 0, 0.2, 1) width;
  // @include md {
  //   height: 64px;
  // }
}
.mainContent{
  padding-top: var(--header-height) !important;
  background-color: #181916;
}
.headerContainer{
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.headerRow{
  height: 100%;
}
// .logoWrapper{
//   display: flex;
//   align-items: center;
// }
// .logoImg {
//   width: 65px;
//   height: 65px;
//   @include md {
//     width: 40px;
//     height: 40px;
//   }
// }
// .logoText {
//   font-weight: 600;
//   font-size: 32px;
//   line-height: 100%;
//   color: #F7CA18;
//   margin-left: 9px;
//   user-select: none;
//   @include md {
//     font-size: 24px;
//   }
// }
.iconWrapper{
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
}
.socialBtn{
  margin-right: 5px;
  width: 48px !important;
  height: 48px !important;
  @include md {
    height: 44px !important;
    width: 44px !important;
  }
}
.socialIcon {
  width: 32px;
  height: 32px;
  @include md {
    width: 26px;
    height: 26px;
  }
}
.phoneIcon {
  width: 30px;
  height: 30px;
  margin-right: 8px;
  @include md {
    width: 24px;
    height: 24px;
    margin-right: 0;
  }
}
.phoneBtn {
  font-weight: 600;
  font-size: 22px  !important;
  height: 100% !important;
  border-radius: 0% !important;
  @include md {
    height: 44px !important;
    width: 44px !important;
    min-width: 44px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    border-radius: 50% !important;
  }
}
.phoneText{
  @include md {
    display: none;
  }
}
</style>
