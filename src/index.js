import vue from 'vue';
import 'font-awesome';
import './module/menu/menu';
import './module/form/checkbox/checkbox';
import './module/form/radio/radio';
import './module/form/select/select';
import './module/tree/tree';
import {
    kfTable
} from './module/table/table';
import {
    kfTree
} from './module/tree/tree';
import './module/form/date/date';
import './module/rotator/rotator';
import './module/layout/layout';
import './module/tab/tab';
import './module/form/file/file';
import './module/pager/pager';
import './module/modal/modal';
import './module/tip/tip';
import {Tip} from './module/tip/tip';

import './module/style/clearfix.css!';
import './module/style/button.css!';
import './module/style/input.css!';
import './module/style/grid.css!';
import './module/style/reset.css!';
import './index.css!';

new vue({
    el: 'body',
    methods: {
        toggleSidebar: function(side) {
            this.$broadcast('kf-layout-toggle', side);
        },
        showDialog: function(){
            console.log(this.isShow);
            this.isShow = !this.isShow;
        },
        confirm: function(data){
            console.log(data);
        },
        showForm: function(){

        },
        console: function(){
            var form = document.querySelector('form');
            console.log(form.mail);
        },
        add: function(tip){
            this.alertTipObj = {
                success: true,
                tip: '请求成功！'
            };
        },
        nextAdd: function(){
            this.alertTipObj = {
                success: false,
                tip: '很遗憾，请求失败了！'
            };
        }
    },
    ready: function() {
        kfTable.setHead(this.stable, ['姓名', '手机', '邮箱', '工作', '地址']);
        kfTable.setBody(this.stable, [{
            name: 'Lagou',
            phone: '17710532312',
            email: 'shimoo@lagou.com',
            job: 'saler',
            address: {
                city: '北京',
                street: '龙岗路'
            }
        }, {
            name: 'LAGOU',
            phone: '15641879798',
            email: 'shimoo@163.com',
            job: 'programmer',
            address: {
                city: '北京',
                street: '海淀大街'
            }
        }]);
        kfTable.setFoot(this.stable, ['姓名', '手机', '邮箱', '工作', '地址']);
    },
    data: {
        tipData: [],
        alertTipArr: [],
        alertTipObj: {},
        isShow: false,
        number: 0,
        moment: '',
        start: '',
        end: '',
        radioGroup: true,
        checkboxGroup: [],
        checkbox: '',
        select: 1,
        uploadParams: {
            name: 'Lagou'
        },
        onsuccess: function(event) {
            console.log(event)
        },
        onChange: function(page, entry) {
            console.log(page, entry)
        },
        stable: {},
        colKeys: ['name', 'phone', 'email', 'job', 'address.street'],
        menuData: {
            submenu: [{
                item: 'Item0',
                href: 'http://www.baidu.com'
            }, {
                item: 'Item1',
                submenu: [{
                    item: 'Item10',
                    submenu: [{
                        item: 'Item100'
                    }]
                }]
            }, {
                item: 'Item2',
                submenu: [{
                    item: 'Item20'
                }, {
                    item: 'Item21',
                    submenu: [{
                        item: 'Item210'
                    }, {
                        item: 'Item211'
                    }, {
                        item: 'Item212'
                    }, {
                        item: 'Item213'
                    }, {
                        item: 'Item214'
                    }, {
                        item: 'Item215'
                    }, {
                        item: 'Item216'
                    }]
                }, {
                    item: 'Item3',
                }]
            }, {
                item: 'Item3'
            }, {
                item: 'Item4',
                submenu: [{
                    item: 'Item40'
                }, {
                    item: 'Item41'
                }, {
                    item: 'Item42',
                    submenu: [{
                        item: 'Item420'
                    }, {
                        item: 'Item421'
                    }]
                }, {
                    item: 'Item43'
                }, {
                    item: 'Item44'
                }, {
                    item: 'Item45'
                }, {
                    item: 'Item46',
                    submenu: [{
                        item: 'Item460'
                    }, {
                        item: 'Item461'
                    }, {
                        item: 'Item462'
                    }]
                }]
            }, {
                item: 'Item5'
            }]
        }
    }
});
