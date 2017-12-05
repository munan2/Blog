<template>
	<div>
		<div class="table-box">
	        <div class="table-header-container">
	            <el-button type="primary">新增文章</el-button>
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
	                size="mini" @click="editArticle(scope.$index, scope.row)"
	                >编辑</el-button>
	                <el-button
	                size="mini"
	                type="danger"
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
	            tableData: []
	        }
	    },
	    created(){
	    	this.$http.post('/getArticle', {

	    	}).then(res => {
	    		this.tableData = res.data.info;
	    	}).catch(err => {
	    		console.log(err);
	    	})
	    },
	    methods: {
	    	editArticle: function (index, row) {
	    		console.log(index);
	    	}
	    }

	}
</script>
<style>
    .table-header-container {
        padding: 10px;
    }
    .search-box.el-input {
        margin-right: 30px;
        float: right;
        width: 300px;
    }
</style>