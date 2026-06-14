/* ============================================================
   EaseMotion CSS — sidebar.js
   Sidebar toggle, collapse, and mobile handling
   Issue: #7798
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.querySelector('.ease-sidebar');
    var overlay = document.querySelector('.ease-sidebar-overlay');
    var toggleBtn = document.querySelector('.ease-sidebar-toggle');
    var collapseBtn = document.querySelector('.ease-sidebar-collapse');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        if (overlay) {
          overlay.classList.toggle('open');
        }
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }

    if (collapseBtn && sidebar) {
      collapseBtn.addEventListener('click', function () {
        sidebar.classList.toggle('ease-sidebar-collapsed');
      });
    }

    var sidebarItems = document.querySelectorAll('.ease-sidebar-item');
    sidebarItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        sidebarItems.forEach(function (el) {
          el.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
      });
    });
  });
})();