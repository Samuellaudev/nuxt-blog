<template>
  <div class="container mb-5">
    <div class="row mt-1 gap-2">
      <div class="about-section-content col-12-xs col-6-sm col-6-xl">
        <h2 class="about-section-title font-xl mb-2">ABOUT ME</h2>
        <div v-for="(paragraph, index) in paragraphContent" :key="index">
          <p class="mb-2">{{ paragraph.content }}</p>
        </div>
      </div>
      <div class="about-section-image col-12-xs col-6-sm col-6-xl">
        <img class="logo-image" :src="require('@/assets/img/portrait.png')" />
      </div>
    </div>
    <el-divider />
    <div class="row mt-1 gap-2">
      <div class="experience-section-content col-12-xs col-6-sm col-6-xl">
        <h2 class="experience-section-title font-xl mb-2">EXPERIENCE</h2>
        <el-timeline class="timeline p-2 br-sm">
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size">
            <span class="job-title">{{ activity.title }}</span>
            <span class="job-company font-md">{{ activity.company }}</span>
            <span class="job-date font-md">{{ activity.timestamp }}</span>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="skill-section-content col-12-xs col-6-sm col-6-xl">
        <h2 class="skill-section-title font-xl mb-2">SKILLS</h2>
        <div class="progress-bar p-2 br-sm">
          <div v-for="(item, index) in progressBarData" :key="index">
            <span class="skill-title">{{ item.skillTitle }}</span>
            <el-progress :text-inside="false" :stroke-width="item.strokeWidth" :percentage="item.percentage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
  }
};
</script>

<style lang="scss" scoped>
.about-section-content {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);
  border-radius: 20px;

  p {
    line-height: 1.5rem;
  }
}

.logo-image {
  border-radius: 20px;
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
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 100%);
  border-radius: 20px;
  height: 550px;

  .progress-bar {
    background: rgba(255, 255, 255, 0.1);

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
</style>
