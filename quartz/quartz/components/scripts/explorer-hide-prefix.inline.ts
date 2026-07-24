function hidePrefix(text: string) {
  const match = text.match(/^(\d+\.)*\d+-(.+)$/)
  return match ? match[2] : text
}

function hideAllPrefixes() {
  const selectors = [
    '.explorer .folder-title',
    '.explorer .nav-file-title',
    'h1',
    '.breadcrumb-container a',
    '.breadcrumb-container span',
    '.breadcrumb-container p',
    '.page-listing h3',
    '.page-listing .desc h3',
    '.page-listing .meta'
  ]
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      const text = el.textContent || ''
      const newText = hidePrefix(text)
      if (newText !== text) {
        el.textContent = newText
      }
    })
  })
  
  const titleEl = document.querySelector('title')
  if (titleEl) {
    titleEl.textContent = hidePrefix(titleEl.textContent || '')
  }
}

function setupObserver() {
  const explorerUl = document.querySelector('.explorer-ul')
  if (!explorerUl) {
    setTimeout(setupObserver, 100)
    return
  }
  
  const observer = new MutationObserver(() => {
    hideAllPrefixes()
  })
  
  observer.observe(explorerUl, {
    childList: true,
    subtree: true
  })
  
  window.addCleanup?.(() => observer.disconnect())
}

function init() {
  hideAllPrefixes()
  setupObserver()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}

document.addEventListener('nav', () => {
  hideAllPrefixes()
  setupObserver()
})
document.addEventListener('render', hideAllPrefixes)
