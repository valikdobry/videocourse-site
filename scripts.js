document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    el: "#app",
    data: {
      currentPage: "home",
      courses: [annansuomicourse, IvanPetrichenkoWEB, course2],
      currentCourse: null,
      currentSubcourse: null,
      currentLesson: null,
      currentTask: null,
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
      opentask(task) {
        this.currentTask = task;
        this.currentPage = "task";
      },
      goBack() {
        if (this.currentPage === "course") {
          this.currentPage = "home";
        } else if (this.currentPage === "subcourse") {
          this.currentPage = "course";
        } else if (this.currentPage === "lesson") {
          this.currentPage = "subcourse";
        } else if (this.currentPage === "task") {
          this.currentPage = "lesson";
        }

      },
      getYoutubeEmbedUrl(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      },
      getTotalLessons(course) {
        return course.subcourses.reduce(
          (total, subcourse) => total + subcourse.lessons.length,
          0
        );
      },
    },
    computed: {
      previousLesson() {
        if (this.currentPage === "lesson" && this.currentSubcourse) {
          const index = this.currentSubcourse.lessons.indexOf(
            this.currentLesson
          );
          if (index > 0) {
            return this.currentSubcourse.lessons[index - 1];
          }
        }
        return null;
      },
      nextLesson() {
        if (this.currentPage === "lesson" && this.currentSubcourse) {
          const index = this.currentSubcourse.lessons.indexOf(
            this.currentLesson
          );
          if (index < this.currentSubcourse.lessons.length - 1) {
            return this.currentSubcourse.lessons[index + 1];
          }
        }
        return null;
      },
    },
  });
});
