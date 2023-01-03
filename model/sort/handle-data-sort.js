function handleDataSort(data) {
    const re_sorting_options = [];
    data.sorting_options.forEach((element) => {
        re_sorting_options.push({
            re_id: element.id,
            re_label: element.label,
        });
    });
    return re_sorting_options;
}
export default handleDataSort;
