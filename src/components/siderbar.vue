<template>
  <div class="container">
    <div class="layout">
      <div class="layout-content">
        <Row>
          <i-col>
            <Menu  width="auto"  @on-select="choose" >

              <Submenu v-for="item in menu">
                <template slot="title">
                  <Icon v-bind:type="item.icon"></Icon>
                  {{ item.name }}
                </template>
                <Menu-item v-for="i in item.data" v-bind:name="i.path">{{ i.name }}</Menu-item>
              </Submenu>

            </Menu>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
  import router from  '../router/index'
  export default{
      props:{type:Number},
      data:function() {
        var normal_menu = [
          {
            'name':'首页',
            'icon':'home',
            'data':[
              {
                'name': '主页',
                'path': '/'
              },
            ]
          },
          {
            'name':'公司简介',
            'icon':'person-stalker',
            'data':[
              {
                'name':'关于我们',
                'path': '/site/aboutus'
              }

            ]
          },
          {
            'name':'项目展示',
            'icon':'ios-briefcase',
            'data':[
              {
                'name':'代表项目',
                'path':'/site/project'
              },
            ]
          },
          {
            'name':'公司动态',
            'icon':'ios-list',
            'data':[
              {
                'name':'热点新闻',
                'path':'/site/news'
              }
            ]
          },
          {
            'name':'加入我们',
            'icon':'ios-people',
            'data':[
              {
                'name':'招贤纳士',
                'path': '/site/applicationentry'
              }
            ]
          }
        ];
        return {
              menu: normal_menu
        };
      },
    methods:{
      choose:function (menu) {
          router.push({path:menu})
      }
    }
  }
</script>

