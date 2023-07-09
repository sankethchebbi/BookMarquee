browser.contextMenus.create({
    id: 'bookmarkSearch',
    title: 'Search Bookmarks',
    contexts: ['selection']
  });
  
  browser.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'bookmarkSearch') {
      var searchInput = document.getElementById('searchInput');
      searchInput.value = info.selectionText;
      searchInput.dispatchEvent(new Event('input'));
    }
  });
  