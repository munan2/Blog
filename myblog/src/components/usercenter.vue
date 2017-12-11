<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="220">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="deleteUser(scope.row)" size="mini" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    created () {
    	this.updateUser();
    },
    methods: {
    	updateUser: function () {
    		this.$http.post('/getAllUser', {
    			flag: 0
    		}).then(function (res) {
    	     this.tableData = res.data.userInfo;
    		}).catch(function (err) {
    			
    		})
    	},
      deleteUser: function (row) {
        let id = row._id;
        this.$confirm('确认要删除该用户？')
          .then(_ => {
            this.$http.post('/deleteUser', {
              id: id
            }).then(function (res) {
              this.updateUser();
            }).catch(function (err) {
              console.log(err);
            })
          })
          .catch(_ => {});
      }
    },
    watch: {
      '$route': 'updateUser'
    },
    data() {
      return {
        tableData: []
      }
    }
  }
</script>
<style>
</style>