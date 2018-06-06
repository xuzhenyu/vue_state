<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
        <p>
            <button @click="$store.commit('add',5)">+</button>
            <button @click="reduce">-</button>
        </p>
    </div>
</template>
<script>
    //mapState访问对象
    //mapMutations修改状态
    //mapGetters计算过滤操作
    //mapActions异步修改状态
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{
            ...mapState(["count"]),
            //...mapGetters(["count"])
            // count(){
            //     return this.$store.getters.count;
            // }
        },

        methods:{
            ...mapMutations([  
                'add','reduce'
            ]),
            ...mapActions(['addAction','reduceAction'])
        },
        store
        
    };
</script>


