<template>
  <div class="container">
    <div class="row mt-1 gap-2">
      <div class="about-section-content col-12-xs col-6-sm col-6-xl">
        <div class="about-section-title font-xl mb-2">ABOUT ME</div>
        <p class="mb-2">It’s Samuel, Front-End Web Developer. After graduated with a degree in commerce, I
          started to work as a rehab fitness trainer in fitness industry. I enjoy the process to help people
          achieving their fitness goals.</p>
        <p class="mb-2">Like many others, the coronavirus (COVID-19) outbreak has had a big impact on my career,
          which I had started to develop an interest in graphic design and using WordPress to develop my first
          website.</p>
        <p class="mb-2">Learning to code and web design through a self-learning path is not easy. However, it’s
          the creative work that makes me happy and I enjoy bringing ideas to life through browser. It’s my
          pleasure to share it with others!</p>
      </div>
      <div class="about-section-imag col-12-xs col-6-sm col-6-xl">
        <img class="logo-image" :src="require('@/assets/img/portrait.png')" />
      </div>
    </div>
    <div class="row mt-1 gap-2">
      <div class="experience-section-content col-12-xs col-6-sm col-6-xl">
        <div class="experience-section-title font-xl mb-2">EXPERIENCE</div>
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
        <div class="skill-section-title font-xl mb-2">SKILLS</div>
        <div class="progress-bar p-2 br-sm">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
          <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
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

      return { activities };
    }
};
</script>

<style lang="scss" scoped>
.about-section-content {
  p {
    line-height: 1.5rem;
  }
}

.experience-section-content {
  .timeline {
    display: block;
    background: rgba(255,255,255, 0.1);

    .job-company, .job-date {
      display: block;
      padding-top: 0.5rem;
      color: rgba(255,255,255,0.5);
    }

    ::v-deep .el-timeline-item__content{
      color: white;
    }
  }
}

.skill-section-content {
  .progress-bar {
    background: rgba(255,255,255, 0.1);
  }

}
</style>
