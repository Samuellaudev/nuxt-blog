<template>
    <div class="main-page">
        <div class="container mb-5">
            <div class="row mt-5 mb-5 gap-2 object-to-scroll">
                <section class="section-introduction scroll-to-appear">
                    <h1 class="name" v-gsap.fromTo="[
                        { opacity: 0, y: -350 },
                        { opacity: 1, y: 0, duration: 0.8 }
                    ]">
                        <img class="icon-wow" src="@/assets/svg/wow.svg" alt="" />Hi, I'm Samuel Lau.
                    </h1>
                    <TypingEffect />
                </section>
            </div>
            <el-divider />
            <div class="row mt-3 mb-3 gap-2 object-to-scroll">
                <section id="about" class="scroll-to-appear section-about-me col-12-xs col-6-sm col-6-xl">
                    <h2 class="about-section-title font-xl mb-2">Nice to meet you!</h2>
                    <div v-for="(paragraph, index) in paragraphContent" :key="index">
                        <p class="mb-2">{{ paragraph.content }}</p>
                    </div>
                </section>
                <section class="about-section-image col-12-xs col-6-sm col-6-xl">
                    <div class="pattern-dots-md gray-light logo-image">
                        <img class="portrait-image" style="transform:translate(23px, -20px);" :src="require('@/assets/img/portrait_human.png')" />
                    </div>
                </section>
            </div>
            <el-divider />
            <div class="row mt-3 mb-3 gap-2 object-to-scroll">
                <h2 class="blog-section-title font-xl scroll-to-appear">Latest blogs</h2>
                <section class="section-latest-blog">
                    <div class="blog-individual-post col-12-xs col-6-sm col-6-xl" v-for="article of articles" :key="article.slug">
                        <nuxt-link class="blog-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                            <img class="blog-image" :src="article.img" alt="">
                        </nuxt-link>
                        <nuxt-link class="blog-link" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                            <div class="blog-content">
                                <h2 class="blog-title">{{ article.title }}</h2>
                                <p class="blog-description">{{ article.description }}</p>
                                <div class="article-created-date">{{ formatDate(article.createdAt) }}</div>
                            </div>
                        </nuxt-link>
                    </div>
                </section>
            </div>
            <el-divider />
            <div class="row mt-3 gap-2 object-to-scroll">
                <section class="scroll-to-appear section-experience experience-section-content col-12-xs col-6-sm col-6-xl">
                    <h2 class="experience-section-title font-xl mb-2">Experience</h2>
                    <el-timeline class="timeline p-2 br-sm">
                        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type" :color="activity.color" :size="activity.size">
                            <span class="job-title">{{ activity.title }}</span>
                            <span class="job-company font-md">{{ activity.company }}</span>
                            <span class="job-date font-md">{{ activity.timestamp }}</span>
                        </el-timeline-item>
                    </el-timeline>
                </section>
                <section class="section-skills skill-section-content col-12-xs col-6-sm col-6-xl">
                    <h2 class="skill-section-title font-xl mb-2">Skills</h2>
                    <div class="progress-bar p-2 br-sm">
                        <div v-for="(item, index) in progressBarData" :key="index" class="bar-item">
                            <span class="skill-title">{{ item.skillTitle }}</span>
                            <el-progress :text-inside="false" :stroke-width="item.strokeWidth" :percentage="item.percentage" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import TypingEffect from '../components/TypingEffect.vue';
export default {
    components: { TypingEffect },
    name: "IndexPage",
    data() {
        const paragraphContent = this.$config.paragraphsDetails

        const activities = this.$config.activitiesDetails

        const progressBarData = this.$config.progressBarDetails

        return { paragraphContent, activities, progressBarData };
    },
    async asyncData({ $content, params }) {
        const articles = await $content("articles")
            .limit(3)
            .only(["title", "description", "img", "slug", "author", 'createdAt'])
            .sortBy("createdAt", "desc")
            .fetch();

        return {
            articles,
        };
    },
    mounted() {
        this.animateOnScroll()
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };

            return new Date(date).toLocaleDateString("en", options);
        },
        animateOnScroll() {
            const projects = document.querySelectorAll(".object-to-scroll");

            projects.forEach(project => {
                this.$gsap.from(project, {
                    opacity: 0,
                    yPercent: 10,
                    scrollTrigger: {
                        trigger: project.querySelector(".scroll-to-appear"),
                        start: "top-=100 bottom-=130",
                        end: "top center",
                        toggleActions: "play none none reverse",
                        markers: false
                    }
                });
            });
        }
    },
};
</script>

<style lang="scss" scoped>
.main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2rem;

    .section-introduction {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 35rem;
        font-size: 2rem;
        border-radius: 20px;
        background-color: #1B353C;

        .name {
            padding-bottom: 1rem;
            position: relative;
        }

        .icon-wow {
            position: absolute;
            top: -15px;
            left: -20px;
        }

        .typing-effect-container {
            ::v-deep h1 {
                font-size: 2.5rem;
            }

            ::v-deep .blinking-cursor {
                font-size: 2.5rem;
            }
        }
    }

    .section-latest-blog {
        display: flex;

        .blog-individual-post {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem 2rem;
            margin: 0.4rem;
            border-radius: 20px;
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);

            &:hover {
                transition: 0.3s ease-out;
                -webkit-transform: scale(1.3);
                -ms-transform: scale(1.3);
                transform: scale(1.05);
            }

            .blog-link {
                display: inline-block;
                text-decoration: none;

                .blog-content {
                    text-align: left;
                    font-size: 0.9rem;
                    color: #7F868D;

                    .blog-title {
                        margin-bottom: 1rem;
                        margin-top: 1rem;
                        color: white;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    .article-created-date {
                        line-height: 2rem;
                    }
                }
            }

            .blog-image {
                width: 10rem;
                height: 10rem;
                object-fit: cover;
            }
        }
    }

    @media (max-width: 480px) {
        .section-latest-blog {
            display: flex;
            flex-direction: column;
        }
    }

    .section-about-me {
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);
        border-radius: 20px;

        p {
            line-height: 1.5rem;
        }
    }

    .about-section-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo-image {
            max-width: 80%;

            .portrait-image {
                border-radius: 20px;
            }
        }
    }

    @media (max-width: 480px) {
        .about-section-image {
            margin-top: 40px;
        }
    }

    .el-divider {
        background-color: rgba(255, 255, 255, 0.2);
        max-width: 100%;
        margin: 40px 0;
    }

    .experience-section-content {
        .timeline {
            display: block;
            background: rgba(255, 255, 255, 0.1);

            .job-company,
            .job-date {
                display: block;
                padding-top: 0.5rem;
                color: rgba(255, 255, 255, 0.5);
            }

            ::v-deep .el-timeline-item__content {
                color: white;
            }
        }
    }

    .skill-section-content {

        .progress-bar {
            background: rgba(255, 255, 255, 0.1);

            .bar-item {
                padding: 0.52rem 0;
            }

            ::v-deep .el-progress .el-progress-bar {
                margin-bottom: 15px;
            }

            ::v-deep .el-progress-bar__inner {
                background-color: rgba(60, 179, 113, 0.8);
                top: 3px;
                height: 65%;
                text-align: center;
                line-height: 0;
                border: 1px solid black;
                left: 3px;
            }

            ::v-deep .el-progress__text {
                color: white !important;
                font-size: 16px !important;
                margin-left: 15px !important;
                margin-bottom: 15px;
            }
        }

        .skill-title {
            font-weight: bold;
            display: inline-block;
            padding-bottom: 0.6rem;
        }

    }

}
</style>
