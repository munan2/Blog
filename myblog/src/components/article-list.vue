<template>
	<div>
		<div class="table-box">
	        <div class="table-header-container">
	            <el-input class="search-box" v-model="searchContent" placeholder="搜索内容"></el-input>
	        </div>
	        <el-table :data="tableData" style="width: 100%" ref="multipleTable" :default-sort = "{prop: 'date', order: 'descending'}">
	            <el-table-column type="selection" width="100">
	            </el-table-column>
	                <el-table-column
	                prop="date"
	                label="日期"
	                sortable
	                width="250">
	            </el-table-column>
	            <el-table-column
	                prop="title"
	                label="文章标题"
	                width="450">
	            </el-table-column>
	            <el-table-column
	                prop="label"
	                label="文章分类"
	                sortable
	                width="250">
	            </el-table-column>
	            <el-table-column
	                prop="name"
	                label="姓名"
	                sortable
	                width="220">
	            </el-table-column>
	            <el-table-column
	            fixed="right"
	            label="操作"
	            width="180">
	            <template slot-scope="scope">
	                <el-button
	                size="mini" @click="editArticle(scope.row)"
	                >编辑</el-button>
	                <el-button
	                size="mini"
	                type="danger" @click="deleteArticle(scope.row)"
	                >删除</el-button>
	            </template>
	            </el-table-column>
	        </el-table>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'list',
	    data () {
	        return {
	        	searchContent: '',
	            tableData: [],
	            queryFlag: 0
	        }
	    },
	    created (){
	    	this.updateList();
	    },
	    watch: {
	    	"$route" : "updateList",
	    	searchContent (cul, old) {
	    		this.$http.post('/api/searchArticle', {
	    			flag: this.queryFlag,
	    			model: cul,
	    			name: window.localStorage.getItem('username')
	    		}).then(res => {
	    			this.tableData = res.data.info;
	    		}).catch(err => {
	    			console.log(err);
	    		})
	    	}
	    },
	    methods: {
	    	updateList: function () {
	    		if (this.$route.query.flag) {
	    			this.queryFlag = this.$route.query.flag;
	    		} else {
	    			this.queryFlag = 0;
	    		}
	    		if (Number(window.localStorage.getItem('userFlag')) === 0) {
	    			this.$http.post('/api/getArticle', {
	    			flag: this.queryFlag,
	    			name: window.localStorage.getItem('username')
			    	}).then(res => {
			    		this.tableData = res.data.info;
			    	}).catch(err => {
			    		console.log(err);
			    	})
	    		} else {
	    			this.$http.post('/api/getArticle', {
	    			flag: this.queryFlag,
			    	}).then(res => {
			    		this.tableData = res.data.info;
			    	}).catch(err => {
			    		console.log(err);
			    	})
	    		}
	    		
	    	},
	    	editArticle: function (row) {
	    		let id = row._id;
	    		this.$router.push({path: '/home/edit',query:{id: id}})
	    	},
	    	deleteArticle: function (row) {
	    		let id = row._id;
	    		this.$confirm('确认要删除该用户？')
		       	.then(_ => {
		            this.$http.post('/api/deleteArticle', {
		    			id: id
		    		}).then(function (res) {
		    			this.updateList();
		    		}).catch(function (err) {
		    			console.log(err);
		    		})
		        })
          		.catch(_ => {});
	    	}
	    }

	}
</script>
<style>
    .table-header-container {
        padding: 10px;
    }
    .search-box.el-input {
        width: 300px;
    }
</style>