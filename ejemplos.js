
s0.initCam()
src(s0).scale(1.65).kaleid(8).rotate(Math.PI/2).scrollX(0.5).scrollY(0.35).scale(1.3).out()


src(s0).scale(1.5).out(o1)
src(o1).thresh(0.7).invert().out(o2)
src(o1).mult(o2).saturate(5).add(src(o2).invert().mult(voronoi(15,2).add(osc(2,1,2)).saturate(3))).out()

src(s0).saturate([0,1,4,11]).scale(1.75).kaleid(6).scale(() => 0.5+0.2*a.fft[0]).out()

src(s0).scale(1.5).pixelate(60,60).saturate(11).out(o1)
src(o1).mult(o2).add(src(o2).invert().mult(voronoi(15,2).add(osc(2,1,2)).saturate(3))).out()


src(s0).saturate([0,1,4,11]).scale(1.75).kaleid(16).scale(() => 0.5+0.2*a.fft[0]).out()

voronoi(10,1).colorama(10).hue(0.5).saturate([0,1,4,11]).scale(() => 0.5+0.2*a.fft[0]).out()

voronoi(1,10).mult(osc(30,0.51,1.82)).colorama(0.1).rotate(()=>time*0.5).kaleid(8).scale(() => 0.5+0.2*a.fft[0]).out()

voronoi(10).color(0,() => a.fft[0] *2,1).out(o0)
noise(() => a.fft[1] *200).rotate(1,1).color(1,0,0.5).out(o1)
osc(40).color(0,1,1).scale( () => a.fft[2] *2 ).out(o2)
shape(7).color(0.5,0,1).scale( () => a.fft[3] *2 ).out(o3)
render()


//Music: https://www.bensound.com
