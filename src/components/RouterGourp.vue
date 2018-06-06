<template>
    <div>
        {{ msg }}
        <router-link to="routergroup01">xxxx</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
    export default{
        data(){
            return{
                msg:'子路由'
            }
        }
    };
</script>