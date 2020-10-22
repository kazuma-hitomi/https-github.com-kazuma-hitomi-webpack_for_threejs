import '../scss/page/top.scss'
import {
  WebGLRenderer,
  OrthographicCamera,
  Scene,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
} from 'three'

import vertexShader from '../shader/main.vert'
import fragmentShader from '../shader/main.frag'

class Top {
  constructor() {
    this.w = window.innerWidth
    this.h = window.innerHeight

    this.renderer = new WebGLRenderer()
    this.renderer.setSize(this.w, this.h)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    const canvas = document.getElementById('canvas')
    canvas.appendChild(this.renderer.domElement)

    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

    this.scene = new Scene()

    const geo = new PlaneGeometry(2, 2, 10, 10)
    const mat = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      wireframe: true,
    })
    this.mesh = new Mesh(geo, mat)

    this.scene.add(this.mesh)

    this.render()
  }

  render() {
    requestAnimationFrame(() => this.render)
    this.renderer.render(this.scene, this.camera)
  }
}

new Top()
