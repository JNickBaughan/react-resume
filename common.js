$(document).ready(function () {
  config.forEach(function (element, index, array) {
    var html = Mustache.to_html(element.template, element.data);
    $("#" + element.sectionID).html(html);
  });

  var bioBottom =
    document.getElementById("content_bio").offsetTop +
    document.getElementById("content_bio").offsetHeight +
    30;

  var skillsTop = document.getElementById("content_skills").offsetTop + 30;
  var skillsBottom =
    skillsTop + document.getElementById("content_skills").offsetHeight + 30;

  var examplesTop = document.getElementById("content_examples").offsetTop + 30;
  var examplesBottom =
    examplesTop + document.getElementById("content_examples").offsetHeight + 30;

  var experienceTop =
    document.getElementById("content_experience").offsetTop + 30;
  var experienceBottom =
    experienceTop +
    document.getElementById("content_experience").offsetHeight +
    30;

  var educationTop =
    document.getElementById("content_education").offsetTop + 30;

  $("#scroll").scroll(function () {
    clearTimeout($.data(this, "scrollTimer"));
    $.data(
      this,
      "scrollTimer",
      setTimeout(function () {
        var height = $("#scroll")[0].clientHeight / 2;
        var t = $("#scroll")[0].scrollTop + height;

        if (t < bioBottom) {
          $(".nav > li").removeClass("active");
          $("#bio").addClass("active");
        }
        if (t > skillsTop && t < skillsBottom) {
          $(".nav > li").removeClass("active");
          $("#skills").addClass("active");
        }
        if (t > examplesTop && t < examplesBottom) {
          $(".nav > li").removeClass("active");
          $("#examples").addClass("active");
        }
        if (t > experienceTop && t < experienceBottom) {
          $(".nav > li").removeClass("active");
          $("#experience").addClass("active");
        }
        if (t > educationTop) {
          $(".nav > li").removeClass("active");
          $("#education").addClass("active");
        }
      }, 250)
    );
  });

  var getElementOffset = function (id) {
    var element = document.getElementById("content_" + id);
    offset = element.offsetTop - 90;
    return offset;
  };

  var activateClickedElement = function (id) {
    $(".nav > li").removeClass("active");
    $("#" + id).addClass("active");
  };

  var scrollToCorrectElement = function (offset) {
    $("#scroll").animate({
      scrollTop: offset,
    });
  };

  var getOffSet = function (id) {
    var offSet = getElementOffset(id);
    activateClickedElement(id);
    scrollToCorrectElement(offSet);
  };

  $("#bio").click(function () {
    var id = this.id;
    getOffSet(id);
  });

  $("#examples").click(function () {
    var id = this.id;
    getOffSet(id);
  });

  $("#skills").click(function () {
    var id = this.id;
    getOffSet(id);
  });

  $("#education").click(function () {
    var id = this.id;
    getOffSet(id);
  });

  $("#experience").click(function () {
    var id = this.id;
    getOffSet(id);
  });

  $(".toggle").click(function () {
    $(".content").addClass("hidden");
    $("#parcelViewerWrapper").removeClass("hidden");
  });

  $("#filterToggle").click(function () {
    $(".content").addClass("hidden");
    $("#filterJSWrapper").removeClass("hidden");
  });

  $(".back").click(function () {
    $(".content").addClass("hidden");
    $("#resumeWrapper").removeClass("hidden");
  });
});
