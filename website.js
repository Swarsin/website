<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple 3D House with A-Frame</title>
    <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
    <style>
      body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
    </style>
  </head>
  <body>
    <a-scene>

      <a-sky color="#87CEEB"></a-sky>

      
      <a-plane position="0 -1 0" rotation="-90 0 0" width="100" height="100" color="#00FF00"></a-plane>

      <a-entity position="-10 0 -10">
          <a-cylinder position="0 0 0" radius="2" height="10" color="#8B4726"></a-cylinder>
          <a-cylinder position="0 10 0" radius="6" height="10" color="#006400"></a-cylinder>
          <a-cylinder position="0 20 0" radius="10" height="10" color="#228B22"></a-cylinder>
      </a-entity>
      <a-entity position="10 0 10">
          <a-cylinder position="0 0 0" radius="2" height="10" color="#8B4726"></a-cylinder>
          <a-cylinder position="0 10 0" radius="6" height="10" color="#006400"></a-cylinder>
          <a-cylinder position="0 20 0" radius="10" height="10" color="#228B22"></a-cylinder>
      </a-entity>

      <a-sphere position="-5 15 -10" scale="5 3 2" color="#FFFFFF" opacity="0.8"></a-sphere>
      <a-sphere position="-10 20 -30" scale="5 3 2" color="#FFFFFF" opacity="0.8"></a-sphere>
      <a-sphere position="-15 18 -10" scale="5 3 2" color="#FFFFFF" opacity="0.8"></a-sphere>

      <a-sphere position="5 18 -10" scale="5 3 2" color="#FFFFFF" opacity="0.8"></a-sphere>
      <a-sphere position="10 20 -15" scale="5 3 2" color="#FFFFFF" opacity="0.8"></a-sphere
      
      
      <a-box position="0 1 0" depth="4" height="2" width="4" color="#8B4513"></a-box>
      <a-box position="0 1 2" depth="0.1" height="2" width="4" color="#8B4513"></a-box>
      <a-box position="0 1 -2" depth="0.1" height="2" width="4" color="#8B4513"></a-box>
      <a-box position="2 1 0" depth="4" height="2" width="0.1" color="#8B4513"></a-box>
      <a-box position="-2 1 0" depth="4" height="2" width="0.1" color="#8B4513"></a-box>

      <a-cone position="0 2.75 0" radius-bottom="2.83" radius-top="0" height="1.5" color="#A52A2A"></a-cone>

      <a-box position="0 0.5 2" depth="0.1" height="1" width="0.6" color="#654321"></a-box>

      <a-box position="1.5 1.5 2" depth="0.1" height="0.6" width="0.6" color="#FFFFFF"></a-box>
      <a-box position="-1.5 1.5 2" depth="0.1" height="0.6" width="0.6" color="#FFFFFF"></a-box>

      <a-entity position="0 1.6 5">
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>
    </a-scene>
  </body>
</html>
