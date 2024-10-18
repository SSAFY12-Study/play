<script>
export default {
  data: () => ({
    valid: false,
    id: '',
    idRules: [
      value => {
        if (value) return true

        return '아이디는 필수입니다.'
      },
      value => {
        if (value?.length <= 10 && value?.length >= 5) return true

        return '아이디는 5글자 이상 10글자 이하 입니다.'
      },
    ],
    password: '',
    passwordRules: [
      value => {
        if (value) return true

        return '비밀번호는 필수입니다.'
      },
      value => {
        if (value?.length <= 20 && value?.length >= 10) return true

        return '비밀번호는 10글자 이상 20글자 이하 입니다.'
      },
    ],
  }),
}
</script>

<template>
  <v-container fluid height="500" width="500">
    <v-row>
      <v-col cols="12">
        <div class="text-h2 text-left">Trip</div>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v:model="id"
          :counter="10"
          :rules="idRules"
          label="아이디"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v:model="password"
          :counter="20"
          :rules="passwordRules"
          label="비밀번호"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <div class="d-flex align-center justify-center">
          <a href="" class="text-body-2 text-decoration-none"
            >비밀번호가 기억나지 않으신가요?</a
          >
        </div>
        <v-btn rounded="lg">로그인</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <div class="d-flex flex-fill flex-column justify-center">
          <v-divider></v-divider>
        </div>
        <div class="text-body-1 ms-5 me-5">OR</div>
        <div class="d-flex flex-fill flex-column justify-center">
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col>
        <div>
          <a id="" @click.prevent="">
            <img src="@/assets/kakao.svg" alt="" />
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
