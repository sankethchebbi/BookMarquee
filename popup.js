document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');
    var bookmarkList = document.getElementById('bookmarkList');
  
    searchInput.addEventListener('input', function () {
      var query = searchInput.value.toLowerCase();
  
      while (bookmarkList.firstChild) {
        bookmarkList.firstChild.remove();
      }
  
      if (query.length > 0) {
        browser.bookmarks.search(query).then(function (bookmarks) {
          bookmarks.forEach(function (bookmark) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = bookmark.url;
            link.textContent = bookmark.title;
            listItem.appendChild(link);
            bookmarkList.appendChild(listItem);
          });
        });
      }
    });
  });
  