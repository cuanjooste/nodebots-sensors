<template>
    <div class="temperature_display">
        <span class="display_number">{{displayValue}}</span>
        <span class="unit_of_measure">C</span>
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
.temperature_display
{
    background-color: #00A6ED;
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

.unit_of_measure
{
    font-size: 14rem;
}
</style>