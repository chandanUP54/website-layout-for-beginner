function showContent(gender) {
    var menContent = document.getElementById("menContent");
    var womenContent = document.getElementById("womenContent");
    var menTab = document.getElementById("menTab");
    var womenTab = document.getElementById("womenTab");

    if (gender === 'men') {
        menContent.style.display = "block";
        womenContent.style.display = "none";
        menTab.classList.add("active");
        womenTab.classList.remove("active");
    } else {
        menContent.style.display = "none";
        womenContent.style.display = "block";
        menTab.classList.remove("active");
        womenTab.classList.add("active");
    }
}
