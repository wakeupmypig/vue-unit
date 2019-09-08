<template>
    <div>
        <h1>当前路由:{{this.$route.path}}</h1>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于页面</router-link>

        <router-view></router-view>
    </div>
</template>