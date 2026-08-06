// 자료실 탭 전환
const noticeTab = document.getElementById("noticeTab");
const archiveTab = document.getElementById("archiveTab");
const noticeBox = document.getElementById("noticeBox");
const archiveBox = document.getElementById("archiveBox");

noticeTab.addEventListener("click", function () { //addEventListener: 클릭 이벤트 감지
    noticeTab.classList.add("active");
    archiveTab.classList.remove("active");

    noticeBox.style.display = "grid"; //style.display: 선택한 상자만 보이고(grid), 안한 건 숨기기(none)
    archiveBox.style.display = "none";
});

archiveTab.addEventListener("click", function () {
    archiveTab.classList.add("active");
    noticeTab.classList.remove("active");

    archiveBox.style.display = "grid";
    noticeBox.style.display = "none";
});

