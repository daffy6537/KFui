import vue from 'vue';
import './modal.css!';
import cls from './modal.css.map';

vue.component('kf-modal', {
    props: {
        showDialog: {
            type: Boolean,
            default: true
        },
        config: {
            type: Object,
            default: function(){
                return {
                    width: '',
                    height: '',
                    callback: function(){}
                };
            }
        }
    },
    data: function() {
        return {
            msg: 'haha'
        }
    },
    // activate: function(){
    //
    // },
    methods: {
    },
    template:
        '<div class="kf-modal" v-show="showDialog">' +
            '<div class="kf-modal-dialog kf-clearfix">' +
                '<div class="kf-modal-title">'+
                    '<slot name="kf-title"></slot>'+
                '</div>' +
                '<div class="kf-modal-content">'+
                    '<slot name="kf-content"></slot>'+
                '</div>' +
                '<div class="kf-modal-btns">'+
                    '<slot name="kf-btns"></slot>'+
                '</div>'+
                '{{config.a}}'+
            '</div>' +
        '</div>'
});
