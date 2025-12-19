 // Animate progress bars after DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.progress-bar').forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = value + '%';
      });
    });