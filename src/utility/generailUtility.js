export function findProjectNameFromCascaderValue(value, cascaderData) {
    const values = value.split("-");
    console.log("Cascade data: ", cascaderData);
    cascaderData.forEach((type) => {
        if (type.value === values[0]) {
            type.children.forEach((project) => {
                if (project.value === values[1]) {
                    return project;
                }
            })
        }
    });
}