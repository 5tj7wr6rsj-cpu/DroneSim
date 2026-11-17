## 2026-11-13
**Did:** Set up file structure (index.html, style.css, js/ folder) and published to GitHub as a public repo. Wrote vec.js (3D vector maths) and drone.js (Drone class with update and trail).
**Broke:**
- vec() used round brackets instead of curly braces, so it didn't build an object
- Dot product used + instead of * for the y and z terms; cross product middle term used - instead of *
- mag() had no return, so it gave undefined
- Wrote if/else in Python syntax, and used = (set) instead of === (compare)
- new Drone() made an empty drone and update() crashed with "undefined is not an object"
**Fixed by:**
- Found each bug with console tests against hand-worked answers (e.g. dot((1,2,3),(4,5,6)) = 32)
- The Drone bug was a typo: "costructor". JS only runs the setup automatically if it's spelt constructor
**Decided:**
- Every vector function returns a new vector and never changes its inputs, so trail points can't get overwritten
- Trail point saved every 10th step, not every step, to keep the array small
- Plain script tags, not modules, so the page opens straight from the file

## 2026-11-15
**Did:** Wrote render.js: worldToScreen() to convert metres to pixels, and drawDrone() to draw trails, dots and labels.
**Broke:**
- Tried returning drawing commands inside { } instead of running them line by line
- Wrote let d.pos = worldToScreen(...), which would have overwritten the drone's real position (metres) with pixel values
- Extra i++ inside the trail loop skipped every second point
- ctx.lneTo typo; colour written without quotes; setStroke() doesn't exist
- ctx.fill without () failed silently: no error, just no dot
**Fixed by:** Used a separate local variable for screen positions; removed the double increment; fixed the typos; added () so fill actually runs
**Decided:**
- Physics works in metres and drawing works in pixels. render.js only reads positions, never changes them
- Screen y = originY - world y, because canvas y counts downwards and maths y counts up

## 2026-11-17
**Did:** Wrote main.js: settings, a scenario stored as data, loadScenario(), step(), and a fixed-timestep animation loop.
**Broke:**
- let drones = [] inside loadScenario made a new local list, so the real one stayed empty
- Pushed the raw scenario data instead of the new Drone object
- simTiem typo silently created a new variable, so simTime never reset
- lastTime = null set the value instead of checking it
- frameTime had no let, so it became a global
**Fixed by:** Removed let where the variable already existed; pushed newDrone; fixed the typo; used ===; added let
**Decided:**
- Physics always steps by a fixed DT = 1/120 s, using an accumulator. Screen refresh rates vary (60 Hz vs 120 Hz), so this keeps results identical on every machine, which matters for a fair comparison later
- Frame time capped at 0.1 s so returning from another tab doesn't trigger thousands of steps at once
- timeScale lets long scenarios play faster without changing the physics