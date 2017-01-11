module.exports = (template, values) => {
    Object.keys(values).forEach((placeholder) => {
        template = template.replace(new RegExp(placeholder, "g"), values[placeholder])
    })
    return template;
}
