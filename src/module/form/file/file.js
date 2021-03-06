import vue from 'vue';
import './file.css!';
import cls from './file.css.map';

let dragStart = null, dragOver = null, dragEnd = null;

vue.component('kf-file', {
  props: {
    success: {
      type: Function,
      default: () => {}
    },
    error: {
      type: Function,
      default: () => {}
    },
    validate: {
      type: Function,
      default: (f) => { return true; }
    },
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    other: {
      type: Object,
      default: {}
    },
    label: {
      type: String,
      default: '上传'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    flip: {
      type: Object,
      default: function() {
        return {bottom: true, left: true};
      },
      coerce: function(val) {
        if((val.bottom && val.top) || (!val.bottom && !val.top)) {
          val.bottom = true;
          val.top = false;
        }
        if((val.left && val.right) || (!val.left && !val.right)) {
          val.left = true;
          val.right = false;
        }

        return val;
      }
    }
  },
  data: function() {
    return {
      cls: cls,
      files: [],
      listVisible: false,
      fileOver: false,
      dragging: false
    };
  },
  methods: {
    change: function(event) {
      processFiles(this, event.target.files);
    },
    getListCls: function() {
      let res = {};
      res[cls.visible] = this.listVisible && this.files.length;
      res[cls.left] = this.flip.left;
      res[cls.top] = this.flip.top;
      res[cls.bottom] = this.flip.bottom;
      res[cls.right] = this.flip.right;
      return res;
    },
    getProgCls: function(f) {
      let res = {};
      res[cls.error] = f.error;
      res[cls.abort] = f.abort;
      return res;
    },
    dragEnter: function(event) {
      this.fileOver = true;
    },
    dragOver: function(event) {
      this.fileOver = true;
    },
    dragLeave: function(event) {
      this.fileOver = false;
    },
    dragDrop: function(event) {
      this.fileOver = false;
      this.dragging = false;
      processFiles(this, event.dataTransfer.files);
    },
    abort: function(f) {
      f.xhr.abort();
      f.abort = true;
      f.doing = false;
    }
  },
  template:
    '<div :class="cls.file" class="kf-file" :kf-file-over="fileOver" ' +
          '@dragenter.stop.prevent="dragEnter($event)" ' +
          '@dragover.stop.prevent="dragOver($event)" ' +
          '@dragleave.stop.prevent="dragLeave($event)" ' +
          '@drop.stop.prevent="dragDrop($event)">' +
      '<a v-text="label"></a>' +
      '<span @click.stop="listVisible = true">' +
        '<i class="fa fa-caret-down"></i>' +
      '</span>' +
      '<input type="file" :multiple="multiple" @change="change($event)">' +
      '<div :class="cls.bg" v-show="files.length && listVisible" @click.stop="listVisible = false"></div>' +
      '<ul :class="getListCls()">' +
        '<li v-for="f in files">' +
          '<div>' +
            '<span v-text="f.name"></span>' +
            '<span v-text="f.size"></span>' +
            '<span>' +
              '<i class="fa fa-check-circle" v-show="f.done"></i>' +
              '<i class="fa fa-times-circle" v-show="f.doing" @click="abort(f)"></i>' +
              '<i class="fa fa-exclamation-circle" :class="cls.error" v-show="f.error"></i>' +
            '</span>' +
          '</div>' +
          '<div :class="getProgCls(f)" :style="{width: f.progress}"></div>' +
        '</li>' +
      '</ul>' +
    '</div>'
});

function normalize(size) {
  if(size >= (1 << 30)) {
    return Math.floor(size/(1<<30) * 100)/100 + 'GB';
  } else if(size >= (1 << 20)) {
    return Math.floor(size/(1<<20) * 100)/100 + 'MB';
  } else if(size >= (1 << 10)) {
    return Math.floor(size/(1<<10) * 100)/100 + 'KB';
  } else {
    return size + 'B';
  }
}

function startUpload(url, name, file, other, success, error) {
  file.doing = true;

  let xhr = new XMLHttpRequest();
  file.xhr = xhr;

  xhr.addEventListener('load', function(event) {
    file.doing = false;
    if(event.target.status != 200) {
      file.error = true;
      error(event.target);
    } else {
      file.done = true;
      success(event.target);
    }
  });

  xhr.addEventListener('error', function(event) {
    file.doing = false;
    file.error = true;
    error(event.target);
  });

  xhr.addEventListener('abort', function(event) {
  });

  xhr.upload.addEventListener('progress', function(event) {
    if(event.lengthComputable) {
      file.progress = Math.floor(event.loaded/event.total * 10000)/100 + '%';
    }
  });

  let data = new FormData();
  data.append(name, file.file);
  _.forEach(other, function(val, key) {
    data.append(key, val);
  });

  xhr.open('POST', url);
  xhr.send(data);
}

function processFiles(self, fileList) {
    let files = _.map(fileList, function(f) {
      if(!self.validate(f)) return;

      return {
        name: f.name,
        size: normalize(f.size),
        file: f,
        progress: 0,
        doing: false,
        done: false,
        error: false,
        abort: false
      };
    });
    if(!files.length) return;

    self.listVisible = true;
    self.files = files;
    _.forEach(files, function(f) {
      startUpload(self.url, self.name, f, self.other, self.success, self.error);
    });
}
