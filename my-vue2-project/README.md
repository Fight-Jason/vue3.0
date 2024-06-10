<template>
    <div class="bubble-container">
        <div class="bubble-item" v-for="(bubble, index) in visibleBubbles" :key="index" :style="getBubbleStyle(index)">
            <div class="bubble-text">
                {{ bubble }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bubbles: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
            intervalId: null,
            batchSize: 4, // 每批次的大小
            currentBatch: 0 // 当前批次的索引
        };
    },
    computed: {
        totalBubbles() {
            return this.bubbles.length;
        },
        totalBatches() {
            return Math.ceil(this.totalBubbles / this.batchSize);
        },
        visibleBubbles() {
            const startIndex = this.currentBatch * this.batchSize;
            const endIndex = Math.min(startIndex + this.batchSize, this.totalBubbles);
            return this.bubbles.slice(startIndex, endIndex);
        }

    },
    mounted() {
        this.startScroll();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        startScroll() {
            const scrollInterval = 5000; // 5 seconds

            this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.visibleBubbles.length;

                if (this.currentIndex === 0) {
                    this.currentBatch = (this.currentBatch + 1) % this.totalBatches;
                }
            }, scrollInterval);
        },
        getBubbleStyle(index) {
            const transitionDuration = '0.5s';
            const isCurrent = index === this.currentIndex;
            const isNext = index === (this.currentIndex + 1) % this.visibleBubbles.length;
            const isPrevious = index === (this.currentIndex - 1 + this.visibleBubbles.length) % this.visibleBubbles.length;

            let transform = 'translateY(100%)';
            let opacity = 0;

            if (isCurrent) {
                transform = 'translateY(0)';
                opacity = 1;
            } else if (isPrevious) {
                transform = 'translateY(-100%)';
                opacity = 1;
            } else if (isNext) {
                transform = 'translateY(100%)';
                opacity = 0;
            }

            return {
                transform,
                transition: `transform ${transitionDuration} ease-in-out`,
                opacity,
                display: isPrevious || isCurrent || isNext ? 'block' : 'none'
            };
        }
    }
};

</script>


<style scoped>
.bubble-container {
    z-index: 10001;
    position: fixed;
    top: 100px;
    width: 100%;
    height: 60px;
    overflow: hidden;
    left: 50%;
}

.bubble-item {
    position: absolute;
    /* width: 100%; */
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.7);
}

.bubble-text {
    vertical-align: top;
    color: #fff;
    font-size: 14px;
}
</style>
