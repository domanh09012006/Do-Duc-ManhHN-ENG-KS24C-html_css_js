document.addEventListener("DOMContentLoaded", function () {
    const addBookmarkBtn = document.getElementById("add-bookmark-btn");
    const modal = document.getElementById("bookmark-modal");
    const closeModal = document.querySelector(".close");
    const saveBookmarkBtn = document.getElementById("save-bookmark");
    const websiteNameInput = document.getElementById("website-name");
    const websiteUrlInput = document.getElementById("website-url");
    const bookmarksContainer = document.getElementById("bookmarks-container");

    function loadBookmarks() {
        bookmarksContainer.innerHTML = "";
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

        bookmarks.forEach((bookmark, index) => {
            const div = document.createElement("div");
            div.classList.add("bookmark");
            div.innerHTML = `
                <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                <button class="delete-btn" data-index="${index}">X</button>
            `;
            bookmarksContainer.appendChild(div);
        });

        let deleteButtons = document.querySelectorAll(".delete-btn");
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].onclick = function () {
                let index = this.getAttribute("data-index");
                deleteBookmark(index);
            };
        }
    }

    function deleteBookmark(index) {
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        loadBookmarks();
    }

    addBookmarkBtn.onclick = function () {
        modal.style.display = "block";
    };

    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    saveBookmarkBtn.onclick = function () {
        const name = websiteNameInput.value.trim();
        const url = websiteUrlInput.value.trim();

        if (name && url) {
            let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
            bookmarks.push({ name, url });
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
            websiteNameInput.value = "";
            websiteUrlInput.value = "";
            modal.style.display = "none";
            loadBookmarks();
        }
    };

    loadBookmarks();
});