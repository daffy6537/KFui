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
  <span v-text="cb | json"></span>
  <br>
  <span v-text="cbgrp | json"></span>

  <br>
  <kf-radio-group class="radio-group" :model.sync="rdgrp" :labels="['标签1', '标签2', '标签3', 'option4', 'option5', 'option6']" :values="[1,2,3, 910, 911, 912]"></kf-radio-group>
  <br>
  <span v-text="rdgrp | json"></span>
  <br>

  <div class="input-group">
    <label class="addon">选择类型</label>
    <kf-select class="select input" :model.sync="slct" :values="[123, 456, 789]" :labels="['option1', 'option2', 'option3']"></kf-select>
  </div>
  <br>

  <div class="input-group dtselect">
    <kf-select class="aselect addon" :model.sync="aslct" :values="[123, 456, 789]" :labels="['option1', 'option2', 'option3']"></kf-select>
    <kf-date-picker class="input" :moment.sync="moment" :flip="{right: true}" :has-time="true" :has-sec="false"></kf-date-picker>
  </div>
  <br>

  <span v-text="slct | json"></span>
  <br>

  <kf-tree class="tree" :tree="treeData" :draggable="true"></kf-tree>

  <div class="input-group datepicker">
    <label class="addon">选择日期</label>
    <kf-date-picker class="input" :moment.sync="moment" :flip="{right: true}" :has-time="true" :has-sec="false"></kf-date-picker>
  </div>

  <br>
  <div class="input-group dateranger">
    <label class="addon">日期区间</label>
    <kf-date-ranger class="input" :flip="{top: true}" :start.sync="start" :end.sync="end" :has-time="true"></kf-date-ranger>
  </div>
  <br>
  <span v-text="start + ' ' + end"></span>

  <br>
  <br>
  <div class="kf-btn-group">
    <button class="kf-btn kf-btn-primary kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-dark kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-light kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-red kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-blue kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-green kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-orange kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-yellow kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-purple kf-btn-lg">BUTTON</button>
    <button class="kf-btn kf-btn-gray kf-btn-lg">BUTTON</button>
  </div>
  <br>
  <div class="kf-btn-group">
    <button class="kf-btn kf-btn-primary">BUTTON</button>
    <button class="kf-btn kf-btn-dark">BUTTON</button>
    <button class="kf-btn kf-btn-light">BUTTON</button>
    <button class="kf-btn kf-btn-red">BUTTON</button>
    <button class="kf-btn kf-btn-blue">BUTTON</button>
    <button class="kf-btn kf-btn-green">BUTTON</button>
    <button class="kf-btn kf-btn-orange">BUTTON</button>
    <button class="kf-btn kf-btn-yellow">BUTTON</button>
    <button class="kf-btn kf-btn-purple">BUTTON</button>
    <button class="kf-btn kf-btn-gray">BUTTON</button>
  </div>
  <br>
  <div class="kf-btn-group">
    <button class="kf-btn kf-btn-primary kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-dark kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-light kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-red kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-blue kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-green kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-orange kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-yellow kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-purple kf-btn-sm">BUTTON</button>
    <button class="kf-btn kf-btn-gray kf-btn-sm">BUTTON</button>
  </div>
  <br>
  <div class="kf-btn-group">
    <button class="kf-btn kf-btn-primary kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-dark kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-light kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-red kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-blue kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-green kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-orange kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-yellow kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-purple kf-btn-xs">BUTTON</button>
    <button class="kf-btn kf-btn-gray kf-btn-xs">BUTTON</button>
  </div>

  <script>
    System.import('./index.js');
  </script>
</body>
</html>
