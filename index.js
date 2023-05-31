$(function () {
  $("#sortable").sortable();

  $("#sortable").on("sortupdate", function () {
    const cardOrder = [];

    $("#sortable .card").each(function () {
      cardOrder.push($(this).attr("id"));
    });

    localStorage.setItem("cardOrder", JSON.stringify(cardOrder));
  });

  const savedCardOrder = localStorage.getItem("cardOrder");
  if (savedCardOrder) {
    const cardIds = JSON.parse(savedCardOrder);

    cardIds.forEach(function (cardId) {
      $("#" + cardId).appendTo("#sortable");
    });
  }
});
