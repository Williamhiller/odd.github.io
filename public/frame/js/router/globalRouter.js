/**
 * Created by Williamhiler on 2016/11/7.
 */
angular.module("global.router",["ionic"])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '',
                abstract: true,
                templateUrl: 'html/tabs.html'
            })
            .state('tab.calc', {  // 计算
                url: '/calc',
                views: {
                    'tab_calc': {
                        templateUrl: 'html/tab_calc.html',
                        controller: 'CalcCtrl'
                    }
                },
                data : {
                    hideTabs : false
                }
            })
            .state('tab.index', {  // index
                url: '/index',
                views: {
                    'tab_index': {
                        templateUrl: 'html/tab_index.html'
                    }
                },
                data : {
                    hideTabs : false
                }
            })
            .state('tab.index_pull', {  // 拉力指数
                url: '/index/pull',
                views: {
                    'tab_index': {
                        templateUrl: 'html/index/pull.html',
                        controller: 'PullCtrl'
                    }
                },
                data : {
                    hideTabs : true
                }
            })
            .state('tab.index_goal', {  // 进球指数
                url: '/index/goal',
                views: {
                    'tab_index': {
                        templateUrl: 'html/index/goals.html',
                        controller: 'GoalCtrl'
                    }
                },
                data : {
                    hideTabs : true
                }
            })
            .state('tab.list', {  // 赔率
                url: '/list',
                cache : false,
                views: {
                    'tab_list': {
                        templateUrl: 'html/tab_list.html',
                        controller: 'ListCtrl'
                    }
                },
                data : {
                    hideTabs : false
                }
            })
            .state('tab.me', {  // 主页
                url: '/me',
                views: {
                    'tab_me': {
                        templateUrl: 'html/tab_me.html',
                        controller: 'MeCtrl'
                    }
                },
                data : {
                    hideTabs : false
                }
            })
        ;

        $urlRouterProvider.otherwise('/calc');
    });
