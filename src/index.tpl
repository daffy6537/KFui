<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../jspm_packages/system.js"></script>
  <script src="../jspm.config.js"></script>
</head>
<body>
  <kf-menu class="menu" :menu="menuData"></kf-menu>

  <kf-checkbox class="checkbox" label="复选框" :value="val" :model.sync="cb"></kf-checkbox>
  <br>
  <kf-checkbox-group class="checkbox-group" :labels="['标签1', '标签2', '标签3']" :values="[val1, val2, val3]" :model.sync="cbgrp"></kf-checkbox-group>
  <br>
  <span>{{cb | json}}</span>
  <br>
  <span>{{cbgrp | json}}</span>

  <br>
  <kf-radio-group class="radio-group" :model.sync="rdgrp" :labels="['标签1', '标签2', '标签3']" :values="[1,2,3]"></kf-radio-group>
  <br>
  <span>{{rdgrp | json}}</span>

  <script>
    System.import('./index.js');
  </script>
</body>
</html>