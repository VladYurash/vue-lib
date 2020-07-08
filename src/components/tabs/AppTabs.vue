<template>
  <div>
    <ul class="app-tabs">
      <li v-for="(tab, index) in tabs" :key="index">
        <a
          href="#"
          class="app-tab"
          :class="{'active': tab.active}"
          @click.prevent="switchTab(tab.hash, true)"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'AppTabs',
    data: () => ({
      tabs: []
    }),
    methods: {
      findTab(hash) {
        return this.tabs.find(tab => {
          return tab.hash === hash || `#${tab.hash}` === hash
        })
      },
      switchTab(hash, switchHash = true) {
        const activeTab = this.findTab(hash)

        if (typeof activeTab === 'undefined') return

        this.tabs.forEach(tab => {
          tab.active = (tab.hash === activeTab.hash)
        })

        if (switchHash) {
          this.$router.replace({
            hash: activeTab.hash
          })
        }
      }
    },
    created() {
      this.tabs = this.$children
    },
    mounted() {
      this.switchTab(this.tabs[0].hash, false)

      if (this.$route.hash) this.switchTab(this.$route.hash, false)
    }
  }
</script>

<style lang="sass">
.app-tabs
  display: flex
  align-items: flex-end
  margin: 0
  padding: 0
  border-bottom: 1px solid #eee
  list-style-type: none

.app-tab
  display: block
  padding: 20px
  border-bottom: 3px solid transparent
  transform: translateY(3px)
  font-weight: bold
  transition: border-color 0.3s, color 0.3s

  &:hover
    border-bottom-color: #03a6ff
    text-decoration: none

  &.active
    border-bottom-color: #03a6ff
    text-decoration: none

</style>