<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
      <div class="info">
        <a href="" class="author">Kriss Kawa</a>
        <span class="date">February 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> 28
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>How to build robust and dynamic React Native apps</h1>
      <p>Learn about basics of React Native app development</p>
      <span>Read more...</span>
    </a>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["article"],
  methods: {
    formatDate(dateString) {
      return moment(dateString).format("MMMM Do, YYYY");
    }
  }
};
</script>