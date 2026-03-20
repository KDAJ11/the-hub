'use client'
import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'

export default function CrownScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const crownRef = useRef<THREE.Group | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number>(0)
  const isIdleRef = useRef(true)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const prefersReducedMotion = useRef(false)

  const buildCrown = useCallback(() => {
    const group = new THREE.Group()

    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      metalness: 0.92,
      roughness: 0.12,
      envMapIntensity: 1.2,
    })

    const darkGoldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xC9A227,
      metalness: 0.95,
      roughness: 0.1,
      envMapIntensity: 1.0,
    })

    // Crown base band - a torus
    const bandGeom = new THREE.TorusGeometry(1.6, 0.22, 16, 64)
    const band = new THREE.Mesh(bandGeom, goldMaterial)
    band.rotation.x = Math.PI / 2
    band.position.y = -0.3
    group.add(band)

    // Crown body - cylinder with slight taper
    const bodyGeom = new THREE.CylinderGeometry(1.55, 1.65, 0.9, 64)
    const body = new THREE.Mesh(bodyGeom, goldMaterial)
    body.position.y = 0.15
    group.add(body)

    // Upper decorative band
    const upperBandGeom = new THREE.TorusGeometry(1.56, 0.08, 8, 64)
    const upperBand = new THREE.Mesh(upperBandGeom, darkGoldMaterial)
    upperBand.rotation.x = Math.PI / 2
    upperBand.position.y = 0.55
    group.add(upperBand)

    // Crown points — 7 points (7 pillars)
    const numPoints = 7
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2

      // Main point - using a cone (slightly smaller to fit 7 evenly)
      const pointGeom = new THREE.ConeGeometry(0.28, 0.9, 4)
      const point = new THREE.Mesh(pointGeom, goldMaterial)
      point.position.set(
        Math.cos(angle) * 1.4,
        1.05,
        Math.sin(angle) * 1.4
      )
      point.lookAt(
        Math.cos(angle) * 3,
        1.7,
        Math.sin(angle) * 3
      )
      point.rotateX(Math.PI / 2)
      group.add(point)

      // Jewel orb on each point tip
      const jewelGeom = new THREE.SphereGeometry(0.08, 16, 16)
      const jewelMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x7B35C4,
        metalness: 0.3,
        roughness: 0.1,
        emissive: 0x7B35C4,
        emissiveIntensity: 0.5,
      })
      const jewel = new THREE.Mesh(jewelGeom, jewelMaterial)
      jewel.position.set(
        Math.cos(angle) * 1.4,
        1.55,
        Math.sin(angle) * 1.4
      )
      group.add(jewel)

      // Connecting arch between points
      const nextAngle = ((i + 1) / numPoints) * Math.PI * 2
      const midAngle = (angle + nextAngle) / 2
      const archGeom = new THREE.TorusGeometry(0.35, 0.05, 8, 16, Math.PI)
      const arch = new THREE.Mesh(archGeom, darkGoldMaterial)
      arch.position.set(
        Math.cos(midAngle) * 1.4,
        0.6,
        Math.sin(midAngle) * 1.4
      )
      arch.rotation.y = -midAngle + Math.PI / 2
      arch.rotation.z = Math.PI
      group.add(arch)
    }

    // Inner rim detail
    const innerRimGeom = new THREE.TorusGeometry(1.3, 0.05, 8, 64)
    const innerRim = new THREE.Mesh(innerRimGeom, darkGoldMaterial)
    innerRim.rotation.x = Math.PI / 2
    innerRim.position.y = -0.3
    group.add(innerRim)

    return group
  }, [])

  const createParticles = useCallback(() => {
    const count = 80
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })
    return new THREE.Points(geom, mat)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 1.5, 6)
    camera.lookAt(0, 0.5, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    rendererRef.current = renderer
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFD700, 0.4)
    scene.add(ambientLight)

    const purpleLight = new THREE.DirectionalLight(0x7B35C4, 0.8)
    purpleLight.position.set(-3, 4, 2)
    scene.add(purpleLight)

    const goldLight = new THREE.DirectionalLight(0xFFD700, 1.0)
    goldLight.position.set(3, 3, 4)
    scene.add(goldLight)

    const rimLight = new THREE.DirectionalLight(0xB87FFF, 0.4)
    rimLight.position.set(0, -2, -3)
    scene.add(rimLight)

    const topLight = new THREE.PointLight(0xFFE97A, 0.6, 15)
    topLight.position.set(0, 5, 0)
    scene.add(topLight)

    // Build crown
    const crown = buildCrown()
    crown.rotation.x = -0.15
    scene.add(crown)
    crownRef.current = crown

    // Particles
    const particles = createParticles()
    scene.add(particles)
    particlesRef.current = particles

    // Resize handler
    const resize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    resize()
    window.addEventListener('resize', resize)

    // Mouse handler (desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      isIdleRef.current = false
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => { isIdleRef.current = true }, 2000)
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Device orientation for mobile
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        mouseRef.current.x = (e.gamma / 45) * 0.5
        mouseRef.current.y = ((e.beta - 45) / 45) * 0.5
        isIdleRef.current = false
        if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
        idleTimerRef.current = setTimeout(() => { isIdleRef.current = true }, 2000)
      }
    }

    // Request permission on iOS, otherwise just listen
    const setupOrientation = async () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission()
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        } catch {
          // Permission denied — ambient auto-rotation fallback (default idle behavior)
        }
      } else {
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }

    // Only request on a user gesture context; for now add passive listener
    if ('ontouchstart' in window) {
      const requestOnTouch = () => {
        setupOrientation()
        containerRef.current?.removeEventListener('touchstart', requestOnTouch)
      }
      containerRef.current.addEventListener('touchstart', requestOnTouch, { once: true })
    }

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      if (crown && !prefersReducedMotion.current) {
        const targetY = isIdleRef.current ? elapsed * 0.3 : mouseRef.current.x * 1.2
        const targetX = isIdleRef.current ? -0.15 : mouseRef.current.y * -0.3 - 0.15

        crown.rotation.y += (targetY - crown.rotation.y) * 0.05
        crown.rotation.x += (targetX - crown.rotation.x) * 0.05

        // Bob up and down
        crown.position.y = Math.sin(elapsed * 2.1) * 0.08
      }

      if (particles && !prefersReducedMotion.current) {
        particles.rotation.y = elapsed * 0.05
        particles.rotation.x = elapsed * 0.02
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('deviceorientation', handleOrientation)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)

      // Dispose
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
        if (obj instanceof THREE.Points) {
          obj.geometry.dispose()
          ;(obj.material as THREE.PointsMaterial).dispose()
        }
      })
      renderer.dispose()
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [buildCrown, createParticles])

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ touchAction: 'pan-y' }}
      aria-hidden="true"
    />
  )
}
