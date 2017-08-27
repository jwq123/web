<template>
  <div class="all">
  <Collapse v-model="value1">
    <Panel name="1">
    软件工程师
      <p slot="content">
      <ul>
                 <li><h3>地区</h3><p>大连</p></li>
                 <li><h3>职位描述</h3><p>吃苦能干</p></li>
                 <li><h3>应聘条件</h3><p>大学本科以上，计算机专业</p></li>
                  <li><h3>应聘方式</h3><p>电话：2304923950543,邮箱：21423434323</p></li>
      </ul>
      </p>
    </Panel>
  </Collapse>
  </div>
</template>
<style scoped>
  .all ul li{
    margin-bottom: 15px;
  }
</style>
<script>
  export default {
    data () {
      return {
        value1: '1'
      }
    }
  }
</script>
