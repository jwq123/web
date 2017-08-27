<template >
  <Row>
    <i-col span="4">
      <slot  name="sidebar"></slot>
    </i-col>
    <i-col span="20">
      <div class="left-border">
        <slot name="content"></slot>
      </div>
  </i-col>
    </Row>
</template>

<style>
  .left-border {
    border-left: 1px solid rgba(0,0,0,0.09);
  }
</style>

