export const menuList = [
  {
    key: 'common',
    title: '通用组件',
    path: '/common',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-caidan',
    children: [
      {
        key: 'common-button',
        title: '按钮',
        path: '/common/button',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-anniu1'
      },
      {
        key: 'common-icon',
        title: '图标',
        path: '/common/icon',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-yetouyingyongzhongxin'
      },
      {
        key: 'common-typography',
        title: '排版',
        path: '/common/typography',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-paiban'
      },
      {
        key: 'common-grid',
        title: '栅格',
        path: '/common/grid',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-zhage'
      },
      {
        key: 'common-layout',
        title: '布局',
        path: '/common/layout',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-shujuzhanshi2'
      }
    ]
  },
  {
    key: 'navigation',
    title: '导航组件',
    path: '/navigation',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-chuanmao',
    children: [
      {
        key: 'navigation-breadcrumb',
        title: '面包屑',
        path: '/navigation/breadcrumb',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-buju'
      },
      {
        key: 'navigation-dropdown',
        title: '下拉菜单',
        path: '/navigation/dropdown',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-xialacaidan'
      },
      {
        key: 'navigation-menu',
        title: '导航菜单',
        path: '/navigation/menu',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-daohangcaidan'
      },
      {
        key: 'navigation-pagination',
        title: '分页',
        path: '/navigation/pagination',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-fenye'
      },
      {
        key: 'navigation-steps',
        title: '步骤条',
        path: '/navigation/steps',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-buzhoutiao'
      }
    ]
  },
  {
    key: 'data-entry',
    title: '数据录入',
    path: '/data-entry',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-biaodan',
    children: [
      {
        key: 'data-entry-base',
        title: '基础表单',
        path: '/data-entry/base',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-c-'
      },
      {
        key: 'data-entry-pick',
        title: '选择器',
        path: '/data-entry/pick',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-xuanzeqi'
      },
      {
        key: 'data-entry-advanced',
        title: '高级表单',
        path: '/data-entry/advanced',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-shujuzhanshi2'
      }
    ]
  },
  {
    key: 'data-show',
    title: '数据展示',
    path: '/data-show',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-shujuzhanshi1',
    children: [
      {
        key: 'data-show-base',
        title: '基础展示',
        path: '/data-show/base',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'user'
      },
      {
        key: 'data-show-common',
        title: '通用展示',
        path: '/data-show/common',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-shujuyeji'
      },
      {
        key: 'data-show-advanced',
        title: '高级展示',
        path: '/data-show/advanced',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-shujuzhanshi'
      }
    ]
  },
  {
    key: 'feedback',
    title: '反馈组件',
    path: '/feedback',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-fankui4',
    children: [
      {
        key: 'feedback-base',
        title: '基础反馈',
        path: '/feedback/base',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-fankui'
      },
      {
        key: 'feedback-common',
        title: '通用反馈',
        path: '/feedback/common',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-fankui7'
      },
      {
        key: 'feedback-advanced',
        title: '高级反馈',
        path: '/feedback/advanced',
        role: ['admin', 'public'],
        auth: 'PUBLIC',
        icon: 'icon-fankui1'
      }
    ]
  },
  {
    key: 'source',
    title: '社区资源',
    path: '/source',
    role: ['admin', 'public'],
    auth: 'PUBLIC',
    icon: 'icon-shequ2',
    children: []
  }
]
