# 속성 바인딩
- ## `v-bind:id=""` 속성
- ## `:id` 속성
- ## `:disabled="isButtonDisabled"` 불리언
- ## `v-bind="objectOfAttrs"` 객체

# JS 표현식 가능

현재 컴포넌트 인스턴스의 data scope 안에서 평가됨  
단, [restricted list of globals](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3) 만 접근 가능  
app.config.globalProperties 로 추가가능

```vue
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

# 함수(component-exposed) 호출 가능
단 side effect 없어야 함. 컴포넌트 업데이트 시마다 호출되기에
```vue
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

# 이벤트 핸들링
```vue
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>
```

# Dynamic Arguments
