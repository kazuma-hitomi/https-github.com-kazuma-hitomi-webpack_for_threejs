import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '../scss/main.scss'
import Top from './top'
;(() => {
  const top = new Top()
  const canvas = document.getElementById('canvas')

  top.init(canvas)

  window.addEventListener('resize', () => top.resize(), { passive: true })
})()
