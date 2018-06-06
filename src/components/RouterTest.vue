<template>
    <div>
        {{ msg }}
        <span>{{ $route.params.rtid }}</span>
        <span>{{ $route.params.name }}</span>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:"这是一段文字！"
            }
        }
    }
</script>