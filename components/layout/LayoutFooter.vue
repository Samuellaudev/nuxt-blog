<template>
  <div class="layout-footer">
    <div class="container">
      <div class="author-area">
        <div class="date">
          © {{ date.getFullYear() }}
        </div>
        <div class="author">
          Samuel Lau
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();

    return { date };
  }
};
</script>

<style scoped lang="scss">
.layout-footer {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    height: 60px;
    background-color: rgba(0, 31, 38, 0.5);
    backdrop-filter: blur(2px);

    .author-area {
      display: flex;
      width: 9rem;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;

      .author {
        padding-left: 2px;
      }
    }
  }
}
</style>
