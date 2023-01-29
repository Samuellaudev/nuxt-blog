<template>
<div class="typing-effect-container">
    <h1>
        <!-- Hi, I'm a -->
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
</div>

</template>

<script>
export default {
    data() {
        const typeValue = ""
        const typeStatus = false
        const displayTextArray = ["Web Developer", "Fitness Enthusiast"]
        const typingSpeed = 100
        const erasingSpeed = 100
        const newTextDelay = 1500
        const displayTextArrayIndex = 0
        const charIndex = 0

        return { typeValue, typeStatus, displayTextArray, typingSpeed, erasingSpeed, newTextDelay, displayTextArrayIndex, charIndex };
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
        typeText() {
            if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
                    this.charIndex
                );
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
                    0,
                    this.charIndex - 1
                );
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.displayTextArrayIndex += 1;
                if (this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.typing-effect-container {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // max-width: 1200px;
    // height: auto;
    // margin: 0 auto;
    // margin-bottom: 2rem;

    h1 {
        font-size: 1.9rem;
        font-weight: normal;
        span.typed-text {
        color: #d2b94b;
        }
    }

    // Cursor blinking CSS Starts...
    .blinking-cursor {
        font-size: 1.9rem;
        color: #2c3e50;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
    }
    @keyframes blink {
        from,
        to {
        color: transparent;
        }
        50% {
        color: #2c3e50;
        }
    }
    @-moz-keyframes blink {
        from,
        to {
        color: transparent;
        }
        50% {
        color: #2c3e50;
        }
    }
    @-webkit-keyframes blink {
        from,
        to {
        color: transparent;
        }
        50% {
        color: #2c3e50;
        }
    }
    @-ms-keyframes blink {
        from,
        to {
        color: transparent;
        }
        50% {
        color: #2c3e50;
        }
    }
    @-o-keyframes blink {
        from,
        to {
        color: transparent;
        }
        50% {
        color: #2c3e50;
        }
    }
}
</style>
