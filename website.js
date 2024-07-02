<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Simple A-Frame 3D Scene</title>
    <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-sky color="#ECECEC"></a-sky>
      
      <a-box position="0 1.5 -5" rotation="0 45 0" color="#4CC3D9"></a-box>
      
      <a-sphere position="2 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      
      <a-cylinder position="-2 0.75 -5" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      
      <a-plane position="0 0 -4" rotation="-90 0 0" width="20" height="20" color="#7BC8A4"></a-plane>
    </a-scene>
  </body>
</html>
