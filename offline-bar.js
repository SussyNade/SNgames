(function() {
  const offlineBarId = 'offline-status-bar';

  function createOfflineBar() {
    if (document.getElementById(offlineBarId)) return;

    const bar = document.createElement('div');
    bar.id = offlineBarId;
    const lang = localStorage.getItem('language') || 'pt';
    const dict = (typeof i18n !== 'undefined' && i18n[lang]) ? i18n[lang] : i18n && i18n['pt'];
    bar.textContent = (dict && dict.offlineTitle) ? dict.offlineTitle : 'Você está offline';
    
    // Styling the bar
    Object.assign(bar.style, {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: '#e94560',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      fontSize: '14px',
      fontWeight: 'bold',
      zIndex: '10001',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
    });

    document.body.appendChild(bar);
  }

  function removeOfflineBar() {
    const bar = document.getElementById(offlineBarId);
    if (bar) bar.remove();
  }

  function updateStatus() {
    if (navigator.onLine) {
      removeOfflineBar();
    } else {
      createOfflineBar();
    }
  }

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);

  // Initial check
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateStatus);
  } else {
    updateStatus();
  }
})();
