<template>
  <div id="home">
    <nav-bar class="hoem-navbar"><div slot="center">女装购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomp/HomeSwiper.vue'
import HomeRecommend from './childcomp/HomeRecommend.vue'


import {getHomeMultidata} from '../../network/home'



export default {
    name : 'Home',
    components : {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data(){
      return{
        // result : null
        banners : [],
        recommends : [],
      }
    },
    created(){
      getHomeMultidata().then(res =>{
        // console.log(res)
        // this.result = res
        this.banners = res.data.banner.list,
        this.recommends = res.data.recommend.list
      })
    }
}
</script>

<style>
  .hoem-navbar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>