export function mapModalProjectSelection(projects, projectTypes) {
    const result = [];
    // console.log("=============");
    // console.log("1",projects);
    // console.log("2",projectTypes);
    // console.log("=============");

    projectTypes.forEach((type) => {
        console.log("Tipo: ",type.nome)
        const typeEntity = {
            label: type.nome,
            value: type.id,
            children: []
        }
        let prjPos = 1;
        projects.forEach((project) => {
            console.log("Progetto: ",project.nome)
            if (project.parent_id === type.id) {
                typeEntity.children.push({
                    label: project.nome,
                    value: type.id + "-" + prjPos,
                })
                prjPos++;
            }
        })
        result.push(typeEntity);
    })
    console.log("Risultato mapping: ",result);
    return result;
}