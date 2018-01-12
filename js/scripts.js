$(document).ready(function () {

  var cssScore = 0;
  var javaScore = 0;
  var phpScore = 0;
  var rubyScore = 0;
  var cSharpScore = 0;

  var getScores = function(name, design, end, product, company) {

    console.log("getting Scores");

    if (end === "Back-end") {
      phpScore += 1;
    } else if (end === "Both") {
      cSharpScore += 1;
    };

    if (product === "websites") {
      phpScore += 1;
    } else if (product === "internal-business") {
      cSharpScore += 1;
    } else if (product === "android") {
      javaScore += 1;
    } else {
      rubyScore += 1;
    };

    if (company === "startup") {
      rubyScore += 1;
    } else {
      phpScore += 1;
      cSharpScore += 1;
      javaScore =+ 1;
    };

    if (design === "yes") {
      cssScore = 1;
      javaScore = 0;
      phpScore = 0;
      rubyScore = 0;
      cSharpScore = 0;
    };

    console.log(cssScore);
    console.log(javaScore);
    console.log(phpScore);
    console.log(rubyScore);
    console.log(cSharpScore);

  }

  var displayRecommendations = function() {

    if (cssScore >= cssScore && cssScore >= javaScore && cssScore >= phpScore && cssScore >= rubyScore && cssScore >= cSharpScore) {
      $("#cssResult").show();
    } else if (javaScore >= cssScore  && javaScore >= phpScore && javaScore >= rubyScore && javaScore >= cSharpScore) {
      $("#javaResult").show();
    } else if (phpScore >= cssScore && phpScore >= javaScore && phpScore >= rubyScore && phpScore >= cSharpScore) {
      $("#phpResult").show();
    } else if (rubyScore >= cssScore && rubyScore >= javaScore && rubyScore >= phpScore && rubyScore >= cSharpScore) {
      $("#rubyResult").show();
    } else if (cSharpScore >= cssScore && cSharpScore >= javaScore && cSharpScore >= phpScore && cSharpScore >= rubyScore) {
      $("#cSharpResult").show();
    };

  };

  var reset = function() {

    $(".btn").text("Receive New Recommendation");
    $(".result").hide();
    cssScore = 0;
    javaScore = 0;
    phpScore = 0;
    rubyScore = 0;
    cSharpScore = 0;
  };

  $("#form").submit(function(event) {

    reset();

    var name = $("#name").val();
    console.log(name);
    var design = $("input:radio[name=design]:checked").val();
    var end = $("#end").val();
    var product = $("input:radio[name=product]:checked").val();
    var company = $("input:radio[name=company]:checked").val();

    getScores(name, design, end, product, company);
    displayRecommendations();
    event.preventDefault();

  });


});
