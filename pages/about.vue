<template>
  <div class="main_about">
    <div class="main_about__block">
      <p class="main_about__block--description">
        Это приложение "Календарь" - моя личная разработка. <br/>
        <br/>
        Написано на технологическом стэке: <br/>
        * Nuxt 3 <br/>
        * TypeScript <br/>
        * Sass(scss) <br/>
        <br/>
        Приложение конфигурируется по шаблонам которые хранятся в файлах: <br/>
        * valueFor2023.json <br/>
        * valueFor2024.json <br/>
        * valueFor2025.json <br/>
        <br/>
        Немного изменив их  - вы сможете сделать календарь для любого года который вам будет нужен
      </p>
      <div class="main_about__block--button">
        <button @click.prevent="goGitHub($event)"> Репозиторий с приложением </button>
        <button @click="goTelegram($event)"> Мой телеграм </button>
      </div>
      <div class="main_about__block--copyright">
        <IconCopyright></IconCopyright>
        <p>Proha0230</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const goGitHub = (event: Event) => {
  event.preventDefault()
  window.open('https://github.com/Proha0230/IF_Calendar', '_blank')
}
const goTelegram = (event: Event) => {
  event.preventDefault()
  window.open('https://t.me/Proha0230', '_blank')
}

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_about {
  @include main_block_in_page();

  &__block {
    width: 95vw;
    max-width: 650px;
    position: absolute;
    top: 50px;

    &--description {
      font-size: 20px;
    }

    &--copyright {
      display: flex;
      align-items: center;
      justify-content: center;

      & p {
        font-size: 20px;
      }
    }

    &--button {
      display: flex;
      justify-content: space-around;

      & button {
        cursor: pointer;
        font-size: 15px;
        height: 50px;
        width: 35vw;
        max-width: 200px;
        border-radius: 30px;
        margin: 15px 0;
        border: solid 2px blanchedalmond;
        background-color: cornsilk;
      }
    }

  }
}

</style>