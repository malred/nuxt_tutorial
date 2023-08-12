<template>
  <div>
    <!-- 通过name属性来指定，这里使用了layouts/custom.vue -->
    <NuxtLayout name="custom">
      <div class="container">
        <div class="todos">
          <input type="text" placeholder="输入代办事项......" />
          <button>save</button>
        </div>
        <div class="items">
          <Item
            v-for="v in items"
            :name="v.name"
            :isDone="v.isDone"
            @del="handleDel"
            @toggleDone="handleToggleDone"
          ></Item>
        </div>
        <div class="options">
          <Option
            v-for="v in [
              { opt: 'all', line: true },
              { opt: 'done', line: true },
              { opt: 'todo', line: false }
            ]"
            :option="v.opt"
            :line="v.line"
          >
            ></Option
          >
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
// const option = ref('all')
// 使用api提供的数据
const { data } = useFetch('/api/todo')
const items = ref(data)

const handleDel = name => {
  items.value = items.value.filter(item => item.name !== name)
}
const handleToggleDone = name => {
  items.value = items.value.map(item => {
    if (item.name == name) {
      item.isDone = !item.isDone
    }
    return item
  })
}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
}

.items {
  margin: 15px 0;
}
.options {
  margin: 15px 0;
}
.todos {
  margin: 15px 0;
}

.item {
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
  color: grey;
}
.x {
  margin-left: 190px;
  cursor: pointer;
  font-size: 18px;
}

.option {
  cursor: pointer;
  padding: 2px;
  color: grey;
}
.line {
  padding: 2px;
  color: grey;
}
.active {
  padding: 2px;
  color: black;
}

input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 6px;
  width: 300px;
  /* margin: 0 15px; */
  font-size: 14px;
  font-family: 'Microsoft soft';
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  border-radius: 3px;
  padding: 8px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0 15px;
  font-size: 16px;
}
</style>
