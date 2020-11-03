import '../scss/page/top.scss'
import {
  WebGLRenderer,
  // OrthographicCamera,
  PerspectiveCamera,
  Scene,
  // PlaneGeometry,
  CubeGeometry,
  // ShaderMaterial,
  MeshNormalMaterial,
  Mesh,
} from 'three'

// import vertexShader from '../shader/main.vert'
// import fragmentShader from '../shader/main.frag'

export default class Top {
  constructor() {
    this.size = null
    this.renderer = null
    this.camera = null
    this.scene = null
    this.mesh = null
  }

  windowSize() {
    this.size = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }

  init($canvas) {
    this.windowSize()

    this.renderer = new WebGLRenderer()
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight)
    this.renderer.setClearColor(0x000000)
    this.renderer.setPixelRatio(window.devicePixelRatio || 1)
    $canvas.appendChild(this.renderer.domElement)

    // this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.camera = new PerspectiveCamera()
    this.camera.position.set(0, 10, 150)

    this.resize()
    this.shape()
    this.render()
  }

  shape() {
    this.scene = new Scene()
    // const geo = new PlaneGeometry(2, 2, 10, 10)
    // const mat = new ShaderMaterial({
    //   vertexShader,
    //   fragmentShader,
    //   wireframe: true,
    // })
    const geo = new CubeGeometry(50, 50, 50)
    const mat = new MeshNormalMaterial()
    this.mesh = new Mesh(geo, mat)
    this.mesh.position.set(0, 5, 1)
    this.scene.add(this.mesh)
  }

  animation() {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    this.mesh.rotation.z += 0.01
  }

  render() {
    this.animation()
    requestAnimationFrame(() => this.render())
    this.renderer.render(this.scene, this.camera)
  }

  resize() {
    this.windowSize()
    this.camera.aspect = this.size.windowWidth / this.size.windowHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.size.windowWidth, this.size.windowHeight)
  }
}
