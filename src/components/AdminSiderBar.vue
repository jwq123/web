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
 export default{
     data:function () {
       var admin_menu = [
         {
           'name':'管理',
           'icon':'home',
           'data':[
             {
               'name': '主页',
               'path': '/'
             },
           ]
         },
         {
           'name':'我要上图',
           'icon':'person-stalker',
           'data':[
             {
               'name':'批量上图',
               'path': '/site/aboutus'
             }

           ]
         },
         {
           'name':'添加新闻',
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
         menu:admin_menu
       }
     }
 }
</script>
<style scoped>

</style>
