<template>
    <div :class="{active:this.status}" class="light_switch" @click="lightToggle">
        <span class="glyphicon glyphicon-off"></span>
    </div>
</template>

<script>
    export default {
        props : ['status'],
        methods: {
            lightToggle() {
                this.$emit('lightToggle');
            }
        }
    }
</script>

<style scoped>

.light_switch
{
    display: block;
    height: 100%;
    cursor: pointer;
    text-align: center;
    border:0.2em #EF3E36 solid;
    color:#EF3E36;

}

.light_switch.active
{
    background-color: #EF3E36;
    color:#ffffff;
}

.glyphicon
{
    font-size: 6em;
    line-height: 1.8em;
}

</style>