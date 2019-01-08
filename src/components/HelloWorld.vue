<template>
  <div class="hello">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column align="right">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {findDemo} from 'api/demo'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.findData()
  },
  methods: {
    findData () {
      let $this = this
      findDemo().then((res) => {
        if (res.code !== 200) {
          $this.$message.error(res.message)
        } else {
          $this.tableData = res.data
        }
      }).catch(function (response) {
        $this.$message.error(response.message)
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
