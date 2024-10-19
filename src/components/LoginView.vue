<script setup>
import { ref } from 'vue'
import IconKakaoLogin from '@/components/icons/IconKakaoLogin.vue'

const id = defineModel('id')
const password = defineModel('password')

const loading = ref(false)

const submit = async event => {
  loading.value = true
  const results = await event

  if (results.valid) {
    console.log(
      JSON.stringify({ id: id.value, password: password.value }, null, 2),
    )
  } else {
    console.log(JSON.stringify(results, null, 2))
  }
  loading.value = false
}

const idRules = [
  value => {
    if (value) return true
    return '아이디는 필수입니다.'
  },
  value => {
    if (value?.length <= 10 && value?.length >= 5) return true
    return '아이디는 5글자 이상 10글자 이하 입니다.'
  },
]

const passwordRules = [
  value => {
    if (value) return true
    return '비밀번호는 필수입니다.'
  },
  value => {
    if (value?.length <= 20 && value?.length >= 10) return true
    return '비밀번호는 10글자 이상 20글자 이하 입니다.'
  },
]
</script>

<template>
  <v-container fluid width="500">
    <v-form @submit.prevent="submit">
      <v-row>
        <!--제목-->
        <v-col cols="12">
          <div class="text-h2">Trip</div>
        </v-col>
        <v-col cols="12">
          <div class="text-h6">로그인</div>
        </v-col>
        <!--아이디-->
        <v-col cols="12">
          <v-text-field
            v-model="id"
            :counter="10"
            :rules="idRules"
            label="아이디"
            required
          ></v-text-field>
        </v-col>
        <!--비밀번호-->
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :counter="20"
            :rules="passwordRules"
            label="비밀번호"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex justify-space-between">
          <!--비밀번호 찾기-->
          <div class="d-flex align-center justify-center">
            <a href="" class="text-body-2 text-decoration-none"
              >비밀번호가 기억나지 않으신가요?</a
            >
          </div>
          <!--로그인 버튼-->
          <v-btn rounded="lg" type="submit" :loading="loading">로그인</v-btn>
        </v-col>
        <!--경계선-->
        <v-col cols="12" class="d-flex justify-space-between">
          <div class="d-flex flex-fill flex-column justify-center">
            <v-divider></v-divider>
          </div>
          <div class="text-body-1 ms-5 me-5">OR</div>
          <div class="d-flex flex-fill flex-column justify-center">
            <v-divider></v-divider>
          </div>
        </v-col>
        <!--카카오로 로그인-->
        <v-col cols="12">
          <v-btn
            height="58"
            block
            color="#fee500"
            style="border-radius: 12px"
            class="d-flex justify-center"
          >
            <IconKakaoLogin style="height: 24px"></IconKakaoLogin>
            <div style="font-family: system-ui; font-size: 16px">
              카카오로 로그인
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<style scoped></style>
