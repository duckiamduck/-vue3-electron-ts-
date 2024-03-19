<!-- src/components/IconSelect/index.vue -->
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    require: false
  }
});

const emit = defineEmits(['update:modelValue']);
const inputValue = toRef(props, 'modelValue');

const visible = ref(false); // 弹窗显示状态

const iconNames: string[] = []; // 所有的图标名称集合

const filterValue = ref(''); // 筛选的值
const filterIconNames = ref<string[]>([]); // 过滤后的图标名称集合

const iconSelectorRef = ref(null);
/**
 * 加载 ICON
 */
function loadIcons() {
  const icons = import.meta.glob('../../assets/icons/*.svg');
  for (const icon in icons) {
    const iconName = icon.split('assets/icons/')[1].split('.svg')[0];
    iconNames.push(iconName);
  }
  filterIconNames.value = iconNames;
}

/**
 * 筛选图标
 */
function handleFilter() {
  if (filterValue.value) {
    filterIconNames.value = iconNames.filter(iconName =>
      iconName.includes(filterValue.value)
    );
  } else {
    filterIconNames.value = iconNames;
  }
}

/**
 * 选择图标
 */
function handleSelect(iconName: string) {
  emit('update:modelValue', iconName);
  visible.value = false;
}

/**
 * 点击容器外的区域关闭弹窗 VueUse onClickOutside
 */
onClickOutside(iconSelectorRef, () => (visible.value = false));

onMounted(() => {
  loadIcons();
});

function onClickOutside (iconSelectorRef: globalThis.Ref, arg1: () => boolean) {
  throw new Error('Function not implemented.');
}
</script>

<template>
  <div class="iconselect-container" ref="iconSelectorRef">
    <el-input
      v-model="inputValue"
      readonly
      @click="visible = !visible"
      placeholder="点击选择图标"
    >
      <template #prepend>
        <svg-icon :icon-class="inputValue" />
      </template>
    </el-input>

    <el-popover
      shadow="none"
      :visible="visible"
      placement="bottom-end"
      trigger="click"
      width="400"
    >
      <template #reference>
        <div
          @click="visible = !visible"
          class="cursor-pointer text-[#999] absolute right-[10px] top-0 height-[32px] leading-[32px]"
        >
          <i-ep-caret-top v-show="visible"></i-ep-caret-top>
          <i-ep-caret-bottom v-show="!visible"></i-ep-caret-bottom>
        </div>
      </template>

      <!-- 下拉选择弹窗 -->
      <el-input
        class="p-2"
        v-model="filterValue"
        placeholder="搜索图标"
        clearable
        @input="handleFilter"
      />
      <el-divider border-style="dashed" />

      <el-scrollbar height="300px">
        <ul class="icon-list">
          <li
            class="icon-item"
            v-for="(iconName, index) in filterIconNames"
            :key="index"
            @click="handleSelect(iconName)"
          >
            <el-tooltip :content="iconName" placement="bottom" effect="light">
              <svg-icon
                color="var(--el-text-color-regular)"
                :icon-class="iconName"
              />
            </el-tooltip>
          </li>
        </ul>
      </el-scrollbar>
    </el-popover>
  </div>
</template>


