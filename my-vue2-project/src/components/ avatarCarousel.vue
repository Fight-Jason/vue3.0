<template>
    <div class="avatar-wrapper">
        <img class="avatar-item" v-for="(item, index) in visibleAvatars" :src="item.img" :alt="'Avatar ' + (item.id)"
            :key="item.img" :style="getAvatarStyle(index)" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatarShowCount: 3, // 每次展示几个
            baseTranslateX: 32, //元素偏移量
            transitionDuration: .5, //动画延迟
            intervalId: null,
            isTransitioning: false,
        };
    },
    props: {
        avatars: {
            type: Array,
            required: true
        }
    },
    computed: {
        visibleAvatars() {
            return this.avatars;
        },
    },
    mounted() {
        this.startScroll();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        startScroll() {
            const scrollInterval = 2000;

            this.intervalId = setInterval(() => {
                this.isTransitioning = true;

                setTimeout(() => {
                    this.isTransitioning = false;
                    const firstElement = this.avatars.shift();
                    this.avatars.push(firstElement);
                }, 500);
            }, scrollInterval);
        },
        getAvatarStyle(index) {
            const transitionDuration = '0.5s';
            const visibleLength = this.visibleAvatars.length;
            const opacity = this.isTransitioning ? this.getOpacity(index, visibleLength) : 1;

            return {
                transform: `translateX(-${this.baseTranslateX * index}px)`,
                zIndex: -index,
                opacity,
                display: index < this.avatarShowCount ? 'block' : 'none',
                transition: `transform ${transitionDuration}, opacity ${transitionDuration}`
            };
        },
        getOpacity(index, visibleLength) {
            if (index === 0) return 0;
            if (index === visibleLength - 1) return 1;
            return 1;
        }
    }
};
</script>

<style lang="less" scoped>
.avatar-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
}

.avatar-item {
    height: 56px;
    width: 56px;
    border-radius: 100%;
    border: 1px solid #efefef;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: absolute;
}
</style>
