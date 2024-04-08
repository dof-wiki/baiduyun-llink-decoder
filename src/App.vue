<script setup lang="ts">
import {computed, ref} from 'vue'
import {decode} from "./decoder";
import {encode} from "./encoder";

const secretText = ref('')
const plainText = ref('')

const doDecode = () => {
  plainText.value = decode(secretText.value)
}

const doEncode = () => {
  secretText.value = encode(plainText.value)
}

const isUrl = computed(() => {
  return plainText.value.startsWith('http')
})

const jump = () => {
  window.open(plainText.value, '_blank')
}
</script>

<template>
  <div class="h-screen py-20">
    <h1 class="text-5xl text-gray-500 font-bold text-center">BaiduYun Link Decoder</h1>
    <div class="flex w-full px-20 items-center mt-[100px]">
      <el-input type="textarea" :rows="10" placeholder="密文" v-model="secretText"></el-input>
      <ul class="mx-10">
        <li>
          <el-button type="primary" @click="doDecode">解密</el-button>
        </li>
        <li class="mt-2">
          <el-button type="warning" @click="doEncode">加密</el-button>
        </li>
      </ul>
      <el-input type="textarea" :rows="10" placeholder="明文" v-model="plainText"></el-input>
      <ul class="ml-2">
        <li>
          <el-button :disabled="!isUrl" @click="jump">访问</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
