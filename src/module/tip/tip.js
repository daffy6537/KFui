import vue from 'vue';
import './tip.css!';
import cls from './tip.css.map';

vue.transition('fade', {
	enterClass: 'fadeIn',
	leaveClass: 'fadeOut'
});

vue.component('kf-tip', {
    props: {
        tipData: {
            type: Object,
            required: true
        },
        tipDelay: {
            type: Number,
            default: 4000
        }
    },
    watch: {
        'tipData': function(n, o) {
            this.tipObjs.unshift(n);
            var self = this;
            setTimeout(function() {
                self.tipObjs.pop();
            }, this.tipDelay);
        }
    },
    data: function() {
        return {
            tipObjs: [],
            cls: cls
        }
    },
    methods: {
        close: function(index) {
            this.tipObjs.splice(index, 1);
        }
    },
    template:
        '<ul :class="cls.tips">' +
            '<li v-for="obj in tipObjs" :class="cls.tipItem" class="animated" transition="fade">' +
                '<div v-if="obj.success" :class="cls.success">' +
                    '<i class="fa fa-check-circle"></i>' +
                    '{{obj.tip}}' +
                    '<a href="javascript:;" class="fa fa-close" :class="cls.close" @click="close($index)"></a>' +
                '</div>' +
                '<div v-else :class="cls.error">' +
                    '<i class="fa fa-times-circle"></i>' +
                    '{{obj.tip}}' +
                    '<a href="javascript:;" class="fa fa-close" :class="cls.close" @click="close($index)"></a>' +
                '</div>' +
            '</li>' +
        '</ul>'
});
