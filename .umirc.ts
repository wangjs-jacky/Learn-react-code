import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  styledComponents: {},
  request: {},
  layout: {
    title: 'Jacky WorkSpace',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      icon: 'home',
    },
    {
      name: 'Code',
      path: '/code',
      icon: 'ThunderboltOutlined',
      routes: [
        {
          name: 'compose 函数组合器',
          path: '/code/01-compose',
          routes: [
            {
              name: '组合-同步函数',
              path: '/code/01-compose/01-sync',
              component: '@/pages/code/01-compose/01-sync',
            },
            {
              name: 'Koa 中间件机制',
              path: '/code/01-compose/02-compose1',
              component: '@/pages/code/01-compose/02-compose1',
            },
            {
              name: '扩展：支持 ctx 环境变量',
              path: '/code/01-compose/03-compose',
              component: '@/pages/code/01-compose/03-compose2',
            },
            {
              name: '扩展：namespace 对 ctx',
              path: '/code/01-compose/04-compose3',
              component: '@/pages/code/01-compose/04-compose3',
            },
          ],
        },
        {
          name: '实现 tapable 函数',
          path: '/code/02-tapable',
          routes: [
            {
              name: '同步-支持接受参数',
              path: '/code/02-tapable/01-sync',
              component: '@/pages/code/02-tapable/01-sync',
            },
            {
              name: '同步-保险丝模式',
              path: '/code/02-tapable/02-sync-bail',
              component: '@/pages/code/02-tapable/02-sync-bail',
            },
            {
              name: '同步-瀑布流模式',
              path: '/code/02-tapable/03-sync-waterfall',
              component: '@/pages/code/02-tapable/03-sync-waterfall',
            },
            {
              name: '同步-Loop模式',
              path: '/code/02-tapable/04-sync-loop',
              component: '@/pages/code/02-tapable/04-sync-loop',
            },
            {
              name: '异步-并行模式',
              path: '/code/02-tapable/05-aync-parallel',
              component: '@/pages/code/02-tapable/05-aync-parallel',
            },
            {
              name: '异步-串行模式(promise+async写法)',
              path: '/code/02-tapable/06-async-series',
              component: '@/pages/code/02-tapable/06-async-series',
            },
            {
              name: '异步-串行模式-瀑布模式',
              path: '/code/02-tapable/07-async-series-waterfall',
              component: '@/pages/code/02-tapable/07-async-series-waterfall',
            },
          ],
        },
      ],
    },
    {
      name: 'Hooks',
      path: '/hooks',
      icon: 'RocketOutlined',
      routes: [
        {
          name: '受控与非受控',
          path: '/hooks/01-control-not-control',
          routes: [
            {
              name: '基础组件',
              path: '/hooks/01-control-not-control/basic',
              component: '@/pages/hooks/01-control-not-control/basic',
            },
            {
              name: '纯代码实现',
              path: '/hooks/01-control-not-control/solution1',
              component: '@/pages/hooks/01-control-not-control/solution1',
            },
            {
              name: '使用 useMergedState 重新实现',
              path: '/hooks/01-control-not-control/solution2',
              component: '@/pages/hooks/01-control-not-control/solution2',
            },
          ],
        },
        {
          name: 'React 闭包',
          path: '/hooks/02-stale-closure',
          routes: [
            {
              name: 'js 闭包案例1',
              path: '/hooks/02-stale-closure/js-closure',
              component: '@/pages/hooks/02-stale-closure/js-closure',
            },
            {
              name: 'js 闭包案例2',
              path: '/hooks/02-stale-closure/js-closure2',
              component: '@/pages/hooks/02-stale-closure/js-closure2',
            },
            {
              name: 'React 闭包示例',
              path: '/hooks/02-stale-closure/react-closure',
              component: '@/pages/hooks/02-stale-closure/react-closure',
            },
          ],
        },
        {
          name: '生命周期 钩子',
          path: '/hooks/04-lifeCycle',
          routes: [
            {
              name: 'useFirstMount/useMount/useLayoutMount/useUnmount/useLayoutUnmount',
              path: '/hooks/04-lifeCycle/demo',
              component: '@/pages/hooks/04-lifeCycle/demo',
            },
          ],
        },
        {
          name: 'useCreation 钩子',
          path: '/hooks/05-useCreation',
          routes: [
            {
              name: '四种封装方式',
              path: '/hooks/05-useCreation/demo',
              component: '@/pages/hooks/05-useCreation/demo',
            },
          ],
        },
        {
          name: 'useRef 增强版',
          path: '/hooks/06-useRef',
          routes: [
            {
              name: 'useRef-Pro版本',
              path: '/hooks/06-useRef/useRefPro',
              component: '@/pages/hooks/06-useRef/useRefPro',
            },
          ],
        },
        {
          name: 'useEventEmitter 事件发布订阅钩子',
          path: '/hooks/07-useEventEmitter',
          routes: [
            {
              name: '测试案例：使用单例模式实例 EventEmitter 类',
              path: '/hooks/07-useEventEmitter/demo',
              component: '@/pages/hooks/07-useEventEmitter/demo',
            },
          ],
        },
        {
          name: 'useEvent 函数缓存',
          path: '/hooks/08-useEvent',
          routes: [
            {
              name: '测试案例',
              path: '/hooks/08-useEvent/demo',
              component: '@/pages/hooks/08-useEvent/demo',
            },
          ],
        },
        {
          name: '合并 ref 钩子',
          path: '/hooks/09-useComposeRef',
          routes: [
            {
              name: 'ref 属性传入函数',
              path: '/hooks/09-useComposeRef/demo',
              component: '@/pages/hooks/09-useComposeRef/demo',
            },
            {
              name: '使用 useComposeRef 改写',
              path: '/hooks/09-useComposeRef/demo2',
              component: '@/pages/hooks/09-useComposeRef/demo2',
            },
          ],
        },
      ],
    },
  ],
  npmClient: 'pnpm',
});
