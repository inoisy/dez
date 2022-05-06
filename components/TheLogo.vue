<template>
  <div :class="[$style.logoWrapper, small && $style.small]">
    <SvgIcon name="logo" :class="$style.logoImg" />
    <div :class="$style.logoText">
      DEZAES
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module lang="scss">
.logoWrapper{
  display: flex;
  align-items: center;
  &.small{
    .logoImg {
      width: 48px;
      height: 48px;
      color: white;
    }
    .logoText {
      font-size: 26px;
      color: white;
    }
  }
}
.logoImg {
  width: 65px;
  height: 65px;
  color: $accent;
  @include md {
    width: 40px;
    height: 40px;
  }
}
.logoText {
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: $accent;
  margin-left: 9px;
  user-select: none;
  @include md {
    font-size: 24px;
  }
}
</style>
