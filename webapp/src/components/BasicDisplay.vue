<template>
    <div class="basic_display">
        <span class="display_number">{{displayValue}}</span>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            };
        },
        props : ['displayValue'],
    }
</script>

<style scoped>
.basic_display
{
    background-color: #3F88C5;
    height: 100%;
    color:#ffffff;
    text-align: center;
}

.display_number
{
    font-size: 7em;
    line-height: 1.6em;
    text-align: center;
}
</style>