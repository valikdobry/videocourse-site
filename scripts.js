new Vue({
  el: "#app",
  data: {
    currentPage: "home",
    courses: [
      {
        name: "Курс 1",
        subcourses: [
          {
            name: "Подкурс 1",
            lessons: [
              { name: "Урок 1", videoId: "fcMcf_4PjfI" },
              { name: "Урок 2", videoId: "fcMcf_4PjfI" },
            ],
          },
          // ... другие подкурсы и уроки ...
        ],
      },
      // ... другие курсы ...
    ],
    currentCourse: null,
    currentSubcourse: null,
    currentLesson: null,
  },
  methods: {
    openCourse(course) {
      this.currentCourse = course;
      this.currentPage = "course";
    },
    openSubcourse(subcourse) {
      this.currentSubcourse = subcourse;
      this.currentPage = "subcourse";
    },
    openLesson(lesson) {
      this.currentLesson = lesson;
      this.currentPage = "lesson";
    },
    goBack() {
      if (this.currentPage === "course") {
        this.currentPage = "home";
      } else if (this.currentPage === "subcourse") {
        this.currentPage = "course";
      } else if (this.currentPage === "lesson") {
        this.currentPage = "subcourse";
      }
    },
    getYoutubeEmbedUrl(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
});
