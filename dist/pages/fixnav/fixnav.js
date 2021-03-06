'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
    /**
    * 页面的初始数据
    */
    data: {
        title: 'fixnav',
        category: [[{
            name: '推荐',
            id: 1
        }, {
            name: '护肤品',
            id: 2
        }, {
            name: '彩妆',
            id: 3
        }, {
            name: '洗漱品',
            id: 4
        }, {
            name: '居家',
            id: 5
        }, {
            name: '服饰',
            id: 6
        }], [{
            name: '包包',
            id: 7
        }, {
            name: '化妆',
            id: 8
        }, {
            name: '口红',
            id: 9
        }, {
            name: '防晒',
            id: 10
        }, {
            name: '书籍',
            id: 11
        }, {
            name: '推荐',
            id: 12
        }], [{
            name: '护肤品',
            id: 13
        }, {
            name: '彩妆',
            id: 14
        }, {
            name: '居家',
            id: 15
        }, {
            name: '服饰',
            id: 16
        }, {
            name: '包包',
            id: 17
        }, {
            name: '化妆',
            id: 18
        }], [{
            name: '口红',
            id: 19
        }, {
            name: '防晒',
            id: 20
        }, {
            name: '书籍',
            id: 21
        }, {
            name: '推荐',
            id: 22
        }, {
            name: '护肤品',
            id: 23
        }, {
            name: '彩妆',
            id: 24
        }]],
        popList: [],
        navBottom: 0,
        showPopNav: false,
        activeId: 1,
        hidePop: false,
        wWidth: 0,
        itemW: 0,
        scrollL: 0
    },

    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function onLoad() {
        // TODO: onLoad
    },


    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function onReady() {
        var popList = [];
        this.data.category.forEach(function (pList, idx) {
            if (pList && pList.length) {
                pList.forEach(function (pItem, pidx) {
                    popList.push(pItem);
                });
            };
        });
        this.setData({ popList: popList });
    },


    /**
    * 生命周期函数--监听页面显示
    */
    onShow: function onShow() {
        var _this = this;
        var wData = wx.getSystemInfoSync();
        console.log(wData);
        var itemW = wData.windowWidth / 375 * 55;

        _this.setData({
            wWidth: wData.windowWidth,
            itemW: itemW //每个点击元素的大小
        });

        wx.createSelectorQuery().selectAll('#navBar').boundingClientRect(function (rects) {
            if (rects && rects[0] && rects[0].bottom) {
                _this.setData({ navBottom: rects[0].bottom });
            };
        }).exec();
    },

    viewScroll: function viewScroll(e) {
        var offsetTop = e.detail.scrollTop;

        if (offsetTop >= this.data.navBottom && !this.data.showPopNav) {
            this.setData({ showPopNav: true });
            console.log("显示11111111");
        }
        if (offsetTop < this.data.navBottom && this.data.showPopNav) {
            this.setData({ showPopNav: false });
            console.log("隐藏2222222");
        }

        if (offsetTop < this.data.navBottom) {
            this.setData({ hidePop: true });
        } else {
            this.setData({ hidePop: false });
        }
    },
    modifyNavItem: function modifyNavItem(e) {
        var _this = this;
        var id = e.currentTarget.dataset.id;

        if (id != _this.data.activeId) {
            // 切换 index
            _this.setData({ activeId: id });
            console.log("load new data");

            console.log(_this.data.itemW);
            var scrollL = 0;
            if (id) {
                scrollL = _this.data.itemW * id - _this.data.wWidth / 2 - 20;
            };
            _this.setData({ scrollL: scrollL });
        };
    },

    /**
    * 生命周期函数--监听页面隐藏
    */
    onHide: function onHide() {
        // TODO: onHide
    },


    /**
    * 生命周期函数--监听页面卸载
    */
    onUnload: function onUnload() {
        // TODO: onUnload
    },


    /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
    onPullDownRefresh: function onPullDownRefresh() {
        // TODO: onPullDownRefresh
    }
});