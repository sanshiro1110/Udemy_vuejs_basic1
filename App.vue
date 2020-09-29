//単一ファイルコンポーネント

<template>
  <div>
    <LikeHeader>
      <h2>みなさん</h2>
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <Home v-if="currentComponent === 'Home'"></Home>
    <About v-if="currentComponent === 'About'"></About>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>

    <div style="padding: 10rem;">
      <h2>イベントのホーム</h2>
      <EventTitle></EventTitle>

      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.lazy="eventData.maxNumber">
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{ eventData.host }}</pre>

      <label for="detail">イベントの内容</label>
      <textarea id="detail" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>

      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="20代" v-model="eventData.target">
      <label for="10">20代</label>
      <input type="checkbox" id="10" value="30代" v-model="eventData.target">
      <label for="10">30代</label>
      <p>{{ eventData.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>

      <p>開催場所</p>
      <select v-model="eventData.location" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue'
  import About from './components/About.vue'
  import Home from './components/Home.vue'
  import EventTitle from './components/EventTitle.vue'

  export default {
    data() {
      return {
        number: 14,
        currentComponent: Home,
        eventData: {
          title: 'タイトル',
          maxNumber: 0,
          host: "",
          detail: "",
          isPrivate: false,
          target: [],
          price: '無料',
          location: [],
        },
        locations: ['東京', '大阪', '名古屋'],
      }
    },
    components: {
      LikeHeader,
      About,
      Home,
      EventTitle,
    },
    methods: {
      //ここでのvalueはLikeNumber.vueの$emitの第二引数であるデータが入ってくる
      incrementNumber(value) {
        this.number = value;
      }
    },
  }
</script>
