<script setup>
import { ref } from 'vue'
import IconKakaoLogin from '@/components/icons/IconKakaoLogin.vue'

const checkbox = defineModel('checkbox', { default: false })
const id = defineModel('id')
const password = defineModel('password')
const passwordCheck = defineModel('passwordCheck')
const email = defineModel('email')
const nickName = defineModel('nickName')

const loading = ref(false)

const submit = async event => {
  loading.value = true
  const results = await event
  if (results.valid) {
    console.log(
      JSON.stringify(
        {
          id: id.value,
          password: password.value,
          email: email.value,
          nickName: nickName.value,
        },
        null,
        2,
      ),
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

const passwordCheckRules = [
  value => {
    if (value === password.value) return true
    return '비밀번호가 동일하지 않습니다.'
  },
]

const emailRules = [
  value => {
    if (value) return true

    return '이메일은 필수입니다.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return '이메일이 올바은 형식이 아닙니다.'
  },
]

const nickNameRules = [
  value => {
    if (value) return true
    return '닉네임은 필수입니다.'
  },
  value => {
    if (value?.length <= 10 && value?.length >= 2) return true

    return '닉네임은 2글자 이상 10글자 이하 입니다.'
  },
]

const checkRules = [
  value => {
    if (value) return true
    return '약관 동의가 필요합니다.'
  },
]
</script>

<template>
  <v-container fluid width="500" class="mb-16">
    <v-form @submit.prevent="submit">
      <v-row>
        <!--제목-->
        <v-col cols="12">
          <div class="text-h2">Trip</div>
        </v-col>
        <v-col cols="12">
          <div class="text-h6">회원가입</div>
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
            type="password"
            :counter="20"
            :rules="passwordRules"
            label="비밀번호"
            required
          ></v-text-field>
        </v-col>
        <!--비밀번호 확인-->
        <v-col cols="12">
          <v-text-field
            v-model="passwordCheck"
            type="password"
            :counter="20"
            :rules="passwordCheckRules"
            label="비밀번호 확인"
            required
          ></v-text-field>
        </v-col>
        <!--이메일-->
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :counter="20"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
        </v-col>
        <!--닉네임-->
        <v-col cols="12">
          <v-text-field
            v-model="nickName"
            :counter="20"
            :rules="nickNameRules"
            label="닉네임"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox v-model="checkbox" required :rules="checkRules">
            <!--약관 동의-->
            <template v-slot:label>
              <div>
                I agree that
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <a
                      href="https://vuetifyjs.com"
                      target="_blank"
                      v-bind="props"
                      @click.stop
                    >
                      Trip
                    </a>
                  </template>
                  새 창에서 약관 보기
                </v-tooltip>
                is awesome
              </div>
            </template>
            <!--회원가입 버튼-->
            <template v-slot:append>
              <v-btn rounded="lg" type="submit" :loading="loading">
                회원가입
              </v-btn>
            </template>
          </v-checkbox>
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
        <!--카카오로 회원가입-->
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
              카카오로 회원가입
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<style scoped></style>
