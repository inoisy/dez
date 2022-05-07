<template>
  <div :class="classes">
    <div class="iconWrapper">
      <SvgIcon :name="icon" class="icon" />
    </div>
    <div class="inner">
      <slot />
      <!-- <div :class="$style.heading">
        <slot name="heading" />
      </div>
      <div :class="$style.subheading">
        <slot name="subheading" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      classes: [
        'benefit-item',
        {
          small: this.small
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.benefit-item {
  --benefit-item-wrapper-size: 130px;
  --benefit-item-icon-size: 80px;
  height: 100%;
  padding-top: calc(var(--benefit-item-wrapper-size) / 2);// #{$iconWrapperSize/2};
  position: relative;
  @include md {
    --benefit-item-wrapper-size: 100px;
    --benefit-item-icon-size: 50px;
  }
  &.small{
    --benefit-item-wrapper-size: 100px;
    --benefit-item-icon-size: 50px;
    ::v-deep h4,h3 {
      font-size: 16px;
      margin-bottom: 15px;
      margin-top: 15px;
    }
    ::v-deep p{
      font-size: 14px;
    }
    .inner{
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 18px;
    }
  }
  .inner{
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: calc(var(--benefit-item-wrapper-size) / 2);
  }
  ::v-deep h4,h3 {
    font-weight: 600;
    font-size: 22px;
    text-align: center;
    color: #424242;
    margin-bottom: 25px;
    margin-top: 22px;
    @include lg {
      margin-top: 15px;
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
  ::v-deep p{
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    text-align: center;
    color: rgba(89, 89, 89, 0.86);
    margin-bottom: 0;
    @include lg {
      font-size: 14px;
    }
  }
  .iconWrapper{
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 50%;
    width: var(--benefit-item-wrapper-size);
    height: var(--benefit-item-wrapper-size);
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .icon{
    width: var(--benefit-item-icon-size);
    height: var(--benefit-item-icon-size);
    margin: auto;
  }
}

</style>
