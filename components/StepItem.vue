<template>
  <div class="step-item">
    <div class="iconWrapper">
      <!-- <SvgIcon :name="icon" class="icon" /> -->
      <!-- <slot name="order" /> -->
      {{ item.order }}
    </div>
    <div class="inner">
      <!-- <slot /> -->
      <div class="heading">
        {{ item.heading }}
        <!-- <slot name="heading" /> -->
      </div>
      <div class="subheading">
        {{ item.subheading }}
        <!-- <slot name="subheading" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.step-item {
  $iconWrapperSize: 60px;
  height: 100%;
  padding-top: #{$iconWrapperSize/2};
  position: relative;

  .inner{
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: #{$iconWrapperSize/2};
    background-color: rgba(196, 196, 196, 0.8);
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 18px;
  }
  .heading {
    font-weight: 600;
    text-align: center;
    color: rgba(0, 0, 0, 0.77);
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .subheading {
    font-weight: 400;
    font-size: 14px;
    line-height: 125%;
    text-align: center;
    color: rgba(0, 0, 0, 0.71);
    margin-bottom: 0;
  }
  .iconWrapper{
    background-color: #F7CA18;
    box-sizing: border-box;
    border-radius: 50%;
    width: $iconWrapperSize;
    height: $iconWrapperSize;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: black;
  }
}

</style>
