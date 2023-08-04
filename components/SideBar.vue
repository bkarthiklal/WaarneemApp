<template>
  <b-sidebar :fullheight="true" :right="true" v-model="open" class="b-sidebar">
    <div class="sidebar p-5" style="height: 100%">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis
      itaque assumenda libero quaerat id quod. Asperiores repellendus impedit
      ducimus incidunt commodi odio perferendis vel quo ipsum perspiciatis
      deleniti ratione libero ipsam voluptate nemo labore illo, ut adipisci
      iure. Dignissimos exercitationem quaerat voluptatem, odit accusamus, unde
      commodi sequi rem nostrum, obcaecati reprehenderit vel. Quaerat ipsam iste
      voluptatem. Rem itaque minima suscipit molestias quia? Illum tenetur eaque
      nulla placeat officia ducimus dignissimos eligendi aperiam neque explicabo
      ex facere rem at quibusdam recusandae quidem incidunt sed cupiditate
      sapiente, voluptates nobis quia atque. Suscipit dolore molestiae
      dignissimos enim possimus. Quibusdam ex pariatur ipsa, labore amet, soluta
      dolorum fuga nemo mollitia molestias enim eaque magni ullam accusamus
      voluptatibus culpa sunt repudiandae deleniti animi vel esse? Animi
      accusantium doloribus voluptatem voluptate sapiente odit officiis
      voluptatibus, esse repellendus consectetur, ea optio distinctio, dolorum
      suscipit nam assumenda reiciendis. Tempora tenetur nostrum itaque ea ipsam
      in? Blanditiis ullam, eum impedit placeat quis consectetur rerum labore
      nemo magnam nulla rem veritatis modi itaque necessitatibus consequatur?
      Fugiat, culpa quia! Quae ab assumenda ipsa reprehenderit dolore sit,
      tempore corrupti. Voluptatibus necessitatibus voluptatum aspernatur
      doloribus labore animi eos, dicta officiis, eveniet molestiae, quam
      accusamus. Illum aliquam nesciunt maiores exercitationem! Dolorum
      dignissimos quidem delectus quisquam, esse laudantium ut quo, nihil itaque
      doloribus illum nemo, necessitatibus dolores sapiente commodi eaque.
      Itaque saepe, atque, quia voluptatum quidem voluptatem exercitationem
      tenetur reiciendis odio repudiandae laboriosam nesciunt expedita labore
      velit dolor architecto perspiciatis facere dolore tempore, mollitia hic?
      Nulla suscipit dolore, tempore nemo, similique perspiciatis vero at
      impedit blanditiis corrupti quibusdam reprehenderit necessitatibus
      dignissimos cupiditate tenetur. Voluptatum distinctio exercitationem
      praesentium! Eum nihil, eaque temporibus ratione dolore unde accusamus
      eius officia tempore distinctio dolorum cum quisquam eligendi voluptatem
      similique adipisci quam quia? Ea ipsa veritatis molestiae quas! Alias
      necessitatibus explicabo, reprehenderit quam perspiciatis odio maiores
      sapiente. Temporibus illum dicta labore dolorem aliquam amet vero ad
      facere, fugiat unde. Adipisci, aliquid nemo asperiores, voluptatum quas
      veritatis minima repellendus eligendi, placeat autem natus corporis iure
      sint voluptate praesentium modi libero veniam error nisi alias. Saepe
      similique nihil consectetur at sint expedita unde doloribus cupiditate
      vero accusamus illo ipsum reiciendis, architecto et nulla eos fuga laborum
      magni, enim minus laboriosam ad rem. Exercitationem ex nostrum beatae
      repellendus qui aperiam quia, odit nihil quod animi iure quas reiciendis
      alias aliquid dolorem. Porro harum vel, ad unde dignissimos recusandae
      repellendus cum commodi quia deserunt neque praesentium deleniti illo.
      Ratione aperiam sint est cupiditate dolore, nobis, saepe, eum harum
      assumenda fugit cumque quia minima cum vel necessitatibus libero quod
      praesentium accusantium fuga culpa consectetur autem? Fugiat,
      reprehenderit aspernatur ratione fuga neque sequi ipsum eum animi, modi ex
      libero. Deserunt obcaecati vitae doloribus dignissimos quos explicabo
      beatae odio nobis, possimus, non laboriosam repudiandae placeat aspernatur
      sed sapiente, necessitatibus blanditiis aliquid animi natus eos
      praesentium velit nulla recusandae? Sapiente, maxime consequuntur
      consectetur deserunt, earum officiis quae totam quibusdam eum fuga quia
      maiores ipsum, sunt dignissimos iure omnis hic? Ipsam sit temporibus rem
      voluptas veritatis molestiae dolore placeat, ad tempore ducimus deserunt,
      eius fuga praesentium, nisi debitis!
    </div>
  </b-sidebar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  data() {
    return {
      open: false,
    }
  },
  computed: {
    ...mapGetters({
      isSideBarOpen: 'sideBarStatus',
    }),
  },
  watch: {
    isSideBarOpen(val) {
      this.open = val
    },
    open(val) {
      this.$store.dispatch('setSideBarStatus', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.b-sidebar {
  ::v-deep {
    .sidebar-content {
      background-color: #ffffff !important;
      width: 500px !important;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
      }
    }
  }
}
</style>