<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <v-divider class="mt-16" thickness="10" />
  <p class="text-h1">Welcome</p>
  <p class="text-h1">테스트 페이지</p>
  <v-divider class="mt-16" thickness="10" />
  <p class="text-body-1">
    만들고 싶은 컴포넌트를 만든 후에 라우터에 등록시켜서 보이게 하면 됩니다!
  </p>
  <v-divider class="mt-16" thickness="10" />

  <nav>
    <RouterLink to="/test/login">로그인</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/test/signup">회원가입</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/test/appbar">앱 바</RouterLink>
  </nav>
</template>

<style scoped></style>
