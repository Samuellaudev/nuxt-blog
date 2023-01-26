<template>
    <div class="main-page">
        <div class="container mb-5">
            <div class="row mt-5 mb-5 gap-2">
                <section class="section-introduction">
                    <h1 class="name">Hi, I'm Samuel Lau.</h1>
                    <TypingEffect />
                </section>
            </div>
            <!-- <el-divider /> -->
            <div class="row mt-1 mb-5 gap-2">
                <section id="about" class="section-about-me col-12-xs col-6-sm col-6-xl">
                    <h2 class="about-section-title font-xl mb-2">Nice to meet you!</h2>
                    <div v-for="(paragraph, index) in paragraphContent" :key="index">
                        <p class="mb-2">{{ paragraph.content }}</p>
                    </div>
                </section>
                <section class="about-section-image col-12-xs col-6-sm col-6-xl">
                    <img class="logo-image" :src="require('@/assets/img/portrait_human.png')" />
                </section>
            </div>
            <!-- <el-divider /> -->
            <div class="row mt-1 mb-5 gap-2">
                <h2 class="blog-section-title font-xl">Latest blogs</h2>
                <section class="section-latest-blog">
                    <div class="blog-individual-post" v-for="article of articles" :key="article.slug">
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
            <!-- <el-divider /> -->
            <div class="row mt-1 gap-2">
                <section class="section-experience experience-section-content col-12-xs col-6-sm col-6-xl">
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
        const paragraphContent = [
            {
                content: `It’s Samuel, Front-End Web Developer. After graduated with a degree in commerce, I
                started to work as a rehab fitness trainer in fitness industry. I enjoy the process to help people
                achieving their fitness goals.`,
            },
            {
                content: `Like many others, the coronavirus (COVID-19) outbreak has had a big impact on my career,
                which I had started to develop an interest in graphic design and using WordPress to develop my first
                website.`,
            },
            {
                content: `Learning to code and web design through a self-learning path is not easy. However, it’s
                the creative work that makes me happy and I enjoy bringing ideas to life through browser. It’s my
                pleasure to share it with others!`,
            }
        ]
        const activities = [
            {
                title: 'Web Developer',
                company: 'PressLogic',
                timestamp: '2022-current',
                type: 'primary',
                size: 'large',
            }, {
                title: 'Junior Web Developer',
                company: 'LANE EIGHT',
                timestamp: '2022',
            }, {
                title: 'Front-End Web Developer',
                company: 'Freelance',
                timestamp: '2021-2022',
            }, {
                title: 'Fitness Trainer',
                company: 'Chinese YMCA of Hong Kong',
                timestamp: '2020-2021',
            }, {
                title: 'Omni Sport Leader',
                company: 'Decathlon Hong Kong',
                timestamp: '2017-2018'
            }
        ]

        const progressBarData = [
            {
                skillTitle: 'HTML5 + CSS3',
                strokeWidth: 26,
                percentage: 90
            }, {
                skillTitle: 'JavaScript',
                strokeWidth: 24,
                percentage: 80
            }, {
                skillTitle: 'Nuxt.js',
                strokeWidth: 22,
                percentage: 70
            }, {
                skillTitle: 'Vue.js',
                strokeWidth: 20,
                percentage: 70
            }, {
                skillTitle: 'Node.js',
                strokeWidth: 20,
                percentage: 40
            }, {
                skillTitle: 'PhotoShop & Illustrator',
                strokeWidth: 20,
                percentage: 30
            }
        ]

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
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };

            return new Date(date).toLocaleDateString("en", options);
        },
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
        }

        .typing-effect-container {
            ::v-deep h1 {
                font-size: 2.7rem;
            }

            ::v-deep .blinking-cursor {
                font-size: 2.7rem;
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
        .logo-image {
            border-radius: 20px;
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
                padding: 0.77rem 0;
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
