<template>
    <div class="header_container">
        <h1>Happy Dashboard</h1>
    </div>
</template>
<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style scoped>
.header_container
{
    background-color: #4C4C4C;
    border-left:5rem #85C7F2 solid;
    border-bottom: 4px #85C7F2 solid;
}

h1
{
    color:#FFFFFF;
    font-weight: 100;
}
</style>