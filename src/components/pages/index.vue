<template>
    <div :class="$style.TestName">
        <div :class="$style.buttons">
            <button :class="$style.button">Заказать в Москву</button>
            <button :class="$style.button">Заказать в Санкт-Петербург</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TestName',

    components: {
        //
    },

    props: {
        //
    },

    data() {
        return {
            //
        };
    },

    computed: {
        //
    },

    methods: {
        //
    },
};
</script>

<style lang="scss" module>
    .TestName {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2rem;
        color: $text-color;
        cursor: default;
    }
</style>
