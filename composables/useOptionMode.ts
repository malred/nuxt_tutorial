// composables/useOptionMode.ts
const useOptionMode = () => {
    const optionMode = useState("option", () => "all");
    // 修改option
    const changeOptionMode = (name: string) => {
        optionMode.value = name
    }
    // 是否显示该todo项
    const isShow = (isDone: boolean) => {
        const val = optionMode.value
        if (val == 'all') {
            return true
        }
        if (val == 'done') {
            return isDone
        }
        if (val == 'todo') {
            return !isDone
        }
    }
    return {
        optionMode,
        changeOptionMode,
        isShow
    };
};

export default useOptionMode;