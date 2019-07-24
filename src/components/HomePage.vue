<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
       <a-menu-item key="1"><router-link to="/">
        back
      </router-link></a-menu-item>
        <a-menu-item key="2">nav 1</a-menu-item>
        <a-menu-item key="3">nav 2</a-menu-item>
        <a-menu-item key="4">nav 3</a-menu-item>
       

      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />subnav 1</span>
            <a-menu-item key="1"><router-link :to="{name:'addcheck'}">DoList</router-link></a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
         <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      collapsed: false,
      name: ""
    };
  },
  methods: {
    goto() {
      //this.$router.push('home/:'+this.name)
      this.$router.push({ name: "home", params: { name: this.name } });
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  },
  components: {}
};
</script>