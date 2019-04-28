<template>
  <div class="doc-default-page" @scroll="getID">
    <!-- Api -->
    <div v-for="(api, i) in appApis" :key="i" class="api-main-container" :id="`sectionId${i}`">
      <div class="api-sub-container">

        <!-- Text container -->
        <div class="text-container">

          <!-- Api row -->
          <div v-for="(row, j) in api.doc" :key="`row-${j}`" class="api-row-container">
            <div class="api-row-content">

              <AppHeader v-if="row.type === 'header'" :text="row.value"/>
              <AppNormalStr v-if="row.type === 'normal-str'" v-html="row.value"/>
              <AppCodeSnippet v-if="row.type === 'snippet'" :code="row.value"/>

              <AppHighlight
                v-if="row.type === 'highlight'"

                :icon="row.values.icon"
                :texts="row.values.texts"

                :backgroundColor="row.values.backgroundColor"
                htmlColor="#F3F7F9"
              />

              <AppSubHeading v-if="row.type === 'subheading'" :text="row.value"/>

              <App-table
                v-if="row.type === 'table'"

                :headers="row.values.headers"
                :items="row.values.items"
              />

            </div>
          </div>
          <!-- /Api row -->

        </div>
        <!-- /Text container -->

        <!-- Code container -->
        <div class="code-container" v-if="api.showCode">

          <!-- App tab -->
          <AppTab
            :selectedLang="selectedLang"
            :langs="langs"
            :onChangeTab="changeLang"
          />
          <!-- /App tab -->

          <!-- Code -->
          <highlight-code lang="javascript" class="highlight-code">
            {{ api.code[selectedLang.value] }}
          </highlight-code>
          <!-- /Code -->

        </div>
        <!-- /Code container -->
      </div>
    </div>
    <!-- /Api -->
  </div>
</template>

<script>

  // Components
import AppTab from "@/components/app-tab";
import AppHeader from "@/components/app-header";
import AppNormalStr from "@/components/app-normal-str";
import AppCodeSnippet from "@/components/app-code-snippet";
import AppHighlight from "@/components/app-highlight";
import AppTable from "@/components/app-table";
import AppSubHeading from "@/components/app-subheading"

  // Mixins
import appApiExt from '@/mixins/app-api'

export default {

  mixins: [appApiExt],

  data() {
    return {
      x: [],
      selectedLang: { label: "Shell", value: "shell" },
      langs: [
        { label: "Shell", value: "shell" },
        { label: "Ruby", value: "ruby" },
        { label: "Js", value: "javascript" },
        { label: "Python", value: "python" }
      ],

      doc: [
        {
          text: {},
          code: {
            shell:
              "To authorize, use this code:\n" +
              "\n" +
              "# With shell, you can just pass the correct header with each request\n" +
              'curl "api_endpoint_here"\n' +
              '  -H "Authorization: meowmeowmeow"\n' +
              "Make sure to replace meowmeowmeow with your API key.",
            ruby:
              "To authorize, use this code:\n" +
              "\n" +
              "require 'kittn'\n" +
              "\n" +
              "api = Kittn::APIClient.authorize!('meowmeowmeow')\n" +
              "Make sure to replace meowmeowmeow with your API key.",
            javascript:
              "To authorize, use this code:\n" +
              "\n" +
              "const kittn = require('kittn');\n" +
              "\n" +
              "let api = kittn.authorize('meowmeowmeow');\n" +
              "Make sure to replace meowmeowmeow with your API key.",
            python:
              "To authorize, use this code:\n" +
              "\n" +
              "import kittn\n" +
              "\n" +
              "api = kittn.authorize('meowmeowmeow')\n" +
              "Make sure to replace meowmeowmeow with your API key."
          }
        }
      ]
    };
  },

  components: {
    AppHeader,
    AppTab,
    AppNormalStr,
    AppCodeSnippet,
    AppHighlight,
    AppTable,
    AppSubHeading
  },

  methods: {
    getID() {
      let active = 0
      for(let i=0; i < this.appApis.length; i++) {
        let y = document.getElementsByClassName('doc-default-page')[0].scrollTop
        console.log({y})

        if (y < this.x[0]) {
          console.log({active: 1})
          active = 0
        }
        else if (y > this.x[i-1] && y < this.x[i] ){
          console.log({active: i})
          active = i
          break
        }
      }

      for(let j=0; j< this.appApis.length; j++) {
        console.log({j, active})
        if(j == active) {
          document.getElementById(`drawerId${j}`).setAttribute('style','background: orange')
        }
        else {
          document.getElementById(`drawerId${j}`).removeAttribute('style')
        }
      }
    },
    changeLang({ obj }) {
      console.log({ obj });

      this.selectedLang = Object.assign({}, obj);
      this.$router.replace({
        path: "/",
        query: { lang: JSON.stringify(this.selectedLang) }
      });
    },

    checkLangOnLoad() {
      if (this.$route.query.lang) {
        this.selectedLang = JSON.parse(this.$route.query.lang);
      } else {
        this.$router.replace({
          path: "/",
          query: { lang: JSON.stringify(this.selectedLang) }
        });
      }
    }
  },

  created() {
    this.checkLangOnLoad();
  },
  mounted() {
    let s = -20
    setTimeout(()=> {
      document.getElementById('drawerId0').setAttribute('style','background: orange')
      for(let i=0; i < this.appApis.length; i++) {
        let h = document.getElementById(`sectionId${i}`).clientHeight
        s = s + h
        this.x.push(s)
      }
    }, 1000)

    setTimeout(()=> {
      console.log({x: this.x})
    }, 2000)
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/pages/documentation/index";
</style>
