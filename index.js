
osc().rotate().out()



 // iniciar webcam en buffer s0
s0.initCam()
src(s0).kaleid([6,4,3].fast(0.1)).out()


shape(5,0.5,0.1).out(o0)

osc([80, 100, 200, 50]).rotate([0,45,90,22],0.025).out(o0)


osc(10, 0.1,10).out()

noise(2).colorama(osc(10, 0.1,10)).out()

voronoi().saturate(110).out()


shape([3,4,5,6,7],[0.5,0.8],0.3)
  .rotate(0.25)
  .add(osc(15))
  .diff(osc(12,0.11,[10,5,50]))
  .out()

color().out()

voronoi([1,10,100].fast(0.01))
  .kaleid([8,12,4].fast(0.02))
  .color([0.2,0.5],[0.1,0.3],1)
  .colorama([1,0.2,30,0.5].fast(0.01))
  .rotate([0,10,90])
  .out()


s0.initCam()
//  webcam --> kaleid --> out
src(s0).kaleid([4,6,20,50]).out()
